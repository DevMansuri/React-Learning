function ListGroup() {

    const items = ["indore","dewas","bhopal","ujjain"];
    
    return (
        <>
        <h1>List</h1>
        <ul className="list-group">
            {items.map((item) => (
            <li className="list-group-item" onClick={()=> {console.log(item)}}>
                {item}

            </li>
            ))}
        </ul>
        </>
        
    );
}

export default ListGroup