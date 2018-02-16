const linearScale = d3.scaleLinear().domain([0, 100]).range([0, 1]).clamp(true)

console.log(linearScale(0))
console.log(linearScale(50))
console.log(linearScale(100))
console.log(linearScale.invert(0.5))
