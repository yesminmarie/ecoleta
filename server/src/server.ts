import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    response.json([
        'Yesmin',
        'Lucas',
        'Luciane',
        'Daiane',
        'Gilson'
    ])
});

app.listen(3333);