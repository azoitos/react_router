import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class AllArtists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: []
    }
  }

  componentDidMount() {
    axios.get('/api/artists/')
      .then(res => res.data)
      .then(artists => {
        this.setState({ artists })
      });
  }

  render() {
    console.log(this.props);
    const artists = this.state.artists;
    // const selectAlbum = this.props.selectAlbum;

    return (
      <div>
        <h3>Artists</h3>
        <div className="row">
          {
            artists.map(artist => {
              let artistId = `/artists/${artist.id}`;
              return <div className="col-xs-4" key={artist.id}>
                <Link to={artistId} className="thumbnail" >
                  <img src={artist.imageUrl} />
                  <div className="caption">
                    <h5>
                      <span>{artist.name}</span>
                    </h5>
                  </div>
                </Link>
              </div>
            }) 
          }
        </div>
      </div>
    );
  }
}
