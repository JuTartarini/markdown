function extractLinksFromMd(value) {
  return ((typeof value === 'string') && (value !== '') && (value !== isNaN) && (value.length > 1)) ? extract(value) : false;
}

function extract(value) {
  let links = [];
  class Link {
    constructor(text, href) {
      this.href = href;
      this.text = text;
    }
  }  
  const regex =  /(\[(.*?)\])|(https?|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/gi;
  if (value.match(regex).length < 1) return links;
  value.match(regex).reverse().map((x, idx) => (idx % 2 === 0) ? links.push(new Link(value.match(regex).reverse()[idx + 1], x)) : null);   
  return (JSON.stringify(links, null, 1));
}

module.exports = extractLinksFromMd;