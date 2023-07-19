const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {
  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function () {})).to.equal('Error');
    expect(formatFullname(false)).to.equal('Error');
  });
  it('should return an error if arg format is not "<firstName> <lastName>"', () => {
    expect(formatFullname('Lorem Ipsum Dorem')).to.equal('Error');
    expect(formatFullname('John')).to.equal('Error');
    expect(formatFullname('a b')).to.equal('Error');
    expect(formatFullname('12 45')).to.equal('Error');
    expect(formatFullname('')).to.equal('Error');
    expect(formatFullname('John -----')).to.equal('Error');
    expect(formatFullname("J&o'hn Doe")).to.equal('Error');
    expect(formatFullname("John 'acc")).to.equal('Error');
  });
});
