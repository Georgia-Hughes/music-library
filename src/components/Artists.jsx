import React from 'react';
import axios from 'axios';
import ArtistName from './ArtistName';
import Song from './Song';
import '../styles/artist.scss';

class Artists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: [],
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:3000/artists')
      .then((response) => {
        this.setState({
          artists: response.data,
        });
      });
  }

  render() {
    return (
      <div className="card-container">
        <table>
          <tr>
            <th>Name</th>
            <th>Song</th>
          </tr>
          <tr>
            <td>
              {this.state.artists.map((artist) => {
                return (
                  <ArtistName
                    key={artist._id}
                    name={artist.name}
                  />
                );
              })}
            </td>
            <td>
              {this.state.artists.map((artist) => {
                return (
                  <Song
                    key={artist._id}
                    song={artist.song}
                  />
                );
              })}
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Artists;
