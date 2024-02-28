import express from 'express';
const app = express();
const PORT = 3000;
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, '/public/assets')));

app.get('/assets/styles.css', (req, res) => {
  return res.sendFile(path.resolve(__dirname, '/public/assets/styles.css'));
});

app.get('/gif', (req, res) => {
  return res.sendFile(path.resolve(__dirname, '/public/assets/overview.gif'));
});

// app.get('/assets', (req, res) => {
//   return res.sendFile(path.resolve(__dirname, 'client/assets'));
// });

app.get('/', (req, res) => {
  return res.sendFile(path.resolve(__dirname, '/public/index.html'));
});

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));

export default app;
