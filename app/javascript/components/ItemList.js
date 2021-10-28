import React from "react"
import PropTypes from "prop-types"

import Item from './Item'


class ItemList extends React.Component {

  state = {
    items: this.props.items,
    csrf_token: this.props.csrf_token,
    message: ''
  }

  sendDeleteItem = (id) => {
    const url = "/item/" + id
    fetch(url, {
      method: 'DELETE',
      headers: {
        'X-CSRF-Token': this.state.csrf_token
      }
    })
        .then((res) => {
          this.setState(({ message }) => {
            console.log(res.status);
            let mes
            if (res.status == 204) {
              mes = <div className="alert alert-success" role="alert">Item delete.</div>;
              console.log('Item delete');
            } else if (res.status == 501) {
              mes = <div className="alert alert-danger" role="alert">Item have order.</div>;
            } else {
              mes = <div className="alert alert-danger" role="alert">Item don't delete.</div>;
              console.log('Item don\'t delete');
            }
            return {
              message: mes
            };
          });
        })
  }


  onDeleteItem = (id) => {
    this.setState(({ items }) => {
      const idx = items.findIndex((item) => item.id === id);

      this.sendDeleteItem(id)

      if (this.state.message == '<div className="alert alert-success" role="alert">Item delete.</div>') {
        const newItems = [...items.slice(0, idx),
          ...items.slice(idx + 1)];
        return {
          items: newItems
        }
      }
    })
  }

  render () {
    const { user, csrf_token } = this.props
    const items_list = this.state.items.map((item) => {
      return (
          <Item { ...item }
                role={ user ? user.role : null }
                csrf_token={ csrf_token }
                key={item.id}
                onDeleteItem={ this.onDeleteItem }/>
      );
    })

    return (
      <div>
        <div id="message">{ this.state.message }</div>
        <ul className="list-group list-group-flush">
            { items_list }
        </ul>
      </div>
    );
  }
}

export default ItemList
