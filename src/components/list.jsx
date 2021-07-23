import { FaTimes, FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom';


const List = ({ list, onDelete, onToggle, }) => {

  return (

    <div className="list"  >
      <ul className={list.isActive ? "line" : "none"}>
        <Link to={`/${list.value}`}  >
          <li>
            <h2>{list.value}</h2>
            <p>{list.description}</p>
          </li>
        </Link>
      </ul>
      <FaCheck
        onClick={() => onToggle(list.id)}
        style={list.isActive ? { color: 'grey', cursor: 'pointer' } : { color: 'green', cursor: 'pointer' }}
      />
      <FaTimes
        style={{
          cursor: 'pointer',
          color: 'grey'
        }}
        onClick={() => onDelete(list.id)}
      />

    </div>
  )
}





export default List;