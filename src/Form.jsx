import React from 'react';

const Form = ({ date, timeSpentEnglish, timeSpentIT, submit, setDate, setTimeSpentEnglish, setTimeSpentIT }) => {
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
                {/* <label>Comment</label>
                <input type="text" placeholder="text some info "></input> */}
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

export default Form;
