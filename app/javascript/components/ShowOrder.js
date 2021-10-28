import React from "react"
import PropTypes from "prop-types"


class ShowOrder extends React.Component {

  roleUser = () => {
    const { id: id_user, role, email } = this.props.user;
    const url_user = "/user/" + id_user;

    if ( role == "admin"){
        return (
            <li className="list-group-item">
                User email: <a href={ url_user }>{ email }</a>
            </li>
        )
    }
  }

  render () {
    const { id, amount } = this.props.order;
    const { quantity } = this.props.order_description;
    const { id: item_id, name } = this.props.item;
    const url = "/item/" + item_id;

    return (
        <div>
          <h1>Number order: { id }</h1>
          <h2><a href={ url }>{ name }</a></h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
                Quantity: { quantity }
            </li>
            <li className="list-group-item">
                Amount: { amount } grn
            </li>
            { this.roleUser() }
          </ul>
          <a href="/order" className="btn btn-outline-danger">List orders</a>
        </div>
    );
  }
}

export default ShowOrder
