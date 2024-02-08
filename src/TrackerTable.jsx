import React from 'react';

const TrackerTable = ({ items }) => {
    let tableRowDataArr = items.map(function (item) {
        return (
            <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.data.IT.timeSpent}</td>
                <td>{item.data.english.timeSpent}</td>
            </tr>
        );
    });
    return (
        <div className="tracker">
            <table className="tracker-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>TimeSpentEnglish</th>
                        <th>TimeSpentIT</th>
                    </tr>
                </thead>
                <tbody>{tableRowDataArr}</tbody>
            </table>
        </div>
    );
};

export default TrackerTable;
