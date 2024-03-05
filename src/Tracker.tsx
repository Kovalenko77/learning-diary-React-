import React from 'react';
import TrackerTable from './TrackerTable';
import { Item } from './types';
import UploadFile from './UploadFile';
import DownloadFile from './DownloadFile';

interface TrackerProps {
  items: Item[];
  setItems: (value: string) => void;
}

const Tracker = (props: TrackerProps) => {
  return (
    <div>
      <TrackerTable items={props.items} />
      <UploadFile setItems={props.setItems} />
      <DownloadFile items={props.items} />
    </div>
  );
};

export default Tracker;
