import React from 'react';
import TrackerTable from './TrackerTable';
import UploadFile from './UploadFile';
import DownloadFile from './DownloadFile';
import type { Item } from './types';

interface TrackerProps {
  items: Item[];
  setItems: (items: Item[]) => void;
}

const Tracker = (props: TrackerProps) => {
  return (
    <>
      <TrackerTable items={props.items} />
      <UploadFile setItems={props.setItems} />
      <DownloadFile items={props.items} />
    </>
  );
};

export default Tracker;
