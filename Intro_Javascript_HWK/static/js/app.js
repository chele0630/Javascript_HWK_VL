// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

//console.log(data);
var initialTable = (data) => {
data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
}

initialTable (tableData);


// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

 
  var filteredData = tableData.filter(ufoReport => ufoReport.datetime === inputValue);

  console.log(filteredData);

  tbody.selectAll("td").remove ();

  filteredData.forEach((ufoReport) => {
      var row = tbody.append("tr");
      Object.entries(ufoReport).forEach(([key,value]) => {
          var cell = tbody.append("td");
          cell.text(value);
      });
  })
 
});

