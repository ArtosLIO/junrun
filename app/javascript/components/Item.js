import React from "react"
import PropTypes from "prop-types"


class Item extends React.Component {

    roleButton = () => {
        const { id, role, csrf_token, onDeleteItem } = this.props;
        if (role == "admin"){
            const url_id = `${id}`;
            return (
                <div>
                    <a href={ "item/" + url_id } className="btn btn-outline-info">Detail</a>
                    <a className="btn btn-outline-danger" onClick={ () => onDeleteItem(id) }>Delete</a>
                    <a href={ "item/" + url_id + "/edit" } className="btn btn-outline-warning">Edit</a>
                    <form action="/order" method="post" className="d-flex">
                        <input type="hidden" name="authenticity_token" value={ csrf_token }/>
                        <input type="hidden" name="item_id" value={ id }/>
                        <input type="number" name="quantity" className="form-control" min="1" defaultValue="1"/>
                        <input type="submit" value="Buy" className="btn btn-outline-success"/>
                    </form>
                </div>
            );
        }else if (role == "use") {
            return (
                <form action="/order" method="post" className="d-flex">
                    <input type="hidden" name="authenticity_token" value={ csrf_token }/>
                    <input type="hidden" name="item_id" value={ id }/>
                    <input type="number" name="quantity" className="form-control" min="1" defaultValue="1"/>
                    <input type="submit" value="Buy" className="btn btn-outline-success"/>
                </form>
            )
        }else return (
            <div></div>
        )
    }

  render ( ) {
    const { name, price, description, created_at } = this.props;
    const time = created_at.match(/([0-9]{4}-[0-9]{2}-[0-9]{2}).([0-9]{2}:[0-9]{2})/);
    let desc = description != null ? description.substr(0, 50) + ' ...' : null

    return (
      <li className="list-group-item">
          <div className="container">
              <div className="row">
                  <div className="col-8 start">
                      <h2 className="card-title">
                          { name }
                      </h2>
                      <p className="cart-text">
                          { desc }
                      </p>
                      <p className="text-muted">
                          { price }
                      </p>
                  </div>
                  <div className="col-4 align-self-center text-end">
                      { this.roleButton() }
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

export default Item
