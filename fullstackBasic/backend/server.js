import express from "express";
import dotenv from "dotenv";

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready')
});

//get a list of 5 jokes
const jokes = [
    {
        id: 1,
        title : 'Joke 1',
        content: 'This is a joke'
    },              
    {
        id: 2,
        title : 'Joke 2',
        content: 'This is a joke'
    },
    {
        id: 3,
        title : 'Joke 3',
        content: 'This is a joke'
    },
    {
        id: 4,
        title : 'Joke 4',
        content: 'This is a joke'
    },
    {
        id: 5,
        title : 'Joke 5',
        content: 'This is a joke'
    }
];

app.get('/api/jokes', (req, res) => {
    res.send(jokes.slice(0, 5));
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});