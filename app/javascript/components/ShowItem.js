import React from "react"
import PropTypes from "prop-types"
class ShowItem extends React.Component {

  render () {
    const { name, price, description } = this.props.item;

    return (
      <div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h1>
              { name }
            </h1>
          </li>
          <li className="list-group-item">
            { description }
          </li>
          <li className="text-muted list-group-item">
            { price }
          </li>
        </ul>
        <a href="item/" className="btn btn-outline-danger">List items</a>
      </div>
    );
  }
}

export default ShowItem
