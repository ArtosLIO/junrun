import React from "react"
import PropTypes from "prop-types"


class SignInUserForm extends React.Component {

  render () {

    const { csrf_token } = this.props;

    return (
      <div className="container">
        <br/>
        <h2 className="text-center">
          Log in
        </h2>

        <form id="new_user" action="/users/sign_in" method="post">

          <input type="hidden" name="authenticity_token" value={ csrf_token }/>

          <div class="field form-group">
            <label htmlFor="user_email">Email</label>
            <input type="email" id="user_email" className="form-control" name="user[email]" autoFocus="autofocus"
                   autoComplete="email" required></input>
          </div><br/>

          <div class="field form-group">
            <label htmlFor="user_password">Password <em>(6 characters minimum)</em></label>
            <input type="password" id="user_password" className="form-control" name="user[password]"
                   autoComplete="new-password" required></input>
          </div><br/>

          <div class="actions">
            <input type="submit" value="Sign In" className="btn btn-outline-success"/>
          </div>
        </form>
          <a href="/users/sign_up" className="btn btn-outline-success">Sign Up</a>
      </div>
    );
  }
}

export default SignInUserForm
