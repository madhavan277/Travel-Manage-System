const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const packages = [
  { id: 1, title: 'Goa Beach Getaway', price: 9999, img: 'https://source.unsplash.com/600x400/?goa,beach' },
  { id: 2, title: 'Shimla Hills Retreat', price: 12499, img: 'https://source.unsplash.com/600x400/?shimla,hills' },
  { id: 3, title: 'Jaipur Royal Tour', price: 8999, img: 'https://source.unsplash.com/600x400/?jaipur,fort' }
];

app.get('/api/packages', (req, res) => res.json(packages));

app.listen(port, () => console.log(`Backend running on http://localhost:${port}`));
