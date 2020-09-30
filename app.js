//these are comments
const vizContainer = document.getElementById("vizContainer");
const url =
  "https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard?:language=en-GB&:display_count=y&:origin=viz_share_link";

const options = {
  device: "desktop",
  height: 800,
  width: 1000,
};

let viz;
const hideViz = document.getElementById("hideViz");
const showViz = document.getElementById("showViz");
const Central = document.getElementById("Central");
const North = document.getElementById("North");
const South = document.getElementById("South");
const revertBtn = document.getElementById("revertBtn");

function initViz() {
  viz = new tableau.Viz(vizContainer, url, options);
}

document.addEventListener("DOMContentLoaded", initViz);
function hidetableau() {
  console.log("gidingviz");
  viz.hide();
}

//when to execute hide function

hideViz.addEventListener("click", hidetableau);

function showtableau() {
  console.log("showing viz");
  viz.show();
}

showViz.addEventListener("click", showtableau);

//function for filtering to Region
function filterRegion(value) {
  const sheettofilter = viz
    .getWorkbook()
    .getActiveSheet()
    .getWorksheets()
    .get("Sales Map");
  console.log(sheettofilter);

  sheettofilter.applyFilterAsync(
    "Region",
    value,
    tableau.FilterUpdateType.REPLACE
  );
}

//looping through filters and obtain the Value

document.querySelectorAll(".filter").forEach((button) => {
  console.log(button);
  button.addEventListener("click", (e) => filterRegion(e.target.value));
});

//revert function

function revertTableau() {
  console.log("reverting viz");
  viz.revertAllAsync();
}

//link to the revertBtn
revertBtn.addEventListener("click", revertTableau);
