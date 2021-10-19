//luodan CRUD-toiminnot

const db = require('../models');
const Customer = db.customers;
const Op = db.Sequelize.Op;

// Create and Save a new Customer
exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }
  const customer = {
    customerid: req.body.customerid,
    name: req.body.name,
    occupation: req.body.occupation,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    //isActiveCustomer: req.body.isActiveCustomer
    //  ? req.body.isActiveCustomer
    //  : false,
  };
  Customer.create(customer)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occured while creating the Customer.',
      });
    });
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Tutorial.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving tutorials.',
      });
    });
};

// Find a single Customer with an id
exports.findOne = (req, res) => {
  const customerid = req.params.customerid;

  Customer.findByPk(customerid)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${customerid}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Customer with id=' + customerid,
      });
    });
};

// Update a Customer by the customerid in the request
exports.update = (req, res) => {
  const customerid = req.params.customerid;

  Customer.update(req.body, {
    where: { customerid: customerid },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Customer was updated successfully.',
        });
      } else {
        res.send({
          message: `Cannot update Customer with customerid=${customerid}. Maybe Customer was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error updating Customer with customerid=${customerid}`,
      });
    });
};

// Delete a Customer with the specified customerid in the request
exports.delete = (req, res) => {
  const customerid = req.params.customerid;

  Tutorial.destroy({
    where: { customerid: customerid },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Customer was deleted successfully!',
        });
      } else {
        res.send({
          message: `Cannot delete Customer with customerid=${customerid}. Maybe Customer was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Could not delete Customer with customerid=${customerid}`,
      });
    });
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
  Customer.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Customers were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all customers.',
      });
    });
};

// Find all active Customers
exports.findAllActiveCustomers = (req, res) => {
  Customer.findAll({ where: { isActiveCustomer: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving customers.',
      });
    });
};
