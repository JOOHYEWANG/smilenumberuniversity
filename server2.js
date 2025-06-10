// server.js
const express = require('express');
const app = express();
const port = 3000;

const cars = [
  {
    id: 1,
    name: 'Car Model 1',
    image: 'url-to-car-image-1.jpg',
    description: 'Description for car model 1',
    specs: {
      horsepower: 300,
      torque: 400,
      weight: 1500,
      zeroToSixty: 4.5
    }
  },
  {
    id: 2,
    name: 'Car Model 2',
    image: 'url-to-car-image-2.jpg',
    description: 'Description for car model 2',
    specs: {
      horsepower: 350,
      torque: 450,
      weight: 1400,
      zeroToSixty: 4.0
    }
  }
  // Add more car objects as needed
];

// Define a route to get all cars
app.get('/api/cars', (req, res) => {
  res.json(cars);
});

// Define a route to get a car by id
app.get('/api/cars/:id', (req, res) => {
  const car = cars.find(car => car.id === parseInt(req.params.id));
  if (car) {
    res.json(car);
  } else {
    res.status(404).send('Car not found');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
