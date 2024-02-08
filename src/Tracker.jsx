import React from 'react';
import TrackerTable from './TrackerTable';

const Tracker = ({ items }) => {
    return (
        <div>
            <TrackerTable items={items} />
        </div>
    );
};

export default Tracker;
