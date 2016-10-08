'use strict';

const expect = require('expect.js');
const { Success, Failure } = require('data.validation');

const phone = require('../src/phone');

describe('Phone number validation', () => {

  it('should require the phone number to be a string', () => {
    const failure = Failure(['invalid phone number']);

    expect(phone(undefined)).to.eql(failure);
    expect(phone(123456789)).to.eql(failure);
  });

  it('should require the phone number to be 10 digits');

  it('should strip non-digit characters from the phone string');
});
