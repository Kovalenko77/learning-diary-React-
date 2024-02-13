import React from 'react';
import { calculateTotalTimeSpent, calculateAverageTimeSpent } from './utils';

const TrackerTable = ({ items }) => {
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
            <td>{calculateTotalTimeSpent(items, 'english')}</td>
            <td>{calculateTotalTimeSpent(items, 'IT')}</td>
        </tr>
    );
    const averageRow = (
        <tr>
            <th>Average</th>
            <td>{calculateAverageTimeSpent(items, 'english')}</td>
            <td>{calculateAverageTimeSpent(items, 'IT')}</td>
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
