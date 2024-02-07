import React from 'react';

const trecker = ({timeSpentEnglish, timeSpentIT, date, items}) => {
    
     let res = items.map(function(item) {

        return <tr key={item.id}>
           <td>{item.date}</td>
           <td>{item.data.IT.timeSpent}</td>
           <td>{item.data.english.timeSpent}</td>
        </tr>;
     });
 
     return <table>
        <thead>
           <tr>
              <th>date</th>
              <th>timeSpentEnglish</th>
              <th>timeSpentIT</th>
           </tr>
        </thead>
        <tbody>
           {res}
        </tbody>
     </table>; 
};

export default trecker;

