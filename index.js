const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://dbUser:dbUserPassword@test-sam.ppmvi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully')
})

const postsRouter = require('./routes/posts');

app.use('/posts', postsRouter);

app.get('', (req, res) => {
    res.send('Server running!')
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})