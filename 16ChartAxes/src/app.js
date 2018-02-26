const margin = { top: 10, right: 20, bottom: 60, left: 40 }
const width = 425 - margin.left - margin.right
const height = 625 - margin.top - margin.bottom

const svg = d3
  .select('.chart')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`)

svg.append('rect').attr('width', width).attr('height', height).style('fill', 'lightblue').style('stroke', 'green')

const yScale = d3.scaleLinear().domain([0, 100]).range([height, 0])
const yAxis = d3.axisLeft(yScale)
svg.call(yAxis)

const xScale = d3.scaleTime().domain([new Date(2016, 0, 1, 6), new Date(2016, 0, 1, 9)]).range([0, width])

const xAxis = d3.axisBottom(xScale).ticks(5).tickSize(10).tickPadding(5)
svg.append('g').attr('transform', `translate(0, ${height})`).call(xAxis)
