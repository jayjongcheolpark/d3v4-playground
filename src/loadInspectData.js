d3.json('data/data.json', data => {
  const min = d3.min(data, d => d.age)
  console.log(min)
  const max = d3.max(data, d => d.age)
  console.log(max)

  const extent = d3.extent(data, d => d.age)
  console.log(extent)

  const scale = d3.scaleLinear().domain(extent).range([0, 600])
  console.log(scale(37))

  const ages = d3.set(data, d => d.age)
  console.log(ages.values())
})
