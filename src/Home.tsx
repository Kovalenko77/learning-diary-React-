import React from 'react';
import Form from './Form';

interface HomeProps {
  date: string;
  timeSpentEnglish: number;
  timeSpentIT: number;
  submit: (e: React.FormEvent<EventTarget>) => void;
  setDate: (value: string) => void;
  setTimeSpentEnglish: (value: number) => void;
  setTimeSpentIT: (value: number) => void;
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
    <main>
      <Form
        timeSpentEnglish={timeSpentEnglish}
        timeSpentIT={timeSpentIT}
        date={date}
        setDate={setDate}
        setTimeSpentIT={setTimeSpentIT}
        setTimeSpentEnglish={setTimeSpentEnglish}
        submit={submit}
      />
    </main>
  );
};

export default Home;
