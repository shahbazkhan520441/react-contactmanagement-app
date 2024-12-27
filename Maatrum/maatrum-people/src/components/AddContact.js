import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name.trim() === "" || this.state.email.trim() === "") {
      alert("All fields are mandatory.");
      return;
    }

    console.log("New Contact Added:", this.state);
    this.props.addContactHandler(this.state);

    this.setState({ name: "", email: "" });

    // Use the navigate function passed from the parent component
    if (this.props.navigate) {
      this.props.navigate("/");
    } else {
      console.error("Navigate function is not available.");
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="ui main" style={{ marginTop: "20px" }}>
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <button
            className="ui button blue"
            type="submit"
            disabled={!this.state.name.trim() || !this.state.email.trim()}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

AddContact.propTypes = {
  addContactHandler: PropTypes.func.isRequired,
  navigate: PropTypes.func, // Add navigate as a prop
};

const AddContactWithNavigate = (props) => {
  const navigate = useNavigate();
  return <AddContact {...props} navigate={navigate} />;
};

export default AddContactWithNavigate;
