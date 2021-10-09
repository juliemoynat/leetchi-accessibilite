# Leetchi accessibilité - extension de navigateur

Cette extension de navigateur a pour but de corriger un certain nombre de problèmes d’accessibilité du site [Leetchi.com](https://www.leetchi.com/) afin qu’il soit utilisable par les personnes handicapées car il ne l’est pas, par défaut.

L’objectif n’est pas que cette extension soit pérenne mais que Leetchi s’empare ensuite du problème pour corriger son site web.

## Problèmes notamment corrigés

1. Un certain nombre de contrastes de couleurs pour avoir un minimum de ratio de 4,5:1 ;
1. La visibilité de la prise de focus ;
1. Ajout de libellés aux champs dans les formulaire d’inscription, de don ;
1. La navigation au clavier dans les formulaires d’inscription, de don ;
1. Vocalisation automatique des changements de diapositives dans les carrousels supprimée.

## Problèmes nuisibles détectés mais que je ne peux pas corriger

1. Le carrousel qui défile automatiquement. Il faut que Leetchi ajoute l’option pour avoir le bouton pause (elle existe dans le script utilisé donc c’est rapide à faire !).
1. Sur la page d’accueil, quand on est connectée, dans l’en-tête du site, il y a un menu qui doit s’ouvrir quand on clique sur le bouton avec son prénom. En navigation clavier avec un lecteur d’écran, il ne se déplie pas. Il faut passer par une autre page pour que ça fonctionne…
1. Dans le compte, je ne peux pas corriger les champs de formulaire qui ne sont pas accessibles (Pays de résidence, Nationalité, Région, Langue, Date de naissance) parce que cette partie du site est faite en React donc le DOM est chargé après le JavaScript et je ne peux pas intervenir dessus.

## Avertissements

Cette extension a été produite très rapidement. Aucun audit d’accessibilité du site selon un référentiel n’a été réalisé. Par conséquent, certains problèmes peuvent subsister.

Certains textes sont ajoutés par l’extension uniquement en français et seront donc en français sur la version anglaise du site.

## Code de l’extension

Le code produit a pour but de surcharger le site Leetchi.com et non pas de le remplacer. Par conséquent, ce n’est pas forcément hyper propre.

La surcouche JavaScript est écrite en jQuery parce que c’était plus facile pour moi de coder ainsi. Libre à vous de proposer une conversion en Vanilla si vous le souhaitez.

## Morale de l’histoire

Tout ce travail montre bien qu’aucun outil ne pourrait corriger automatiquement l’accessibilité d’un site web puisque, déjà, en faisant une surcouche manuellement, on ne peut pas faire tout ce qu’on veut !
