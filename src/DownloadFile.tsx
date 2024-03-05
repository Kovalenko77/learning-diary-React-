import React from 'react';
import { Item } from './types';

interface DownloadFileProps {
  items: Item[];
}

const DownloadFile = ({ items }: DownloadFileProps) => {
  function download(content: string, fileName: string, contentType: string) {
    const a = document.createElement('a');
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }

  const onDownload = () => {
    download(JSON.stringify(items), 'yourfile.json', 'text/plain');
  };

  return (
    <div>
      <button className="download-button" onClick={onDownload}>
        Download
      </button>
    </div>
  );
};

export default DownloadFile;
