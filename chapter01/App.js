// const heading = document.createElement("h1");
// heading.innerHTML = "Its First Class Say Hello World";

// const root = document.getElementById("root");
// root.appendChild(heading);
// React.createElement("h1",{props object (attributes)},"Inner Html Stuff/Children Elements"); returns a js object 
const heading = React.createElement("h1",{
    id:"heading",
    key:"01", // asking in console that "Warning: Each child in a list should have a unique "key" prop" But why ?
    // The "key" prop serves as a unique identifier for each element in a list and helps React efficiently update and manage the rendered components. When React renders a list, it uses the "key" prop to keep track of individual items and optimize the rendering process.
    developer:"cheeku"
},"Hello From App js");

const heading2 = React.createElement("h2",{
    id:"heading2",
    key:"02",
    developer:"cheeku"
},"Hey Am Cheeku");

const container = React.createElement("div",{
    id:"container",
    key:"03",
    developer:"cheeku"
},[heading,heading2]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
