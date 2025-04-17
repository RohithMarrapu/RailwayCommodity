import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import csv from 'csv-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const csvFilePath = path.join(__dirname, 'users.csv');

// Create CSV file if it doesn't exist
if (!fs.existsSync(csvFilePath)) {
  fs.writeFileSync(csvFilePath, 'contactNo,name,email,username,password\n');
}

// Signup Endpoint
app.post('/signup', (req, res) => {
  const { contactNo, name, email, username, password, rePassword } = req.body;

  if (!username || !password || password !== rePassword) {
    return res.status(400).json({ message: 'Invalid input or passwords do not match' });
  }

  // Check for duplicate username
  let duplicate = false;
  const tempUsers = [];

  fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', (row) => {
      tempUsers.push(row);
      if (row.username === username) duplicate = true;
    })
    .on('end', () => {
      if (duplicate) {
        return res.status(409).json({ message: 'Username already exists' });
      }

      const data = `${contactNo},${name},${email},${username},${password}\n`;
      fs.appendFile(csvFilePath, data, (err) => {
        if (err) return res.status(500).json({ message: 'Error writing to file' });
        res.status(200).json({ message: 'Signup successful' });
      });
    });
});

// Login Endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  let found = false;

  fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', (row) => {
      if (row.username === username && row.password === password) {
        found = true;
      }
    })
    .on('end', () => {
      if (found) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
