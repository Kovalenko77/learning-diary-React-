import React from 'react';
import Form from './Form';

interface HomeProps {
  date: string;
  timeSpentEnglish: string;
  timeSpentIT: string;
  submit: (e: React.FormEvent<EventTarget>) => void;
  setDate: (value: string) => void;
  setTimeSpentEnglish: (value: string) => void;
  setTimeSpentIT: (value: string) => void;
}

const Home = ({
  date,
  timeSpentEnglish,
  timeSpentIT,
  submit,
  setDate,
  setTimeSpentEnglish,
  setTimeSpentIT,
}: HomeProps) => {
  return (
    <Form
      timeSpentEnglish={timeSpentEnglish}
      timeSpentIT={timeSpentIT}
      date={date}
      setDate={setDate}
      setTimeSpentIT={setTimeSpentIT}
      setTimeSpentEnglish={setTimeSpentEnglish}
      submit={submit}
    />
  );
};

export default Home;
