'use strict';
const {Success, Failure} = require('data.validation');

const isString = (s) => (typeof s === 'string');

const phone = (phoneNumber) => {
  if (!isString(phoneNumber))
    return Failure(['invalid phone number']);

  if (phoneNumber.replace(/\D+/, '').length !== 10)
    return Failure(['invalid phone number']);

  return Success(phoneNumber.replace(/\D+/, ''));
};

module.exports = phone;
