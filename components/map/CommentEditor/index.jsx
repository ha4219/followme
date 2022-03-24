import { v1 } from "uuid";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import AWS from "aws-sdk";
import { config } from "@config/s3Config";
import { useMemo, useRef } from "react";

AWS.config.update({
  accessKeyId: config.accessKeyID,
  secretAccessKey: config.secretAccessKey,
});

const myBucket = new AWS.S3({
  params: { Bucket: config.bucketName },
  region: config.region,
});

// const Quill = dynamic(import("react-quill"), {
//   ssr: false,
//   loading: () => <p>Loading ...</p>,
// });
const Quill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    return function comp({ forwardedRef, ...props }) {
      return <RQ ref={forwardedRef} {...props} />;
    };
  },
  { ssr: false }
);

const CommentEditor = ({ setValue }) => {
  const ref = useRef();
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ size: ["small", false, "large", "huge"] }, { color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            { align: [] },
          ],
          ["image"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    []
  );
  const putObjectWrapper = (params) => {
    return new Promise((resolve, reject) => {
      myBucket.putObject(params, function (err, result) {
        if (err) reject(err);
        if (result) resolve(result);
      });
    });
  };
  function imageHandler() {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.addEventListener("change", async () => {
      const file = input.files[0];
      const format = file.type.split("/")[1];
      const fileName = `${v1()}.${format}`;
      putObjectWrapper({
        Body: file,
        Bucket: config.bucketName,
        Key: fileName,
      })
        .then((res) => {
          if (ref.current) {
            const range = ref.current.getEditorSelection();
            ref.current
              .getEditor()
              .insertEmbed(
                range.index,
                "image",
                `${process.env.NEXT_PUBLIC_S3URL}/${fileName}`
              );
            ref.current.getEditor(range.index + 1);
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          input.remove();
        });
    });
  }

  return (
    <QuillContainer forwardedRef={ref} onChange={setValue} modules={modules} />
  );
};

const QuillContainer = styled(Quill)``;

export default CommentEditor;
