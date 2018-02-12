import React from 'react';
export default [
  {
    index: 1,
    title: 'Si....sinon',
    content: (
      <div>
        <p>Accédez au 1er élément du tableau <code>consoles</code> fourni.</p>
        <p>Respectez les conditions suivantes :
          <ul>
            <li>SI la valeur est égale à "Nintendo", alors <code>result</code> sera égal à 1</li>
            <li>SINON <code>result</code> sera égal à 0</li>
          </ul>
        </p>
      </div>
    )
  },
  {
    index: 2,
    title: 'Si...Sinon si....Sinon si...Sinon',
    content: (
      <div>
        <p>Accédez au 2eme élément du tableau <code>consoles</code> fourni.</p>
        <p>Respectez les conditions suivantes :
          <ul>
            <li>SI la valeur est égale à "Nintendo", alors <code>result</code> sera égal à 1</li>
            <li>SINON SI la valeur est égale à "Playstation", alors <code>result</code> sera égal à 2</li>
            <li>SINON SI la valeur est égale à "Sega", alors <code>result</code> sera égal à 3</li>
            <li>SINON SI la valeur est égale à "Microsoft", alors <code>result</code> sera égal à 4</li>
            <li>SINON <code>result</code> sera égal à 0</li>
          </ul>
        </p>
      </div>
    )
  },
  {
    index: 3,
    title: 'Hop, on switch !',
    content: (
      <div>
        <p>Transformez le code de l'exercice précédent, en utilisant une condition <code>switch</code> à la place, et en comparant la valeur du 3eme élément du tableau fourni</p>
      </div>
    )
  },
  {
    index: 4,
    title: 'ET ma condition !',
    content: (
      <div>
        <p>Grâce à l'objet <code>console</code> fourni</p>
        <p>Respectez les conditions suivantes :
          <ul>
            <li>SI <name>marque</name> est égal à "Nintendo" ET que <name>model</name> est égal à "switch", alors <code>result</code> sera égal à 1</li>
            <li>SINON SI <name>marque</name> est égal à "Nintendo" ET que <name>model</name> est égal à "wii", alors <code>result</code> sera égal à 2</li>
            <li>SINON SI <name>marque</name> est égal à "Playstation" OU que <name>marque</name> est égal à "Microsoft", alors <code>result</code> sera égal à 3</li>
            <li>SINON <code>result</code> sera égal à 0</li>
          </ul>
        </p>
      </div>
    )
  }
]
