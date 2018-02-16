const scaleOrdinal = d3.scaleOrdinal().domain(['poor', 'good', 'great']).range(['red', 'white', 'green'])

console.log(scaleOrdinal('good')) // white
console.log(scaleOrdinal('poor')) // red
console.log(scaleOrdinal('great')) // green
