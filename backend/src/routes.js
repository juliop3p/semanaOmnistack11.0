const express = require('express')
const routes = express.Router()

const SessionController = require('./controllers/SessionController')
const OngController = require('./controllers/OngController')
const ProfileController = require('./controllers/ProfileController')
const IncidentController = require('./controllers/IncidentController')

// Session Route
routes.post('/sessions', SessionController.create)

// Ongs Routes
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

// Profile Routes
routes.get('/profile', ProfileController.index)

// Incidents Routes
routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)


module.exports = routes