import React from 'react';
import { useRef } from 'react';

const AddData = ({ date, timeSpentEnglish, timeSpentIT, submit, setDate, setTimeSpentEnglish, setTimeSpentIT }) => {
    // const inputRef = useRef();
    console.log('----date:', date,'timeSpentEnglish:', timeSpentEnglish, 'timeSpentIT', timeSpentIT);
    return (
        <form onSubmit={submit}>
            <div>
                <label>Date</label>
                <input
                    type="data"
                    placeholder="01.01.2024"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                ></input>
            </div>
            <div>
                <label>Time to learn English</label>
                <input
                    type="number"
                    placeholder="time in hours"
                    value={timeSpentEnglish}
                    onChange={(e) => setTimeSpentEnglish(e.target.value)}
                ></input>
                {/* //<label>Comment</label>
                //<input type="text" placeholder="text some info "></input> */}
            </div>
            <div>
                <label>Time to learn IT</label>
                <input
                    type="number"
                    placeholder="time in hours"
                    value={timeSpentIT}
                    onChange={(e) => setTimeSpentIT(e.target.value)}
                ></input>
                {/* <label>Comment</label>
                <input type="text" placeholder="text some info "></input> */}
            </div>
            <button>submit</button>
        </form>
    );
};

export default AddData;

// [{
//   id: 1,
//   date: "20.02.2024",
//   data: {
//       english: {
//           timeSpent: 0.5,
//           comment: "write 15 examples"
//       },
//       IT: {
//           timeSpent: 3,
//           comment: "Typescript"
//       },
//       dancing: {
//           timeSpent: 3,
//           comment: ""
//       },
//   }
// }]

// [{
//   id: 1,
//   date: "20.02.2024",
//   data: {
//       english: {
//           timeSpent: 0.5,
//       },
//       IT: {
//           timeSpent: 3,
//       }
//   }
// }]

// onClick={ () => inputRef.current.focus()}
