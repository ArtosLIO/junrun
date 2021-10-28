import React from "react"
import PropTypes from "prop-types"


class Order extends React.Component {

  render () {
    const { id, amount, created_at } = this.props;
    const url = "/order/" + id;
    const time = created_at.match(/([0-9]{4}-[0-9]{2}-[0-9]{2}).([0-9]{2}:[0-9]{2})/);

    return (
        <li className="list-group-item">
          <div className="container">
            <div className="row">
              <div className="col-8 start">
                <h2 className="card-title">
                  Number order: { id }
                </h2>
                <p className="text-muted">
                  { amount }
                </p>
              </div>
              <div className="col-4 align-self-center text-end">
                <a href={ url } className="btn btn-outline-info">Detail</a>
              </div>
            </div>
          </div>
          <div className="card-footer text-muted">
            { time[1] + ' ' + time[2] }
          </div>
        </li>
    );
  }
}

export default Order
