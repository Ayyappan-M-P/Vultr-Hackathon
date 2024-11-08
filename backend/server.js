const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/student', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define schema and model
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  department: String,
});

const Student = mongoose.model('Student', studentSchema);

// API to handle student creation
app.post('/api/students', async (req, res) => {
  const { name, age, department } = req.body;
  try {
    const student = new Student({ name, age, department });
    await student.save();
    res.status(201).send(student);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
