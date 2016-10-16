'use strict';
const {Success, Failure} = require('data.validation');

const isString = (s) => (typeof s === 'string');

const phone = (phoneNumber) => {

  if (!isString(phoneNumber))
    return Failure(['invalid phone number']);

  const strippedPhone = phoneNumber.replace(/\D+/g, '');

  if (strippedPhone.length !== 10)
    return Failure(['invalid phone number']);

  return Success(strippedPhone);
};

module.exports = phone;
