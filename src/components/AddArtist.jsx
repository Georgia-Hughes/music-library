import React from 'react';
import axios from 'axios';
import Alert from './Alert';
import '../styles/addArtist.scss';

class AddArtist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: [{
        name: '',
        genre: '',
        alertMessage: '',
        isSuccess: false,
        isError: false,
      },
      ],
      error: '',
    };
  }

  resetForm = () => {
    this.setState(() => this.initialState);
  };

  handleAddArtist = (event) => {
    event.preventDefault();

    this.setState({
      alertMessage: '',
      isSuccess: false,
      isError: false,
    });

    if (this.validate()) {
      this.setState({
        error: '',
      });

      axios.post('http://127.0.0.1:3000/artists', this.state.fields)
        .then(() => this.setState({
          isSuccess: true,
          alertMessage: 'Artist added.',
        }))
        .catch(() => {
          this.setState({
            alertMessage: 'Artist not added. Please try again later.',
            isError: true,
          });
        });
    } else {
      this.setState({
        error: 'The form is invalid',
      });
    }
  };

    handleFieldChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    };

    validate() {
      return this.state.name.length > 2;
    }

    render() {
      return (
        <div className="addArtist">
          <div className="alert alert.success">
            {
              this.state.isSuccess &&
                <Alert message={this.state.alertMessage} success />
            }
            {
              this.state.isError &&
                <Alert message={this.state.alertMessage} />
            }
          </div>
          {this.state.error &&
            <h1 className="error-message">{this.state.error}</h1>
          }
          <form onSubmit={this.handleAddArtist}>
            <div className="row">
              <label>Artist:</label>
              <input
                name="name"
                value={this.state.fields.name}
                onChange={this.handleFieldChange}
              />
            </div>
            <div className="row">
              <label>Genre:</label>
              <input
                name="genre"
                value={this.state.fields.genre}
                onChange={this.handleFieldChange}
              />
            </div>
            <div className="row">
              <button type="submit">Add</button>
            </div>
          </form>
        </div>
      );
    }
}

export default AddArtist;
