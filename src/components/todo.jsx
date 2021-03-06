import List from "./List"



const Todo = ({ todo, onDelete, onToggle, }) => {
    return (
        <>
            {todo.map(list => (
                <List
                    key={list.id}
                    onDelete={onDelete}
                    list={list}
                    onToggle={onToggle}

                />
            ))}
        </>
    )

}


export default Todo;