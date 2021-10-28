import React from "react"
import PropTypes from "prop-types"


class SignUpUserForm extends React.Component {

  render () {
    const { csrf_token } = this.props

    return (
      <div className="container">
        <h1 className="text-center">
          Sign Up
        </h1>
        <form action="/users" method="post" className="container">

            <input type="hidden" name="authenticity_token" value={ csrf_token }/>

            <div className="field form-group">
                <label htmlFor="user_first_name">First name</label>
                <input type="text" id="user_first_name" className="form-control" name="user[first_name]" required></input>
            </div>

            <div className="field form-group">
                <label htmlFor="user_last_name">Last name</label>
                <input type="text" id="user_last_name" className="form-control" name="user[last_name]" required></input>
            </div>

            <div className="field form-group">
                <label htmlFor="user_email">Email</label>
                <input type="email" id="user_email" className="form-control" name="user[email]" autofocus="autofocus"
                       autocomplete="email" required></input>
            </div>

            <div className="field form-group">
                <label htmlFor="user_password">Password <em>(6 characters minimum)</em></label>
                <input type="password" id="user_password" className="form-control" name="user[password]"
                       autocomplete="new-password" required></input>
            </div>

            <div className="field form-group">
                <label htmlFor="user_password_confirmation">Password confirmation</label>
                <input type="password" id="user_password_confirmation" className="form-control"
                       autocomplete="new-password" name="user[password_confirmation]" required></input>
            </div>

            <div className="actions">
                <input type="submit" value="Sign Up" className="btn btn-outline-success"/>
            </div>
        </form>

        <a href="/users/sign_in" className="btn btn-outline-success">Sign In</a>

      </div>
    );
  }
}

export default SignUpUserForm
