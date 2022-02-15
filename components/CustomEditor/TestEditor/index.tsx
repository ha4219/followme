import dynamic from "next/dynamic";
import { useMemo, useRef } from "react";
import Modal from "react-modal";

const Test = ({ isOpen }) => {
  return (
    <ReactModal isOpen>
      <div>test</div>
    </ReactModal>
  );
};

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    return function comp({ forwardedRef, ...props }) {
      return <RQ ref={forwardedRef} {...props} />;
    };
  },
  { ssr: false }
);

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

function ReactQuillContainer({ description, setDescription }) {
  const quillRef = useRef();

  const imageHandler = () => {
    if (!quillRef.current) return;
    const quill = quillRef.current?.getEditor();
    if (!quill) return;
    const input = document.createElement("input");

    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    document.body.appendChild(input);

    input.click();

    input.onchange = async () => {
      const [file] = input.files;

      // S3 Presigned URL로 업로드하고 image url 받아오기
      // const { preSignedPutUrl: presignedURL, readObjectUrl: imageURL } = (
      //   await getS3PresignedURL(file.name)
      // ).data;
      // await uploadImage(presignedURL, file);
      const imageURL =
        "https://t1.daumcdn.net/cfile/tistory/231BE843594B7CEE24";

      // 현재 커서 위치에 이미지를 삽입하고 커서 위치를 +1 하기
      const range = quillRef.current.getEditorSelection();
      quillRef.current.getEditor().insertEmbed(range.index, "image", imageURL);
      quillRef.current.getEditor().setSelection(range.index + 1);
      document.body.querySelector(":scope > input").remove();
    };
  };

  const mapTest = () => {
    if (!quillRef.current) return;
    const quill = quillRef.current?.getEditor();
    if (!quill) return;
    const value = `<p><span style="color: red;">test</span></p>`;
    // const delta = quill.clipboard.convert(value);
    // quill.setContents(delta, "silent");
    quill.clipboard.dangerouslyPasteHTML(value);
  };

  // useMemo를 사용한 이유는 modules가 렌더링마다 변하면 에디터에서 입력이 끊기는 버그가 발생
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
          ["clean"],
        ],
        handlers: { image: imageHandler, link: mapTest },
      },
    }),
    []
  );

  return (
    <ReactQuill
      forwardedRef={quillRef}
      placeholder="본문을 입력하세요..."
      modules={modules}
      formats={formats}
      value={description}
      onChange={setDescription}
    />
  );
}

export default ReactQuillContainer;
