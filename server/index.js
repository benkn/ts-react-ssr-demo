import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';

import { App } from '../src/App';

const PORT = process.env.PORT || 3006;
const app = express();

app.disable('x-powered-by');

app.get('/', (req, res) => {
    const app = renderToString(<App />);

    const html = '<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>CTH</title></head><body><div id="app">' + app + '</div></body></html>';

    return res.send(html);
});

app.use(express.static('./build'));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});