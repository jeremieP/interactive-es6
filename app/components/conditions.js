import React from 'react';

import Feature from './feature';

import { Link } from 'react-router';

export default class Conditions extends React.Component {
  render() {
    return (
      <div className="challenge row">
        <Feature feature="conditions" />

        <div className="col-md-12">
          <Link className="btn btn-primary btn-lg btn-block" to= "/functions">Créons des fonctions...</Link>
        </div>
      </div>
    );
  }
}
