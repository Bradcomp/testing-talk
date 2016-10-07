'use strict';
const {Success, Failure} = require('data.validation');

const phone = (phoneNumber) => {
  if (phoneNumber.replace(/\D+/, '').length !== 9) return Failure(['invalid phone number']);

  return Success(phoneNumber.replace(/\D+/, ''));
};

module.exports = phone;
