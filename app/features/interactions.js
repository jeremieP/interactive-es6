import React from 'react';
export default [
  {
    index: 1,
    title: "1/ Afficher un message à l'utilisateur",
    content: (
      <div>
        <p>Vous devez afficher un message à l'utilisateur, afin de lui montrer un prénom.</p>
        <p>Notez le prénom <code>Adrianna</code> dans la variable <code>name</code></p>
        <p>Affichez le message suivant à l'utilisateur :  <code>"Bonjour, je suis "</code> accompagné de votre prénom</p>
        <p>En JavaScript, la concaténation s'effectue grâce au signe <code>+</code>.</p>
      </div>
    )
  },
  {
    index: 2,
    title: '2/ Demandez le prénom de votre utilisateur',
    content: (
      <div>
        <p>Vous devez maintenant, non plus afficher votre prénom, mais demandez le prénom de l'utilisateur. (Le prénom entré sera <code>Julie</code>)</p>
        <p>Une fois reçu, affichez lui le message suivant : <code>"Bienvenue "</code> accompagné du prénom précédemment reçu.</p>
      </div>
    )
  },
  {
    index: 3,
    title: '3/ Confirmer que vous pouvez passer à la suite des exercices',
    content: (
      <div>
        <p>Pour finir, vous devez valider votre compréhension des interactions utilisateurs, en demandant à votre utilisateur, si vous pouvez continuer les exercices !</p>
        <p>Pour cela, <br />
          <ul>
            <li>Présentez-vous</li>
            <li>Demandez le prénom de l'utilisateur (Le prénom entré sera <code>Julie</code>)</li>
            <li>Confirmez que vous avez bien compris son prénom</li>
          </ul>
        </p>
      </div>
    )
  }
]
