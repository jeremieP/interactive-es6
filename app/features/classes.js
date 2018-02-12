import React from 'react';
export default [
  {
    index: 1,
    title: 'La classe Console',
    content: (
      <div>
        <p>Créez une classe <code>Console</code>, respectant les contraintes suivantes :</p>
        <p>
          <ul>
            <li>Elle aura trois propriétés : <code>marque</code>, <date>model</date> et <code>date</code> qui contiendront la marque, le modèle et l'année de sortie de la console. Ces informations seront fournies lors de la construction de l'objet.</li>
          </ul>
        </p>
      </div>
    )
  },
  {
    index: 2,
    title: 'Et si on ajoutait des méthodes ?',
    content: (
      <div>
        <p>Ajoutons une méthode <code>getInfos()</code> à notre classe Console, qui retournera la phrase suivante : <code>La console [MARQUE] [MODELE] est sortie en [DATE]</code></p>
      </div>
    ),
  }
]
