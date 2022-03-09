let colorSelected; 

//Adds a row
function addR() {
    //alert("Clicked Add Row")
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
  
    let row = document.createElement("tr");
    let col = document.createElement("td");
    col.onclick = function (){
        this.style.backgroundColor = colorSelected;
        };
    
    let first_row = document.querySelector("tr"); //get the first tr element
    
    if(rows.length >= 1)
    {
        let all_tds = first_row.getElementsByTagName('td'); //get an array of all the columns in the first row
        let allcols_length = all_tds.length; //get the length of the array of columns
       
        for(i = 0; i < allcols_length;i++)
        {
            row.appendChild(col);
            col = document.createElement("td");
            col.onclick = function (){
            this.style.backgroundColor = colorSelected;
            };
        }
        grid.appendChild(row);
    } 
    if (rows.length === 0)
    {
        row.appendChild(col);
        grid.appendChild(row);
    } 
}
//Adds a column
function addC() {  
    //alert("Clicked Add Col")
    let allrows = document.getElementsByTagName("tr");

    for(let i = 0; i < allrows.length; i++)
    {
        column = document.createElement('td')
        column.onclick = function (){
            this.style.backgroundColor = colorSelected;
        };
        allrows[i].appendChild(column);
    }
   
}
//Removes a row
function removeR() {
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}