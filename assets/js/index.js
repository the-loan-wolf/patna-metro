const redLine = [
  "danapur cantonment",
  "saguna mor",
  "rps mor",
  "patlipura",
  "rukanpura",
  "raja bazar",
  "patna zoo",
  "vikas bhawan",
  "vidyut bhawan",
  "patna junction",
  "cnlu",
  "mithapur",
  "ramakrishna nagar",
  "jaganpura",
  "khemni chak",
];
const blueLine = [
  "patna junction",
  "akashvani",
  "gandhi maidan",
  "pmch",
  "university",
  "moin-ul-haq-stadium",
  "rajendranagar",
  "malahi pakri",
  "khemni chak",
  "bhoothnath",
  "zero mile",
  "new isbt",
];
const redBlue = ["patna junction", "khemni chak"];
let foundPath = [];
let currentNextStation = "";
// const graph = {
//   "Danapur Cantonment": { "Saguna Mor": 1.5 },
//   "Saguna Mor": { "Danapur Cantonment": 1.5, "RPS Mor": 1.1 },
//   "RPS Mor": { "Saguna Mor": 1.1, Patlipura: 1.5 },
//   Patlipura: { "RPS Mor": 1.5, Rukanpura: 0.8 },
//   Rukanpura: { Patlipura: 0.8, "Raja Bazar": 1.6 },
//   "Raja Bazar": { Rukanpura: 1.6, "Patna Zoo": 1.7 },
//   "Patna Zoo": { "Raja Bazar": 1.7, "Vikas Bhawan": 1.7 },
//   "Vikas Bhawan": { "Patna Zoo": 1.7, "Vidyut Bhawan": 1.9 },
//   "Vidyut Bhawan": { "Vikas Bhawan": 1.9, "Patna Junction": 1.5 },
//   "Patna Junction": { "Vidyut Bhawan": 1.5, CNLU: 1.7, Akashvani: 0.9 },
//   CNLU: { "Patna Junction": 1.7, Mithapur: 1 },
//   Mithapur: { CNLU: 1, "Ramakrishna Nagar": 1 },
//   "Ramakrishna Nagar": { Mithapur: 1, Jaganpura: 0.9 },
//   Jaganpura: { "Ramakrishna Nagar": 0.9, "Khemni Chak": 1.9 },
//   "Khemni Chak": { Jaganpura: 1.9, Bhoothnath: 2.8, "Malahi Pakri": 1.2 },
//   Bhoothnath: { "Khemni Chak": 2.8, "Zero Mile": 1.4 },
//   "Zero Mile": { Bhoothnath: 1.4, "NEW ISBT": 1.5 },
//   Akashvani: { "Patna Junction": 0.9, "Gandhi Maidan": 1.4 },
//   "Gandhi Maidan": { Akashvani: 1.4, PMCH: 1.1 },
//   PMCH: { "Gandhi Maidan": 1.1, University: 1.2 },
//   University: { PMCH: 1.2, "Moin-ul-haq-stadium": 2 },
//   "Moin-ul-haq-stadium": { University: 2, Rajendranagar: 1.2 },
//   Rajendranagar: { "Moin-ul-haq-stadium": 1.2, "Malahi Pakri": 1.3 },
//   "Malahi Pakri": { Rajendranagar: 1.3, "Khemni Chak": 1.2 },
//   "NEW ISBT": { "Zero Mile": 1.5 },
// };

const graph = {
  "Danapur Cantonment": { "Saguna Mor": 1.5 },
  "Saguna Mor": { "Danapur Cantonment": 1.5, "RPS Mor": 1.1 },
  "RPS Mor": { "Saguna Mor": 1.1, Patlipura: 1.5 },
  Patlipura: { "RPS Mor": 1.5, Rukanpura: 0.8 },
  Rukanpura: { Patlipura: 0.8, "Raja Bazar": 1.6 },
  "Raja Bazar": { Rukanpura: 1.6, "Patna Zoo": 1.7 },
  "Patna Zoo": { "Raja Bazar": 1.7, "Vikas Bhawan": 1.7 },
  "Vikas Bhawan": { "Patna Zoo": 1.7, "Vidyut Bhawan": 1.9 },
  "Vidyut Bhawan": { "Vikas Bhawan": 1.9, "Patna Junction": 1.5 },
  "Patna Junction": { "Vidyut Bhawan": 1.5, CNLU: 1.7, Akashvani: 0.9 },
  CNLU: { "Patna Junction": 1.7, Mithapur: 1 },
  Mithapur: { CNLU: 1, "Ramakrishna Nagar": 1 },
  "Ramakrishna Nagar": { Mithapur: 1, Jaganpura: 0.9 },
  Jaganpura: { "Ramakrishna Nagar": 0.9, "Khemni Chak": 11.9 },
  "Khemni Chak": { Jaganpura: 11.9, Bhoothnath: 12.8, "Malahi Pakri": 11.2 },
  Bhoothnath: { "Khemni Chak": 12.8, "Zero Mile": 1.4 },
  "Zero Mile": { Bhoothnath: 1.4, "NEW ISBT": 1.5 },
  Akashvani: { "Patna Junction": 0.9, "Gandhi Maidan": 1.4 },
  "Gandhi Maidan": { Akashvani: 1.4, PMCH: 1.1 },
  PMCH: { "Gandhi Maidan": 1.1, University: 1.2 },
  University: { PMCH: 1.2, "Moin-ul-haq-stadium": 2 },
  "Moin-ul-haq-stadium": { University: 2, Rajendranagar: 1.2 },
  Rajendranagar: { "Moin-ul-haq-stadium": 1.2, "Malahi Pakri": 1.3 },
  "Malahi Pakri": { Rajendranagar: 1.3, "Khemni Chak": 11.2 },
  "NEW ISBT": { "Zero Mile": 1.5 },
};
function swapValues() {
  var dropdown1 = document.getElementById("fromStation");
  var dropdown2 = document.getElementById("toStation");
  // Get the selected values
  var tempValue = dropdown1.value;
  dropdown1.value = dropdown2.value;
  dropdown2.value = tempValue;

  window.onload = function() {
    // var dropdown = document.getElementById("fromStation");
    // dropdown.value = from; // Set this to the value you want to select
    // var dropdown = document.getElementById("toStation");
    // dropdown.value = to; // Set this to the value you want to select
  };
}

function insertDiv() {
  // Check if the variable value matches the condition
  if (myVariable === "showDiv") {
    // Create a new div element
    var newDiv = document.createElement("div");
    newDiv.className = "info-div";
    newDiv.textContent =
      "This is the inserted div because the variable value matched.";

    // Insert the new div into the DOM
    var contentDiv = document.getElementById("content");
    contentDiv.appendChild(newDiv);
  }
}

const routeColors = {
  redBlue: redBlue,
  red: redLine,
  blue: blueLine,
};

// Function to find the color of a station
function findColor(station) {
  for (let color in routeColors) {
    if (routeColors[color].includes(station.toLowerCase())) {
      return color;
    }
  }
  return null;
}

document.addEventListener("DOMContentLoaded", function() {
  const allStation = [...new Set(redLine.concat(blueLine))].sort();
  allStation.forEach((value) => {
    const option = document.createElement("option");
    option.text = camelCase(value);
    option.value = value.toLowerCase();
    document.getElementById("fromStation").appendChild(option);
  });

  allStation.forEach((value) => {
    const option = document.createElement("option");
    option.text = camelCase(value);
    option.value = value.toLowerCase();
    document.getElementById("toStation").appendChild(option);
  });

  const form = document.getElementById("findRoutes");
  form.addEventListener("submit", getRoutes);

  const queryString = window.location.search;
  const searchParams = new URLSearchParams(queryString);
  const from = searchParams.get("from");
  const to = searchParams.get("to");

  if (from && to) {
    document.getElementById("fromStation").value = from.toLowerCase();
    document.getElementById("toStation").value = to.toLowerCase();
    getRoutes();
  }
  //////////////////////////////////////////////////////////////////////////////////////////
});
function createAlertDiv() {
  if (document.getElementById("alertDiv")) {
    // setTimeout(() => {
    //   alertDiv.style.opacity = "0";
    // }, 1000);
  } else {
    // Create a new div element
    var newDiv = document.createElement("div");
    // Set the id attribute
    newDiv.id = "alertDiv";
    // Add some content
    newDiv.textContent = "Choose the correct route.";
    // Append the new div to the body
    newDiv.className = "alert alertDiv ";

    document.body.insertBefore(newDiv, document.body.firstChild);
    // }

    setTimeout(() => {
      alertDiv.style.opacity = "0";
    }, 1000);

    setTimeout(() => {
      alertDiv.remove();
    }, 1000);
  }
}

function getRoutes(e) {
  if (e) {
    e.preventDefault();
  }
  let startStation = camelCase(document.getElementById("fromStation").value);
  let endStation = document.getElementById("toStation").value; // camelCase(document.getElementById('toStation').value)
  const path = dijkstra(graph, startStation, endStation);
  console.log(path)

  const result = renderList(path, startStation);
  const tableFastestColumn = document.getElementById("fastest-route");
  tableFastestColumn.replaceChildren();
  result.classList.add("list-group");
  result.classList.add("vertical-steps");
  // console.log(result)
  tableFastestColumn.appendChild(result);

  document.getElementById("info").innerHTML =
    `😊 Route found from ${startStation} to ${endStation}`;
  const validEndStations = ["khemni chak", "bhoothnath", "zero mile", "new isbt"];
  if (startStation === "Akashvani" && validEndStations.includes(endStation)) {
    switch (endStation) {
      case "khemni chak":
        // console.log("Khemni Chak");
        convenientRouteRender(blueLine.slice(1, 9))
        break;
      case "bhoothnath":
        // console.log("Bhoothnath");
        convenientRouteRender(blueLine.slice(1, 10))
        break;
      case "zero mile":
        // console.log("Zero Mile");
        convenientRouteRender(blueLine.slice(1, 11))
        break;
      case "new isbt":
        // console.log("NEW ISBT");
        convenientRouteRender(blueLine.slice(1, 12))

    }
  }
}

function convenientRouteRender(path){
  const result = renderList(path, "Akashvani");
  console.log(result);
  const tableConvenientColumn = document.getElementById("convenient-route");
  tableConvenientColumn.replaceChildren();
  result.classList.add("list-group");
  result.classList.add("vertical-steps");
  // console.log(result)
  tableConvenientColumn.appendChild(result);


}

function renderList(path, startStation) {
  if (path) {
    foundPath = path;
    const ul = document.createElement("ul");
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild); // clear ul for new li s
    }
    const li = document.createElement("li");
    li.textContent = startStation;
    li.setAttribute(
      "class",
      `list-group-item completed ${findColor(startStation)}`,
    );
    ul.appendChild(li);

    for (let i = 0; i < path.length - 1; i++) {
      const currentStation = camelCase(path[i]);
      const nextStation = camelCase(path[i + 1]);
      currentNextStation = nextStation;
      var detected = findColor(nextStation);

      const li = document.createElement("li");
      li.textContent = nextStation;
      li.setAttribute("class", `list-group-item completed  ${detected} `);
      if (currentStation.toLowerCase() == "khemni chak") {
        ul.lastElementChild.style.borderColor = detected;
      }
      if (currentStation.toLowerCase() == "patna junction") {
        ul.lastElementChild.style.borderColor = detected;
      }
      ul.appendChild(li);
    }
    return ul;

  } else {
    createAlertDiv();
  }
}

function camelCase(str) {
  if (
    str.toLowerCase() == "pmch" ||
    str.toLowerCase() == "cnlu" ||
    //   str.toLowerCase() == "moin-ul-haq-stadium" ||
    str.toLowerCase() == "new isbt"
  ) {
    return str.toUpperCase();
  } else {
    str = str.toLowerCase(); //making first letter capital and then small
    if (str.indexOf(" ") > -1) {
      var camel = str
        .split(" ")
        .reduce(
          (s, c) =>
            s.charAt(0).toUpperCase() +
            s.slice(1) +
            " " +
            (c.charAt(0).toUpperCase() + c.slice(1)),
        );
      return camel;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

function dijkstra(graph, start, end) {
  start = camelCase(start);
  end = camelCase(end);
  // end = end.toLowerCase();
  // end = end.split(" ").reduce((s, c) => (s.charAt(0).toUpperCase() + s.slice(1)) + ' ' + (c.charAt(0).toUpperCase() + c.slice(1)));

  const nodes = Object.keys(graph);
  // const visited = {};
  const distances = {};
  const path = {};
  let minNode;

  // Initialize distances and path
  nodes.forEach((node) => {
    distances[node] = Infinity;
    path[node] = null;
  });

  distances[start] = 0;

  while (nodes.length !== 0) {
    minNode = nodes.reduce(
      (min, node) => (distances[node] < distances[min] ? node : min),
      nodes[0],
    );
    nodes.splice(nodes.indexOf(minNode), 1);

    if (minNode.toLowerCase() === end.toLowerCase()) {
      let pathNodes = [];
      while (path[minNode]) {
        pathNodes.push(minNode);
        minNode = path[minNode];
      }
      pathNodes.push(start);
      return pathNodes.reverse();
    }

    if (distances[minNode] === Infinity) break;

    for (let neighbor in graph[minNode]) {
      let newDist = distances[minNode] + graph[minNode][neighbor];
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        // console.log(newDist)
        path[neighbor] = minNode;
        // console.log(minNode)
      }
    }
  }

  return null;
}
