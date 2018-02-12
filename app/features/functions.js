import React from 'react';
export default [
  {
    index: 1,
    title: 'Je veux multiplier 2 nombres !',
    content: (
      <div>
        <p>Créez une fonction <code>multip</code>, qui prend 2 paramètres <code>a</code> et <code>b</code> et retourne le résultat de la multiplication de ces 2 chiffres.</p>
      </div>
    )
  },
  {
    index: 2,
    title: 'Arguments par défaut !',
    content: (
      <div>
        <p>Créez une fonction <code>divis</code>, qui prend 2 paramètres <code>a</code> et <code>b</code> et retourne le résultat de la division de ces 2 chiffres.</p>
        <p>Par défaut, <code>b</code> aura pour valeur <code>1</code></p>
        <p>ATTENTION : la division par 0 étant interdite, vous devez pensez au contrôle nécessaire. Si <code>b = 0</code> alors vous forcerez sa valeur à <code>1</code></p>
      </div>
    ),
  },
  {
    index: 3,
    title: 'BONUS : Une addition illimitée ?',
    content: (
      <div>
        <p>Je voudrais additionner un ensemble de chiffres, et retourner le total. Mais je ne sais pas combien de chiffres je vais vouloir additionner.</p>
        <p>Créez une fonction <code>ajout</code> qui répond à ce problème</p>
        <p>L'opérateur "spread" (<code>...</code>) peut vous aider : <a href="https://msdn.microsoft.com/fr-fr/library/dn919259(v=vs.94).aspx" target="_blank">Plus d'infos</a></p>
      </div>
    )
  }
]
