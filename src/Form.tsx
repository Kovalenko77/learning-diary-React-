import React from 'react';
interface FormProps {
  date: string;
  timeSpentEnglish: number;
  timeSpentIT: number;
  submit: (e: React.FormEvent<EventTarget>) => void;
  setDate: (value: string) => void;
  setTimeSpentEnglish: (value: number) => void;
  setTimeSpentIT: (value: number) => void;
}

const Form = ({
  date,
  timeSpentEnglish,
  timeSpentIT,
  submit,
  setDate,
  setTimeSpentEnglish,
  setTimeSpentIT,
}: FormProps) => {
  return (
    <form onSubmit={submit}>
      <div>
        <label>Date</label>
        <input
          type="data"
          placeholder="01.01.2024"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        ></input>
      </div>
      <div>
        <label>Time to learn English</label>
        <input
          type="number"
          placeholder="time in hours"
          value={timeSpentEnglish}
          onChange={(event) => setTimeSpentEnglish(event.target.valueAsNumber)}
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
          onChange={(event) => setTimeSpentIT(event.target.valueAsNumber)}
        ></input>
        {/* <label>Comment</label>
                <input type="text" placeholder="text some info "></input> */}
      </div>
      <button>submit</button>
    </form>
  );
};

export default Form;
