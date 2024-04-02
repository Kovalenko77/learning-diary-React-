import React from 'react';
import Button from '@mui/material/Button';
import type { Item } from './types';
import { useTranslation } from 'react-i18next';

interface DownloadFileProps {
  items: Item[];
}

const DownloadFile = ({ items }: DownloadFileProps) => {
  const { t } = useTranslation();

  const download = (content: string, fileName: string, contentType: string) => {
    const a = document.createElement('a');
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  };

  const onDownload = () => {
    download(JSON.stringify(items), 'yourfile.json', 'text/plain');
  };

  return (
    <div className="download">
      <Button
        className="download-button"
        variant="contained"
        color="success"
        size="small"
        onClick={onDownload}
      >
        {t('download')}
      </Button>
    </div>
  );
};

export default DownloadFile;
