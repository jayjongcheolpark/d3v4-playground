const margin = { top: 10, right: 20, bottom: 30, left: 30 }
const width = 400 - margin.left - margin.right
const height = 600 - margin.top - margin.bottom

function responsivefy(svg) {
  // get container + svg aspect ratio
  const container = d3.select(svg.node().parentNode)
  const width = parseInt(svg.style('width'))
  const height = parseInt(svg.style('height'))
  const aspect = width / height

  // get width of container and resize svg to fit it
  function resize() {
    const targetWidth = parseInt(container.style('width'))
    svg.attr('width', targetWidth)
    svg.attr('height', Math.round(targetWidth / aspect))
  }

  // add viewBox and preserveAspectRatio properties,
  // and call resize so that svg resizes on inital page load
  svg.attr('viewBox', `0 0 ${width} ${height}`).attr('preserveAspectRatio', 'xMinYMid').call(resize)

  // to register multiple listeners for same event type,
  // you need to add namespace, i.e., 'click.foo'
  // necessary if you call invoke this function for multiple svgs
  // api docs: https://github.com/mbostock/d3/wiki/Selections#on
  d3.select(window).on(`resize.${container.attr('id')}`, resize)
}

const svg = d3
  .select('.chart')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .call(responsivefy)
  .append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`)

svg.append('rect').attr('width', width).attr('height', height).style('fill', 'lightblue').style('stroke', 'green')

const yScale = d3.scaleLinear().domain([0, 100]).range([height, 0])
const yAxis = d3.axisLeft(yScale)
svg.call(yAxis)

const xScale = d3.scaleTime().domain([new Date(2016, 0, 1, 6), new Date(2016, 0, 1, 9)]).range([0, width])

const xAxis = d3.axisBottom(xScale).ticks(5).tickSize(10).tickPadding(5)
svg.append('g').attr('transform', `translate(0, ${height})`).call(xAxis)
