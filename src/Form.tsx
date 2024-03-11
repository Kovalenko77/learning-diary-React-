import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

interface FormProps {
  date: string;
  timeSpentEnglish: string;
  timeSpentIT: string;
  submit: (e: React.FormEvent<EventTarget>) => void;
  setDate: (value: string) => void;
  setTimeSpentEnglish: (value: string) => void;
  setTimeSpentIT: (value: string) => void;
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
    <form className="form-time-to-learn" onSubmit={submit}>
      <div>
        <TextField
          label="Date"
          id="outlined-size-small"
          defaultValue={date}
          size="small"
          onChange={(event) => setDate(event.target.value)}
        />
      </div>
      <div>
        <TextField
          label="Time to learn English"
          id="outlined-size-small"
          defaultValue={timeSpentEnglish}
          size="small"
          onChange={(event) => {
            setTimeSpentEnglish(event.target.value);
          }}
        />
      </div>
      <div>
        <TextField
          label="Time to learn IT"
          id="outlined-size-small"
          defaultValue={timeSpentIT}
          size="small"
          onChange={(event) => {
            setTimeSpentIT(event.target.value);
          }}
        />
      </div>
      <Button variant="contained" disableElevation type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
