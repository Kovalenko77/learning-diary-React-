import React from 'react';
import { calculateTotalTimeSpent, calculateAverageTimeSpent } from './utils';
import { Item } from './types';
import {Discipline} from './types/constants'


interface TrackerTableProps {
    items: Item[]
}

const TrackerTable = ({ items } : TrackerTableProps ) => {
    let tableRowDataArr = items.map(function (item) {
        return (
            <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.data.english.timeSpent}</td>
                <td>{item.data.IT.timeSpent}</td>
            </tr>
        );
    });
    const summaryRow = (
        <tr>
            <th>Sum</th>
            <td>{calculateTotalTimeSpent(items, Discipline.english)}</td>
            <td>{calculateTotalTimeSpent(items, Discipline.IT)}</td>
        </tr>
    );
    const averageRow = (
        <tr>
            <th>Average</th>
            <td>{calculateAverageTimeSpent(items, Discipline.english)}</td>
            <td>{calculateAverageTimeSpent(items, Discipline.IT)}</td>
        </tr>
    );
    return (
        <div className="tracker">
            <table className="tracker-table">
                <thead className="tracker-table-head">
                    <tr>
                        <th>Date</th>
                        <th>TimeSpentEnglish</th>
                        <th>TimeSpentIT</th>
                    </tr>
                </thead>
                <tbody className="tracker-table-body">{tableRowDataArr}</tbody>
                <tfoot className="tracker-table-foot">
                    {summaryRow}
                    {averageRow}
                </tfoot>
            </table>
        </div>
    );
};

export default TrackerTable;
