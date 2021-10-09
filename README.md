# Leetchi accessibilité - extension de navigateur

Cette extension de navigateur a pour but de corriger un certain nombre de problèmes d’accessibilité du site [Leetchi.com](https://www.leetchi.com/) afin qu’il soit utilisable par les personnes handicapées car il ne l’est pas, par défaut.

L’objectif n’est pas que cette extension soit pérenne mais que Leetchi s’empare ensuite du problème pour corriger son site web.

## Problèmes notamment corrigés

1. Un certain nombre de contrastes de couleurs pour avoir un minimum de ratio de 4,5:1 ;
1. La visibilité de la prise de focus ;
1. Ajout de libellés aux champs (notamment date de naissance et d'autres) ;
1. La navigation au clavier.

Note : je ne peux pas corriger le carrousel qui défile automatiquement.

## Avertissements

Cette extension a été produite très rapidement. Aucun audit d’accessibilité du site selon un référentiel n’a été réalisé. Par conséquent, certains problèmes peuvent subsister.

Certains textes sont ajoutés par l'extension uniquement en français et seront donc en français sur la version anglaise du site.

## Code de l'extension

Le code produit a pour but de surcharger le site Leetchi.com et non pas de le remplacer. Par conséquent, ce n'est pas forcément hyper propre.

La surcouche JavaScript est écrite en jQuery parce que c'était plus facile pour moi de coder ainsi. Libre à vous de proposer une conversion en Vanilla si vous le souhaitez.
