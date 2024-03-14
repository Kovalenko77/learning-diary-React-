import React from 'react';
import type { ChangeEvent } from 'react';
import type { Item } from './types';

interface UploadFileProps {
  setItems: (items: Item[]) => void;
}

const UploadFile = ({ setItems }: UploadFileProps) => {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;
    const selectedFile = fileInput.files && fileInput.files[0];

    if (selectedFile) {
      readFileContents(selectedFile);
    }
  };

  const readFileContents = (file: File) => {
    const fileReader = new FileReader();

    fileReader.onload = (event: ProgressEvent<FileReader>) => {
      const content = event.target?.result as string;
      setItems(JSON.parse(content));
    };

    fileReader.onerror = (event) => {
      console.error('Ошибка при чтении файла:', (event.target as FileReader).error);
    };

    fileReader.readAsText(file);
  };

  return (
    <div className="upload-file">
      <input className="upload-file-input" type="file" onChange={handleFileChange} />
    </div>
  );
};

export default UploadFile;
