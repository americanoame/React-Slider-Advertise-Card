const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Use the port provided by Heroku or default to 3000

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});