const sql = require("../db/db.connect.js");
//constructor
const User = function(customer) {
  this.email = customer.email;
  this.password = customer.name;
};

User.findOne = (email, result) => {
  sql.query('SELECT * FROM user WHERE email ="'+email.email+'"', (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found customer: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

module.exports = User;