import React from 'react';

export default [
  {
    index: 1,
    title: '1/ Créez des variables modifiabes',
    content: (
      <div>
        <p>Créez ici deux variables <code>prenom</code> et <code>bro_and_sis</code>, contenant votre prénom, et le nombre de frères et soeurs que vous avez.</p>
        <p>ATTENTION : <code>prenom</code> doit être une chaîne de caractères, et <code>bro_and_sis</code> doit être un nombre</p>
        <p>Ces variables doivent pouvoir être modifiées...</p>
      </div>
    )
  },
  {
    index: 2,
    title: '2/ Créez des variables non modifiabes',
    content: (
      <div>
        <p>Créez ici deux variables <code>prenom</code> et <code>bro_and_sis</code>, contenant votre prénom, et le nombre de frères et soeurs que vous avez.</p>
        <p>ATTENTION : <code>prenom</code> doit être une chaîne de caractères, et <code>bro_and_sis</code> doit être un nombre</p>
        <p>Ces variables NE doivent PAS pouvoir être modifiées...</p>
      </div>
    ),
  },
  {
    index: 3,
    title: '3/ Créez un tableau',
    content: (
      <div>
        <p>Créez ici un tableau, nommé <code>simplon</code> contenant 3 prénoms de vos collègues de la promo Simplon.</p>
      </div>
    )
  },
  {
    index: 4,
    title: '4/ Créez un objet',
    content: (
      <div>
        <p>Créez un objet nommé <code>me</code>, contenant 2 clés, <code>prenom</code> et <code>age</code>, et ayant comme valeur votre prénom et votre âge.</p>
      </div>
    )
  },
  {
    index: 5,
    title: "5/ Créez un tableau d'objets",
    content: (
      <div>
        <p>Créez ici un tableau, nommé <code>family</code> contenant 2 objets.</p>
        <p>Chacun des objets sera un équivalent de l'objet <code>me</code> précédamment créé</p>
      </div>
    )
  }
]
