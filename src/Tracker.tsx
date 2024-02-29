import React from 'react';
import TrackerTable from './TrackerTable';
import { Item } from './types';

interface TrackerProps {
    items: Item[]
}

const Tracker =  (props: TrackerProps) => {
    return (
        <div>
            <TrackerTable items={props.items} />
        </div>
    );
};

export default Tracker;

