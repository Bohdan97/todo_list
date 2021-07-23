import { Link, useParams } from "react-router-dom"
import React from "react"


function Info({ todo, findArray }) {

    const { value } = useParams()

    const item = findArray(value)
    return (
        <>
            <Link to="/">
                <button className="btn btn-lg btn-info">Back</button>
            </Link>
            <div className="list_info">
                <h1>{item[0].value}</h1>
                <p>{item[0].description}</p>
            </div>

        </>
    )
}

export default Info