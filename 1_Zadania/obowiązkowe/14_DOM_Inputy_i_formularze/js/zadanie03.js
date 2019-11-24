document.addEventListener("DOMContentLoaded", (event) => {
  var button = document.querySelector("button");

  button.addEventListener("click", event => {
    var table = document.querySelector(".table.table-bordered").firstElementChild;
    var team1 = document.getElementById("team1").value;
    var team2 = document.getElementById("team2").value;

    if (team1 == team2) return;

    var points1 = document.getElementById("points1").value;
    var points2 = document.getElementById("points2").value;

    if (points1 < 0 || points2 < 0) return;

    var newRow = document.createElement("tr");

    var team1Cell = document.createElement("td");
    team1Cell.innerHTML = team1;

    var team2Cell = document.createElement("td");
    team2Cell.innerHTML = team2;

    var pointsCell = document.createElement("td");
    pointsCell.innerHTML = points1 + " - " + points2;

    newRow.appendChild(team1Cell);
    newRow.appendChild(team2Cell);
    newRow.appendChild(pointsCell);
    table.appendChild(newRow);
  });

});
