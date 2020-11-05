const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const logger = require('morgan');
const articlesRoutes = require('./routes/articles');
const equipmentsRoutes = require('./routes/equipments');
const usersRoutes = require('./routes/users')
const db = require('./db/connection')
const PORT = process.env.PORT || 3000

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))

app.use('/api', articlesRoutes);
app.use('/api', equipmentsRoutes);
app.use('/api', usersRoutes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', (req, res) => res.send("This is root!"))
