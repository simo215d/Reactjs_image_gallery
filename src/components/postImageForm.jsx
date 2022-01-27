import React, { Component } from "react";

class PostImageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { url: "", artist: "" };

    this.handleURLChange = this.handleURLChange.bind(this);
    this.handleArtistChange = this.handleArtistChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleURLChange(event) {
    this.setState({ url: event.target.value });
  }

  handleArtistChange(event) {
    this.setState({ artist: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.url === "" || this.state.artist === "") {
      alert("You must enter an artist and an url!");
      event.preventDefault();
      return;
    }
    this.props.callback(this.state.artist, this.state.url);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2 className="text-light">Post an image</h2>
          <div className="form-group">
            <label className="text-light" htmlFor="i1">
              Artist
            </label>
            <input
              id="i1"
              type="text"
              className="form-control"
              placeholder="Enter name"
              value={this.state.artist}
              onChange={this.handleArtistChange}
            />
          </div>
          <div className="form-group">
            <label className="text-light" htmlFor="i2">
              Image URL
            </label>
            <input
              id="i2"
              type="text"
              className="form-control"
              placeholder="URL"
              value={this.state.url}
              onChange={this.handleURLChange}
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary w-100 mb-5"
            value="Upload"
          />
        </form>
      </div>
    );
  }
}

export default PostImageForm;
