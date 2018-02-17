const div = d3.select('div')
console.log(div.nodes())

const divLinks = div.selectAll('a')
console.log(divLinks.nodes())

const secondLink = d3.selectAll('a:nth-child(2)')
console.log(secondLink.nodes())

const allLinks = d3.selectAll(document.links)
console.log(allLinks.size())
