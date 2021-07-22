const ButtonAdd = ({ onClick, text, color }) => {

    return (
        <button className="btn btn-lg button"
            onClick={onClick}
            style={{ backgroundColor: color }}>
            {text}
        </button>
    )
}


export default ButtonAdd