function extractLinksFromMd(value)
 {
	let links = [];
	class Link {
			constructor(text,href) {
				this.href = href;
				this.text = text;
				
			};
		};  
    const regex = /(\[(.?)\])|(https?|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-][\w@?^=%&/~+#-])?/gi;
		value.match(regex).reverse().map((x,idx) => (idx%2 === 0) ? links.push(new Link(value.match(regex).reverse()[idx+1], x)) : null );
		return (JSON.stringify(links, null, 1).replace(/":{/g, `${'}'}: \{`));
}

modules.exports = extractLinksFromMd;