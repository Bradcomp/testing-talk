'use strict';

const expect = require('expect.js');
const { Success, Failure } = require('data.validation');

const phone = require('../src/phone');

describe('Phone number validation', () => {
  const failure = Failure(['invalid phone number']);

  it('should require the phone number to be a string', () => {
    expect(phone(undefined)).to.eql(failure);
    expect(phone(123456789)).to.eql(failure);
  });

  it('should require the phone number to be 10 digits', () => {
    expect(phone('32345')).to.eql(failure);
    expect(phone('423456789')).to.eql(failure);
    expect(phone('52345678901')).to.eql(failure);
    expect(phone('9165554444')).to.eql(Success('9165554444'));
  });

  it('should strip non-digit characters from the phone string');
});
