'use strict';

const expect = require('expect.js');
const { Success, Failure } = require('data.validation');

const phone = require('../src/phone');

describe('Phone number validation', () => {

  it('should require the phone number to be a string');

  it('should require the phone to be 9 digits');

  it('should strip non-digit characters from the phone string');
});
