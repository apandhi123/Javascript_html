// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// BONUS: Refactor to use Arrow Functions!


var submit = d3.select("#filter-btn");

submit.on("click", function() {

// Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");


  // Get the value property of the input element
  var inputValue = inputElement.node().value

  console.log(inputValue);

  var filteredData = data.filter(rowes => rowes.datetime === inputValue);

  console.log(filteredData);

  filteredData.forEach((tableData) => {
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
});


