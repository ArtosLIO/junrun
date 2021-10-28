import React from "react"
import PropTypes from "prop-types"
class EditItemForm extends React.Component {

  render () {
    const { id, price, name, description } = this.props.item;
    const { csrf_token } = this.props;
    const url = "/item/" + id;

    return (
        <div className="container">
            <h1 className="text-center">
                Edit item
            </h1>
            <form action={ url } method="post" className="container">

                <input type="hidden" name="authenticity_token" value={ csrf_token }/>
                <input type="hidden" name="_method" value="patch"/>

                <div className="form-group">
                    <label htmlFor="item_price">Price:</label>
                    <input type="number" id="item_price" min="1" className="form-control" name="item[price]"
                           defaultValue={ price }></input>
                </div><br/>

                <div className="form-group">
                    <label htmlFor="item_name">Name:</label>
                    <input type="text" id="item_name" className="form-control" name="item[name]"
                           defaultValue={ name }></input>
                </div><br/>

                <div className="form-group">
                  <label htmlFor="item_description">Description:</label>
                  <textarea id="item_description" className="form-control" rows="3" name="item[description]"
                            defaultValue={ description }></textarea>
                </div><br/>

                <input type="submit" className="btn btn-outline-success" value="Edit item"/>
            </form>
        </div>
    );
  }
}

export default EditItemForm
