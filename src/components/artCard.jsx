import React, { Component } from "react";

class ArtCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      artist: this.props.artist,
      url: this.props.url,
      isEditing: false,
      editedArtist: this.props.artist,
      editedUrl: this.props.url,
    };
    this.editClicked = this.editClicked.bind(this);
    this.deleteClicked = this.deleteClicked.bind(this);
    this.handleURLChange = this.handleURLChange.bind(this);
    this.handleArtistChange = this.handleArtistChange.bind(this);
    this.saveEditClicked = this.saveEditClicked.bind(this);
    this.cancelEditClicked = this.cancelEditClicked.bind(this);
  }

  editClicked() {
    this.setState({ isEditing: true });
  }

  deleteClicked() {
    this.props.callback(this.state.id);
  }

  saveEditClicked() {
    this.setState({ artist: this.state.editedArtist });
    this.setState({ url: this.state.editedUrl });
    this.setState({ isEditing: false });
  }

  cancelEditClicked() {
    this.setState({ editedArtist: this.state.artist });
    this.setState({ editedUrl: this.state.url });
    this.setState({ isEditing: false });
  }

  handleURLChange(event) {
    this.setState({ editedUrl: event.target.value });
  }

  handleArtistChange(event) {
    this.setState({ editedArtist: event.target.value });
  }

  render() {
    return (
      <div className="col-12 col-md-6 col-lg-4 mb-3">
        <div className="card">
          <img
            className="card-img-top"
            src={this.state.url}
            alt="missing"
          />
          <div className="card-body">
            {this.state.isEditing ? (
              <form action="">
                <div className="form-group">
                  <label htmlFor="">Artist</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter name"
                    value={this.state.editedArtist}
                    onChange={this.handleArtistChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Image URL</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="URL"
                    value={this.state.editedUrl}
                    onChange={this.handleURLChange}
                  />
                </div>
              </form>
            ) : (
              <label>Artist: {this.state.artist}</label>
            )}
            <br />
            {this.state.isEditing ? (
              <div className="row justify-content-md-center">
                <button
                  className="btn-primary btn col mr-1 ml-3"
                  onClick={this.saveEditClicked}
                >
                  Save
                </button>
                <button
                  className="btn-danger btn col ml-1 mr-3"
                  onClick={this.cancelEditClicked}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="row justify-content-md-center">
                <button
                  className="btn-warning btn col mr-1 ml-3"
                  onClick={this.editClicked}
                >
                  Edit
                </button>
                <button
                  className="btn-danger btn col ml-1 mr-3"
                  onClick={this.deleteClicked}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ArtCard;
