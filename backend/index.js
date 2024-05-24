const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


// Create an instance of Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoURI = process.env.MONGO_URI;
mongoose.connect('mongodb+srv://murtazarizwan4505:*10*murtaza@cluster1.tkzcole.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, MERN Stack!');
});

// Start the server
const PORT =5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
