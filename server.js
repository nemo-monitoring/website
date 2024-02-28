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
// app.use(express.static(path.join(__dirname, '/client/')));

app.get('/assets/styles.css', (req, res) => {
  return res.sendFile(path.resolve(__dirname, 'client/assets/styles.css'));
});

// app.get('/assets', (req, res) => {
//   return res.sendFile(path.resolve(__dirname, 'client/assets'));
//   });

app.get('/', (req, res) => {
  return res.sendFile(path.resolve(__dirname, 'client/index.html'));
});

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));

export default app;
