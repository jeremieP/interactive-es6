import React from 'react';

import { Link } from 'react-router';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h2>Bienvenue sur cet atelier de découverte JavaScript</h2>
        <p>Cette interface permettra de réaliser quelques exercices afin de prendre en main les bases de JavaScript</p>
        <p>Tout ce que vous faites est sauvegardé dans votre navigateur, donc n'ayez pas peur si vous rafraîchissez votre page, vous ne perdrez rien du tout !</p>
        <p>Pour démarrer, mettez votre prénom dans la case prévue, et c'est parti !</p>
      </div>
    );
  }
}
