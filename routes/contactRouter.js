const express = require('express');
const bodyParser = require('body-parser');

const contactRouter = express.Router();

contactRouter.use(bodyParser.json());


contactRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Received your contact info');
})
.post((req, res) => {
    res.end(`Will add to you: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /contact');
})
.delete((req, res) => {
    res.end('Deleting all contacts');
});  

contactRouter.route('/:contactId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the contacts: ${req.params.contactId} to you`);
})

.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /contact/${req.params.contactId}`);
})

.put((req, res) => {
    res.write(`Updating the contact: ${req.params.contactId}\n`);
    res.end(`Will update you: ${req.body.name}
        with description: ${req.body.description} based on your contact info`);
})

.delete((req, res) => {
    res.end(`Deleting contacts: ${req.params.contactId}`);
});


module.exports = contactRouter;