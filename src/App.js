import "./App.css";
import HelloWorld from "./HelloWorld";
import Counter from "./Counter";
import FilteredList from "./FilteredList";
<link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
    integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
    crossorigin="anonymous"
></link>;

const produce = [
    { name: "Apple", type: "Fruit" },
    { name: "Pineapple", type: "Fruit" },
    { name: "Banana", type: "Fruit" },
    { name: "Pear", type: "Fruit" },
    { name: "Strawberry", type: "Fruit" },
    { name: "Orange", type: "Fruit" },
    { name: "Lettuce", type: "Vegetable" },
    { name: "Cucumber", type: "Vegetable" },
    { name: "Eggplant", type: "Vegetable" },
    { name: "Squash", type: "Vegetable" },
    { name: "Bell pepper", type: "Vegetable" },
    { name: "Onion", type: "Vegetable" },
];

function App() {
    return (
        <div className="App">
            <FilteredList items={produce} />
        </div>
    );
}

export default App;
