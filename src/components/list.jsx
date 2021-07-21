import React, { Component } from 'react';


class List extends Component {
  render() {

    return (
      <React.Fragment>
        <div className="list">
          <ul className={this.getBadgClasses()}>
            <li>
              <h2 onClick={() => this.props.onIcrement(this.props.list)} >{this.changeList()}</h2>
            </li>
          </ul>
          <button className="btn btn-delete" onClick={() => this.props.onDelete(this.props.list.id)}>🗑</button>
        </div>
      </React.Fragment>
    );
  }

  getBadgClasses() {
    const classes = this.props.list.isActive ? "line" : "none";

    return classes;
  }


  changeList() {
    const { value: todo } = this.props.list;

    return todo;
  }
}

export default List;