import React from "react"
import PropTypes from "prop-types"


class User extends React.Component {

  render () {
    const { id, first_name, last_name, role, email, created_at, updated_at } = this.props;
    const name = first_name + ' ' + last_name;
    const url = "/user/" + id;
    const time_create = created_at.match(/([0-9]{4}-[0-9]{2}-[0-9]{2}).([0-9]{2}:[0-9]{2})/);
    const time_update = updated_at.match(/([0-9]{4}-[0-9]{2}-[0-9]{2}).([0-9]{2}:[0-9]{2})/);

    return (
        <li className="list-group-item">
          <div className="container">
            <div className="row">
                <div className="col-8 start">
                    <h2 className="card-title">
                        { name }
                    </h2>
                    <p className="card-text">
                        { email }
                    </p>
                    <p className="text-muted">
                        { role }
                    </p>
                </div>
                <div className="col-4 align-self-center text-end">
                    <a href={ url } className="btn btn-outline-success">Edit</a>
                </div>
            </div>
          </div>
          <div className="card-footer text-muted">
              Create: { time_create[1] + ' ' + time_create[2] } | Last update: { time_update[1] + ' ' + time_update[2] }
          </div>
        </li>
    );
  }
}

export default User
