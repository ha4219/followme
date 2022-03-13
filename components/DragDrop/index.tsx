import styled from "@emotion/styled";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import AWS from "aws-sdk";
import { config } from "@config/s3Config";
import { v1 } from "uuid";

interface IFileTypes {
  id: number;
  object: File;
}

AWS.config.update({
  accessKeyId: config.accessKeyID,
  secretAccessKey: config.secretAccessKey,
});

const myBucket = new AWS.S3({
  params: { Bucket: config.bucketName },
  region: config.region,
});

const DragDrop = ({ url, setUrl }) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [files, setFiles] = useState<IFileTypes[]>([]);
  const [file, setFile] = useState<File>();

  const dragRef = useRef<HTMLDivElement | null>(null);

  const putObjectWrapper = (params) => {
    return new Promise((resolve, reject) => {
      myBucket.putObject(params, function (err, result) {
        if (err) reject(err);
        if (result) resolve(result);
      });
    });
  };

  const onChangeFiles = useCallback(
    (e: ChangeEvent<HTMLInputElement> | any): void => {
      let selectFiles: File[] = [];
      if (e.type === "drop") {
        selectFiles = e.dataTransfer.files;
      } else {
        selectFiles = e.target.files;
      }
      // console.log(reader.readyState);

      // setUrl(reader.result);
      // console.log(selectFiles[0]);
      // reader.readAsArrayBuffer(selectFiles[0]);
      // setFile(selectFiles[0]);
      // console.log(reader.result);

      // console.log(reader.result);
      const reader = new FileReader();

      const format = selectFiles[0].name.split(".")[1];
      const filename = `${v1()}.${format}`;

      putObjectWrapper({
        Body: selectFiles[0],
        Bucket: config.bucketName,
        Key: filename,
      }).then(() => {
        setUrl(`${process.env.NEXT_PUBLIC_S3URL}/${filename}`);
      });
    },
    [file]
  );

  useEffect(() => {
    console.log(1, 1, url);
  }, [url]);

  const handleDragIn = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOut = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer?.files) {
      setIsDragging(true);
    }
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();

      onChangeFiles(e);
      setIsDragging(false);
    },
    [onChangeFiles]
  );

  const initDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.addEventListener("dragenter", handleDragIn);
      dragRef.current.addEventListener("dragleave", handleDragOut);
      dragRef.current.addEventListener("dragover", handleDragOver);
      dragRef.current.addEventListener("drop", handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  const resetDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.removeEventListener("dragenter", handleDragIn);
      dragRef.current.removeEventListener("dragleave", handleDragOut);
      dragRef.current.removeEventListener("dragover", handleDragOver);
      dragRef.current.removeEventListener("drop", handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  useEffect(() => {
    initDragEvents();

    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);

  return (
    <DragDropContainer className="DragDrop" ref={dragRef}>
      <input
        type="file"
        id="fileUpload"
        hidden
        multiple={true}
        onChange={onChangeFiles}
      />

      <label
        className={isDragging ? "DragDrop-File-Dragging" : "DragDrop-File"}
        htmlFor="fileUpload"
      >
        {url ? <img src={url} alt="test" /> : <div>upload</div>}
      </label>
      {/* <img src={file} /> */}
    </DragDropContainer>
  );
};

const DragDropContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 400px;
  height: 200px;
  text-align: center;
  border: 1px solid #000000;

  & img {
    width: 400px;
    height: 200px;
  }
`;

export default DragDrop;
