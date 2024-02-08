import React from 'react';
import Form from './Form';

const Home = ({ date, timeSpentEnglish, timeSpentIT, submit, setDate, setTimeSpentEnglish, setTimeSpentIT }) => {
    return (
        <div>
            <Form
                timeSpentEnglish={timeSpentEnglish}
                timeSpentIT={timeSpentIT}
                date={date}
                setDate={setDate}
                setTimeSpentIT={setTimeSpentIT}
                setTimeSpentEnglish={setTimeSpentEnglish}
                submit={submit}
            />
        </div>
    );
};

export default Home;
