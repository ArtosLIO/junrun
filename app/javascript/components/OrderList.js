import React from "react"
import PropTypes from "prop-types"

import Order from "./Order";


class OrderList extends React.Component {

  render () {
    const { orders } = this.props
    const orders_list = orders.map((order) => {
      return (
          <Order { ...order } key={ order.id } />
      );
    })

    return (
      <div>
        <ul className="list-group list-group-flush">
          { orders_list }
        </ul>
      </div>
    );
  }
}

export default OrderList
