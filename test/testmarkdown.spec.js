/* eslint-disable no-undef */
const extractLinksFromMd = require('../index');
const chai = require('chai');
const expect = chai.expect;
describe('index test', () => {
  describe('valid link from string - only link', () => {
    it('should have 1 link', () => {
      expect(extractLinksFromMd(`[example](www.example.com)`)).to.have.lengthOf(1);
    });
  });
  describe('valid link from string - with another content', () => {
    it('should have 2 links', () => {
      expect(extractLinksFromMd(`[example](www.example.com) oieeee turu pom? [text](www.link.com)`)).to.have.lengthOf(2);
    });
  });
  describe('string without links', () => {
    it('should return empty', () => {
      expect(extractLinksFromMd(`lalalala no link here`)).to.be.empty;
    });
  });
  describe('empty string', () => {
    it('should return empty', () => {
      expect(extractLinksFromMd(``)).to.be.empty;
    });
  });
  describe('string with invalid link', () => {
    it('should return empty', () => {
      expect(extractLinksFromMd(`invalid link here [example.com](invalid)`)).to.not.have.all.keys('text', 'href');
    });
  });
});