import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Tracker from './Tracker';

const DEFAULT_DATE_VALUE = '21.12.2020';
const DEFAULT_TIME_SPENT_ENGLISH_VALUE = 1;
const DEFAULT_TIME_SPENT_IT_VALUE = 2;

function App() {
    const [items, setItems] = useState([
        {
            id: 0,
            date: '20.02.2024',
            data: {
                english: {
                    timeSpent: 0,
                },
                IT: {
                    timeSpent: 0,
                },
            },
        },
    ]);

    const [date, setDate] = useState(DEFAULT_DATE_VALUE);
    const [timeSpentEnglish, setTimeSpentEnglish] = useState(DEFAULT_TIME_SPENT_ENGLISH_VALUE);
    const [timeSpentIT, setTimeSpentIT] = useState(DEFAULT_TIME_SPENT_IT_VALUE);

    const addItem = ({ date, timeSpentIT, timeSpentEnglish }) => {
        const id = items.length;
        const myNewItem = {
            id: id,
            date: date,
            data: {
                english: {
                    timeSpent: Number(timeSpentEnglish),
                },
                IT: {
                    timeSpent: Number(timeSpentIT),
                },
            },
        };
        const listItems = [...items, myNewItem];
        setItems(listItems);
    };

    const submit = (e) => {
        e.preventDefault();
        addItem({ date, timeSpentIT, timeSpentEnglish });
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route
                        path="/"
                        element={
                            <Home
                                timeSpentEnglish={timeSpentEnglish}
                                timeSpentIT={timeSpentIT}
                                date={date}
                                setDate={setDate}
                                setTimeSpentIT={setTimeSpentIT}
                                setTimeSpentEnglish={setTimeSpentEnglish}
                                submit={submit}
                            />
                        }
                    ></Route>
                    <Route path="tracker" element={<Tracker items={items} />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
