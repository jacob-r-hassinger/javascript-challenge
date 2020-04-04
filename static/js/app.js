var ufoData = data;

const tbody = d3.select("tbody");

function buildTable(ufos) {
    //fills in the table repeatedly
    //first time you come to the page
    //the function needs to clear the table to reload new data
    tbody.html("");
    console.log("Something changed")
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
    var enteredDate = document.getElementById("datetime").value;
    var enteredCity = document.getElementById("city").value;
    var enteredState = document.getElementById("state").value;
    var enteredCountry = document.getElementById("country").value;
    var enteredShape = document.getElementById("shape").value;
    var filteredData = ufoData
    
    if (enteredDate != "") {
        filteredData = filteredData.filter( data => data.date === enteredDate)
    };
    if (enteredCity != "") {
        filteredData = filteredData.filter( data => data.city === enteredCity)
    };
    if (enteredState != "") {
        filteredData = filteredData.filter( data => data.state === enteredState)
    };
    if (enteredCountry != "") {
        filteredData = filteredData.filter( data => data.country === enteredCountry)
    };
    if (enteredShape != "") {
        filteredData = filteredData.filter( data => data.shape === enteredShape)
    };

    buildTable(filteredData);
};

d3.selectAll("button").on("click", handleClick);

buildTable(ufoData);

//next a function that listens for a click on the button