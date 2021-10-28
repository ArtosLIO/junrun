import React from "react"
import PropTypes from "prop-types"
class CreateItemForm extends React.Component {

  render () {
    const { csrf_token } = this.props;
    const url = "/item";

    return (
        <div className="container">
          <h1 className="text-center">
            Create new item
          </h1>
          <form action={ url } method="post" className="container">

            <input type="hidden" name="authenticity_token" value={ csrf_token }/>

            <div className="form-group">
              <label htmlFor="item_price">Price:</label>
              <input type="number" id="item_price" min="1" className="form-control" name="item[price]" required></input>
            </div><br/>

            <div className="form-group">
              <label htmlFor="item_name">Name:</label>
              <input type="text" id="item_name" className="form-control" name="item[name]" required></input>
            </div><br/>

            <div className="form-group">
              <label htmlFor="item_description">Description:</label>
              <textarea id="item_description" className="form-control" rows="3" name="item[description]"></textarea>
            </div><br/>

            <input type="submit" className="btn btn-outline-success" value="Create item"/>
          </form>
        </div>
    );
  }
}

export default CreateItemForm
