var express = require('express');
var router = express.Router();

Customer = require('../models/customer.js');
Invoice = require('../models/invoice.js');

// Get all customers
router.get('/', function(req, res) {
  Customer.getCustomers(function(err, customers) {
    if (err) {
      res.send(err);
    }
    res.json(customers);
  });
});

// Get single customer
router.get('/:id', function(req, res) {
  Customer.getCustomerById(req.params.id, function(err, customer) {
    if (err) res.send(err);
    res.json(customer);
  });
});

// Add customer
router.post('/', function(req, res) {
  var customer = req.body;
  Customer.addCustomer(customer, function(err, customer) {
    if (err) res.send(err);
    res.json(customer);
  });
});

// Update customer
router.put('/:id', function(req, res) {
  var id = req.params.id;
  var customer = req.body;
  Customer.updateCustomer(id, customer, {}, function(err, callback) {
    if (err) res.send(err);
    res.json(customer);
  });
});

// Remove customer
router.delete('/:id', function(req, res) {
  var id = req.params.id;
  Customer.removeCustomer(id, function(err, customer) {
    if (err) res.send(err);
    res.json(customer)
  })
})

// Get all invoices for a single customer
router.get('/:customer_id/invoices', function(req, res) {
  var customer_id = req.params.customer_id;
  Invoice.getCustomerInvoices(customer_id, function(err, invoice) {
    if (err) res.send(err);
    res.json(invoice);
  })
})

module.exports = router;
