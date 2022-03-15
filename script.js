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
    let grid = document.getElementById("grid");
    let col = document.createElement("td");

    for(let i = 0; i < allrows.length; i++)
    {
        column = document.createElement('td')
        column.onclick = function (){
            this.style.backgroundColor = colorSelected;
        };
        allrows[i].appendChild(column);
    }
    if(allrows.length === 0){
        let row = document.createElement("tr");
        row.appendChild(col);
        grid.appendChild(row);
    }
   
}
//Removes a row
function removeR()
{
    let grid = document.getElementById("grid");
    let row = document.getElementsByTagName("tr");
    if(grid.hasChildNodes() && row.length > 0)
    {
        grid.removeChild(grid.lastChild);
    }
    else{
        alert("No rows to remove");
    }
}

//Remove a column
function removeC()
{
    let allrows = document.getElementsByTagName("tr");
    if(allrows > 0)
    {
        for(let i = 0; i < allrows.length; i++)
        {
            allrows[i].removeChild(allrows[i].lastChild)
        }
    }
    else{
       alert("No columns to remove");
    }

}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    let allrows = document.getElementsByTagName("tr");
    
        for(let i = 0; i < allrows.length; i++){
            for(let j = 0; j < allrows[i].children.length; j++)
            {
                allrows[i].children[j].style.backgroundColor = colorSelected;
            }
        } 
}

function clearAll(){
    let allrows = document.getElementsByTagName("tr");
    for(let i = 0; i < allrows.length; i++)
    {
        let allrows = document.getElementsByTagName("tr");

    for(let i = 0; i < allrows.length; i++)
    {
     	for(let j = 0; j < allrows[i].children.length; j++)
	    {
	        allrows[i].children[j].style.backgroundColor = "";
	    }
    }
    }
}

function fillU(){
    let table = document.getElementById("grid"); 
    //loop through the grid
    for(let i = 0, row; row = table.rows[i]; i++){
        for(let j = 0, col; col = row.cells[j]; j++){
            let col= row.cells[j];
            //if there is no background color, then set cell color to colorSelected
             if(col.style.backgroundColor == ''){
                col.style.backgroundColor = colorSelected;
           }
        }
    }
}
   