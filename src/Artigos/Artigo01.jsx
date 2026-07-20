const users = [
    { id: '1', firstName: 'Robin', lastName: 'Wieruch' },
    { id: '2', firstName: 'Dennis', lastName: 'Wieruch' },
];

const Artigo01 = () => {
    return (
        <div>
            <h1>Hello Conditional Rendering</h1>
            <List list={users} />
        </div>
    );
}

const List = ({ list }) => {
    if (!list) {
        return null;
    }

    return (
        <ul>
            {list.map(item => (
                <Item key={item.id} item={item} />
            ))}
        </ul>
    );
}

function Item({ item }) {
    return (
        <li>
            {item.firstName} {item.lastName}
        </li>
    );
}

export default Artigo01