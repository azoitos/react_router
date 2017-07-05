import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const AllAlbums = (props) => {

    const albums = props.albums;

    return (
      <div>
        <h3>Albums</h3>
        <div className="row">
          {
            albums.map(album => {
              let albumId = `/albums/${album.id}`;
              return <div className="col-xs-4" key={album.id}>
                <Link to={albumId} className="thumbnail" >
                  <img src={album.imageUrl} />
                  <div className="caption">
                    <h5>
                      <span>{album.name}</span>
                    </h5>
                    <small>{album.songs.length} songs</small>
                  </div>
                </Link>
              </div>
            }) 
          }
        </div>
      </div>
    );
}

export default AllAlbums;