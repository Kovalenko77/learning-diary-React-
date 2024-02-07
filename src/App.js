import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import AddData from './AddData';
import Trecker from './Trecker'

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

    const [date, setDate] = useState('21.12.2020');
    const [timeSpentEnglish, setTimeSpentEnglish] = useState(5);
    const [timeSpentIT, setTimeSpentIT] = useState(0);

    // TODO: refactor params to object  
    const addItem = (date, timeSpentIT, timeSpentEnglish) => {
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
        console.log('!!!!date:', date, 'timeSpentEnglish:', timeSpentEnglish, 'timeSpentIT', timeSpentIT);
        addItem(date, timeSpentIT, timeSpentEnglish);
        console.log(items);
    };

    return (
        <div className="App">
            <Header />
            <Nav />
            <AddData
                timeSpentEnglish={timeSpentEnglish}
                timeSpentIT={timeSpentIT}
                date={date}
                setDate={setDate}
                setTimeSpentIT={setTimeSpentIT}
                setTimeSpentEnglish={setTimeSpentEnglish}
                submit={submit}
            />
            <Trecker 
            timeSpentEnglish={timeSpentEnglish}
            timeSpentIT={timeSpentIT}
            date={date}
            items={items}
            />
        </div>
    );
}

export default App;
