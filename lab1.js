
d3.csv('StudentsPerformance.csv').then( data => {
    data.forEach( d => {
        d.math_score = +d.math_score;
        d.reading_score = +d.reading_score;
        // d.writing_score = +d.writing_score;
        
    });

    function getRandomInt(arr, n) {
        return arr.sort(() => 0.5 - Math.random()).slice(0, n);
    }
    const pairs = getRandomInt(data.map(d => [d.math_score, d.reading_score]), 40);
    
   

    pairs.forEach(data => document.getElementById('Random_var').innerHTML = document.getElementById('Random_var').innerHTML +"[" + data+"] ")

    const container = d3.select("svg")
    let margin = {top: 30, right: 30, bottom: 30, left: 30},
        width = 500 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;
    let svg = d3.select("svg")
        .classed('container',true)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    let x = d3.scaleLinear()
        .domain([0, 100])
        .range([ 0, 550 ]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x)
            .tickValues(d3.range(0, 101, 5)));

    let y = d3.scaleLinear()
        .domain([0, 100])
        .range([ height, 0]);
    svg.append("g")
        .call(d3.axisLeft(y)
            .tickValues(d3.range(0, 101, 5)));

    let pairs_small = []
    let pairs_big = []
    let pairs_average = []

    pairs.forEach(data => {
        if(data[0] < 50) {
            pairs_small.push(data);
        } else {
            pairs_big.push(data);
        }
    });

    pairs.forEach(data => {
        if(data[0] >= 90 && data[0] <= 100) {
            pairs_average.push(data);
        }
    });
    pairs_small.forEach(data => { document.getElementById('pairs_small').innerHTML = document.getElementById('pairs_small').innerHTML +"[" + data+"] "})
    pairs_big.forEach(data => { document.getElementById('pairs_big').innerHTML = document.getElementById('pairs_big').innerHTML +"[" + data+"] "})
    pairs_average.forEach(data => { document.getElementById('pairs_average').innerHTML = document.getElementById('pairs_average').innerHTML +"[" + data+"] "})


    svg.append('g')
	.selectAll("dot")
	.data(pairs_small).enter()
	.append("circle")
	.attr("cx", function (d) { return x(d[0]); } )
	.attr("cy", function (d) { return y(d[1]); } )
	.attr("r", 5)
	.style("fill", "red");

    svg.append('g')
	.selectAll("dot")
	.data(pairs_big).enter()
	.append('rect')	
    .attr("x", function (d) { return (x(d[0]) - 2.5); }) 
    .attr("y", function (d) { return (y(d[1]) - 2.5); })
	.attr("width", 10)
    .attr("height", 10)
	.style("fill","green");


    svg.append('g')
    .selectAll("dot")
    .data(pairs_average).enter()
    .append("path")
    .attr("d", d3.symbol().type(d3.symbolTriangle).size(100)) 
    .attr("transform", d => "translate(" + x(d[0]) + "," + y(d[1]) + ")") 
    .style("fill", "blue");


    


});

