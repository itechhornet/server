const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

  const UserModel = require("../../models/user.model.js");

  const passwordHash = bcrypt.hashSync(req.body.password);
  const secret = require.main.require('./config/secret');


  const userDetail = {
    contact_name: req.body.contact_name,
    email_address: req.body.email,
    username: req.body.username ,
    password: passwordHash,
    date_created : new Date()
  };



  UserModel.create(userDetail, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    }
    else{

      const token = jwt.sign({
        user: data,
      }, secret, {
        expiresIn: '3h',
      });

      res.send({
        success: true,
        access_token: token,
        user: {
          _id: data.id,
          username: data.username,
          email: data.email_address,
        },
      });
    }
  });
};
