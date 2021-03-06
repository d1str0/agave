import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

dotenv.config();

const port = process.env.SERVER_PORT;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// define a route handler for the default home page
app.get('/', (req, res) => {
  res.render('index');
});

app.listen( port, () => {
  console.log(`server started at http://localhost:${port}`);
});
