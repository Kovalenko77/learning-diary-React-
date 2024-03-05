import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Tracker from './Tracker';
import { getCurrentDateFormatted } from './utils';

const DEFAULT_DATE_VALUE = getCurrentDateFormatted();
const DEFAULT_TIME_SPENT_ENGLISH_VALUE = 1;
const DEFAULT_TIME_SPENT_IT_VALUE = 2;

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items') || '[]') || []);
  const [date, setDate] = useState(DEFAULT_DATE_VALUE);
  const [timeSpentEnglish, setTimeSpentEnglish] = useState(DEFAULT_TIME_SPENT_ENGLISH_VALUE);
  const [timeSpentIT, setTimeSpentIT] = useState(DEFAULT_TIME_SPENT_IT_VALUE);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const addItem = ({
    date,
    timeSpentIT,
    timeSpentEnglish,
  }: {
    date: string;
    timeSpentIT: number;
    timeSpentEnglish: number;
  }) => {
    const id = items.length;
    const myNewItem = {
      id: id,
      date: date,
      data: {
        english: {
          timeSpent: timeSpentEnglish,
        },
        IT: {
          timeSpent: timeSpentIT,
        },
      },
    };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  const submit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
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
          <Route path="tracker" element={<Tracker items={items} setItems={setItems} />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
