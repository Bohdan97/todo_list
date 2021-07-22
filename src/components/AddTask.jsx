import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [value, setText] = useState('')
    const [description, setDescription] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!value) {
            alert('Please add a task')
            return
        }

        onAdd({ value, description, isActive: false })

        setText('')
        setDescription('')
    }


    return (
        <form className="main_add" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task"
                    value={value}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control" >
                <label>Description</label>
                <input type="text" placeholder="Add Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <input type="submit" value="Save Task" className="btn btn-block btn-save" />
        </form>
    )
}

export default AddTask