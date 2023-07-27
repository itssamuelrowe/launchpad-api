const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
  const userAgent = req.headers['user-agent'].toLowerCase();

  if (userAgent.includes('instagram')) {
    const file = './index.js'; // Replace with the actual path to your PDF file

    res.setHeader('Content-type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename=blablabla');
    res.setHeader('Content-Transfer-Encoding', 'binary');
    res.setHeader('Accept-Ranges', 'bytes');

    // Stream the PDF file to the response
    fs.createReadStream(file).pipe(res);
  } else {
    res.redirect('https://ifeelblanko.com');
  }
});

const port = 3000; // Replace with your desired port number
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
