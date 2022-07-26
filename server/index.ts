import express from 'express';
import dotenv from 'dotenv';
// import { DB_SERVICE } from './src/data/';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
	res.status(200).send('Express + TypeScript Server');
})

app.listen(port, () => {
	console.log(`[server] Server is running at https://localhost:${port}`)
})
