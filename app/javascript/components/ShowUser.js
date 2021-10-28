import React from "react"
import PropTypes from "prop-types"


class ShowUser extends React.Component {

  render () {
    const { id, first_name, last_name, email } = this.props.user;
    const { csrf_token } = this.props;
    const url_update = "/user/" + id;

    return (
        <div className="container">
          <h1 className="text-center">
            Show User
          </h1>
          <form action={ url_update } method="post" className="container">

            <input type="hidden" name="authenticity_token" value={ csrf_token }/>
            <input type="hidden" name="_method" value="put"/>

            <div className="form-group">
              <label htmlFor="user_first_name">First name</label>
              <input type="text" id="user_first_name" className="form-control" name="user[first_name]"
                     defaultValue={ first_name } required></input>
            </div><br/>

            <div className="form-group">
              <label htmlFor="user_last_name">Last name</label>
              <input type="text" id="user_last_name" className="form-control" name="user[last_name]"
                     defaultValue={ last_name } required></input>
            </div><br/>

            <div className="form-group">
              <label htmlFor="user_email">Email</label>
              <input type="text" id="user_email" className="form-control" name="user[email]"
                     defaultValue={ email }></input>
            </div><br/>

            <input type="submit" className="btn btn-outline-success" value="Update profile"/>
          </form>
        </div>
    );
  }
}

export default ShowUser
