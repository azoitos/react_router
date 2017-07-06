import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
import AllArtists from './AllArtists';
import SingleArtist from './SingleArtist';
import StatefulAlbums from './StatefulAlbums';
import NotFound from './NotFound';

export default class Main extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Router >
        <div id="main" className="container-fluid">
          <div className="col-xs-2">
            <Sidebar />
          </div>
          <div className="col-xs-10">
            <div className="col-xs-10">
              <Switch>
              <Route
                exact path='/'
                component={StatefulAlbums}
              />
              <Route
                exact path='/albums'
                component={StatefulAlbums}
              />
              <Route
                path='/albums/:albumId'
                render={(routeProps) => <SingleAlbum audioProps={this.props} match={routeProps.match} />}
              />
              <Route
                exact path='/artists'
                component={AllArtists}
              />
              <Route
                path='/artists/:artistId'
                render={(routeProps) => <SingleArtist audioProps={this.props} match={routeProps.match}  />}
              />
              <Route
                component={NotFound}
              />
              </Switch>
            </div>
          </div>
          <Player audioProps={this.props}/>
        </div>
      </Router>
    );
  }
}
