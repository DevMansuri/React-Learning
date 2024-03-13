import ListGroup from "./components/ListGroups";

function App() {
  const items = ["indore","dewas","bhopal","ujjain"];
  return (
    <div>
      <ListGroup items={items} heading="Cities"></ListGroup>
    </div>
  );
}

export default App