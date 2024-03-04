import React from "react";
import TrackerTable from "./TrackerTable";
import { Item } from "./types";
import UploadFile from "./UploadFile";

interface TrackerProps {
  items: Item[];
  setItems: (value: string) => void;
}

const Tracker = (props: TrackerProps) => {
  return (
    <div>
      <TrackerTable items={props.items} />
      <UploadFile setItems={props.setItems} />
    </div>
  );
};

export default Tracker;
