var ufoData = data;

const tbody = d3.select("tbody");

function buildTable(ufos) {
    //fills in the table repeatedly
    //first time you come to the page
    //the function needs to clear the table to reload new data
    tbody.html("");

    //build rows
    ufos.forEach(dataRow => {
        const row = tbody.append("tr");
        //for each row made...
        Object.values(dataRow).forEach((val) => {
            //add a cell (td)...
            let cell = row.append("td");
            //assign value to the cell
            cell.text(val);
        });
    });
};


function handleClick(){
    var enterdDate = d3.select("#form-control").text("value");
    var filteredData = ufoData.filter( data => data.year = enteredDate);
    buildTable(filteredData);
};

d3.selectAll("filter-btn").on("click", handleClick);

buildTable(ufoData);

//next a function that listens for a click on the button