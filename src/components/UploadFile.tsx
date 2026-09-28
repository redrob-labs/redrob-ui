// Standard packages
import React, { FC, useState } from "react";

// Custom packages
import DropZone from "../components/DropZone";
import UploadItem from "./UploadItem";

const UploadFile: FC = () => {
  /** const */
  const allowedExtensions = ".pdf,.doc,.docx,.txt";
  const MAX_FILE_SIZE_MB = 20;
  /** useState hooks */
  const [files, setFiles] = useState<File[]>([]);
  /** custom handler */
  const fileExtension = (fileName: string) =>
    fileName.split(".").pop()?.toLowerCase();

  const onFile = (nextFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...nextFiles]);
  };

  const removeFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div>
      <DropZone
        onFile={onFile}
        fileExtension={fileExtension}
        allowedExtensions={allowedExtensions}
        maxFileSize={MAX_FILE_SIZE_MB}
      />
      {files.length > 0 && (
        <div className="mt-4">
          {files.map((file, index) => (
            <UploadItem
              fileName={file?.name}
              fileSize={(file.size / (1024 * 1024)).toFixed(1)}
              index={index}
              extension={fileExtension(file.name)?.toLocaleUpperCase()}
              onRemoveFile={removeFile}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UploadFile;
