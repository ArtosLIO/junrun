import React from "react"
import PropTypes from "prop-types"

import User from "./User"


class UserList extends React.Component {

  render () {
    const { users } = this.props;

    const user_list = users.map((user) => {
      return (
          <User { ...user } key={ user.id } />
      )
    })

    return (
      <div>
        <ul className="list-group list-group-flush">
          { user_list }
        </ul>
      </div>
    );
  }
}

export default UserList
