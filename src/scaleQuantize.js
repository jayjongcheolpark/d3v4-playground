const quantizeScale = d3.scaleQuantize().domain([0, 100]).range(['red', 'green', 'yellow', 'purple'])

console.log(quantizeScale(22)) // red
console.log(quantizeScale(50)) // yellow
console.log(quantizeScale(88)) // purple
console.log(quantizeScale(99)) // purple

console.log(quantizeScale.invertExtent('yellow')) // [50, 75]
