const { assert } = require('chai');
const extractLinksFromMd = require('../index');
describe('index test', () => {
  describe('valid link from string - only link', () => {
    it("should have 1 link", () => {
        assert.equal(extractLinksFromMd("[example](https://www.example.com)").length, 82)
    });
  });
  describe('valid link from string - with another content', () => {
    it('should have 2 links', () => {
        assert.equal(extractLinksFromMd("[example](https://www.example.com) opsum lorem [text](https://www.link.com)").length, 156);
    });
  });
  describe('string without links', () => {
    it('should return empty', () => {
        assert.equal(extractLinksFromMd("lalalala no link here").length,0);
    });
  });
});
