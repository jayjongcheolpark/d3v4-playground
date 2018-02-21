const numbers = [15, 8, 42, 4, 32]
function update() {
  const selection = d3
    .select('#chart')
    .selectAll('.bar')
    .data(numbers)
    .style('height', d => `${d}px`)
    .style('margin-top', d => `${100 - d}px`)
    .on('click', (e, i) => {
      numbers.splice(i, 1)
      update()
    })

  selection
    .enter()
    .append('div')
    .attr('class', 'bar')
    .style('height', d => `${d}px`)
    .style('margin-top', d => `${100 - d}px`)
    .on('click', (e, i) => {
      numbers.splice(i, 1)
      update()
    })
  selection.exit().remove()
}
update()
