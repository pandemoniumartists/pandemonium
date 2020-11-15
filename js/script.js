
var lineup = [maddong, breeze, backwoods, arbutus, jenny];
var bench = [];
var rotation = [];
var bullpen = [];

//console.log(maddong);
//

function populateLineup(){
    console.log("hello");
    document.getElementById("lineup").innerHTML = "";
    for(var i = 0; i < lineup.length; i++){
        var player = document.createElement("div");
        player.setAttribute("class", "player col-sm");

        var nameRow = document.createElement("div");
        nameRow.setAttribute("class", "row");

        var lNameCol = document.createElement("div");
        var lName = document.createElement("p");
        lName.setAttribute("class", "bold");
        var lNameText = document.createTextNode("name:");
        lName.appendChild(lNameText);
        lNameCol.appendChild(lName);    
        lNameCol.setAttribute("class", "col-2");
        
        var pNameCol = document.createElement("div");
        pNameCol.setAttribute("class", "col");
        var pName = document.createElement("p");
        var pNameText = document.createTextNode(lineup[i].name);
        pName.appendChild(pNameText);
        pNameCol.appendChild(pName);
        pNameCol.setAttribute("class", "col");

        nameRow.appendChild(lNameCol);
        nameRow.appendChild(pNameCol);

        var lineupHTML = document.getElementById("lineup");
        lineupHTML.appendChild(player);
        player.append(nameRow);




        //        
        //        //appending children to lineup
        //        var lineupHTML = document.getElementById("lineup");
        //        lineupHTML.appendChild(player);
        //        player.appendChild(pName);
        //        player.appendChild(pEmoji);
    }
}