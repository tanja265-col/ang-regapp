//validointeja

module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define('customer', {
    customerid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      //primaryKey: true,
      //autoIncrement: true,
      //validate: {
      //  len: [1, 5],
      //},
    },
    name: {
      type: Sequelize.STRING,
    },
    occupation: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true, //emailin muodon validointi
      },
    },
    phone: {
      type: Sequelize.INTEGER,
    },
    address: {
      type: Sequelize.STRING,
    },
    //IsActiveCustomer: {
    // type: Sequelize.BOOLEAN,
    //},
  });

  return Customer;
};
