import React from "react"
import PropTypes from "prop-types"


class HeadNav extends React.Component {

  navItem = (user) => {
    if ( user == null){
      return (<ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>);
    } else if ( user.role == "use" ){

      const url_edit = "user/" + user.id;

      return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a href={ url_edit } className="nav-link">Edit</a>
          </li>
          <li className="nav-item">
            <a href="/order" className="nav-link">Orders</a>
          </li>
        </ul>
      );
    } else if ( user.role == "admin" ) {

      const url_edit = "user/" + user.id;

      return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a href={ url_edit } className="nav-link">Edit</a>
          </li>
          <li className="nav-item">
            <a href="/order" className="nav-link">Orders</a>
          </li>
          <li className="nav-item">
            <a href="/item/new" className="nav-link">Create</a>
          </li>
          <li className="nav-item">
            <a href="/users/list" className="nav-link">Users</a>
          </li>
        </ul>
      );
    }
  }

  userComeIn = (user) => {
    if ( user == null){
      return (
        <div>
          <a href="/users/sign_in" className="btn btn-outline-success">Sign In</a>
          <a href="/users/sign_up" className="btn btn-outline-success">Sign Up</a>
        </div>
      );
    } else {
      return (
        <a href="/users/sign_out" className="btn btn-outline-danger" data-method="delete">Sign Out</a>
      );
    }
  }

  render () {

    const { user } = this.props;

    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a href="/item" className="navbar-brand">ExpressShop</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                { this.navItem(user) }
              <form action="/item" method="get" className="d-flex">
                <input type="text" id="query" name="query" placeholder="Search item" className="form-control me-2"/>
                <input type="submit" className="btn btn-outline-success" value="Search" name="commit"/>
              </form>
                { this.userComeIn(user) }
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default HeadNav
