import ListGroup from "./components/ListGroups";

function App() {
  const items = ["indore","dewas","bhopal","ujjain"];
  const handleSelectItem = (item:string) => {
    console.log(item);
  }
  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}></ListGroup>
    </div>
  );
}

export default App