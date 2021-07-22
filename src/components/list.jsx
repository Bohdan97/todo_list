import { FaTimes } from 'react-icons/fa'


const List = ({ list, onDelete, onToggle }) => {
  return (
    <div className="list"  >
      <ul onClick={() => onToggle(list.id)} className={list.isActive ? "line" : "none"}>
        <li>
          <h2>{list.value}</h2>
          <p>{list.description}</p>
        </li>
      </ul>

      <FaTimes style={{ cursor: 'pointer', color: 'grey' }} onClick={() => onDelete(list.id)} />
    </div>
  )
}





export default List;