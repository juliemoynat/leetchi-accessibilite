# Leetchi accessibilité - extension de navigateur

Cette extension de navigateur a pour but de corriger un certain nombre de problèmes d’accessibilité du site [Leetchi.com](https://www.leetchi.com/) afin qu’il soit utilisable par les personnes handicapées car il ne l’est pas, par défaut.

L’objectif n’est pas que cette extension soit pérenne mais que Leetchi s’empare ensuite du problème pour corriger son site web.

Cette extension devrait rendre possible, en particulier aux personnes aveugles, de faire un don sur Leetchi. Mais attention : [créez un compte](https://www.leetchi.com/fr/User/Authenticate?returnUrl=%2F) avant de participer à une cagnotte car si vous créez le compte dans la page de don, vous rencontrerez des problèmes que je ne peux résoudre.

## Pages qui ont été vues pour cette extension

- Page d’accueil
- Page d’une cagnotte
- Page de connexion / création de compte
- Espace mon compte (mais là, je n’ai rien pu faire…)
- Page de participation à une cagnotte + page paiement par carte bancaire
- Page de félicitations après un don

## Problèmes notamment corrigés

1. Un certain nombre de contrastes de couleurs pour avoir un minimum de ratio de 4,5:1 ;
1. La visibilité de la prise de focus ;
1. Ajout de libellés aux champs dans les formulaire d’inscription, de don ;
1. Ajout de titre de cadre aux champs de paiement qui sont dans des cadres (`iframe`) et n’ont pas de libellé associé (le titre de cadre limite la casse) ;
1. La navigation au clavier dans les formulaires d’inscription, de don ;
1. Vocalisation automatique des changements de diapositives dans les carrousels supprimée.

## Problèmes nuisibles détectés mais que je ne peux pas corriger

1. Si on veut participer à une cagnotte et créer son compte à ce moment-là (dans la page de don), les champs de la date de naissance ont un script qui fait perdre le focus dès qu’on le met sur un champ. De plus, il y a un piège au clavier quand on essaye de naviguer en arrière avec <kbd>Maj</kbd> + <kbd>Tab</kbd>.
1. Le carrousel qui défile automatiquement. Il faut que Leetchi ajoute l’option pour avoir le bouton pause (elle existe dans le script utilisé donc c’est rapide à faire !).
1. Sur la page d’accueil, quand on est connectée, dans l’en-tête du site, il y a un menu qui doit s’ouvrir quand on clique sur le bouton avec son prénom. En navigation clavier avec un lecteur d’écran, il ne se déplie pas. Il faut passer par une autre page pour que ça fonctionne…
1. Dans le compte, je ne peux pas corriger les champs de formulaire qui ne sont pas accessibles (Pays de résidence, Nationalité, Région, Langue, Date de naissance) parce que cette partie du site est faite en React donc le DOM est chargé après le JavaScript et je ne peux pas intervenir dessus.
1. Quand on paye, si on fait une erreur dans un champ et qu’on ne voit pas l’écran, il n’y a aucune information qui signale l’erreur. De plus, le message d’erreur disparaît dès qu’on prend le focus dans le champ en erreur…
1. Après un don, sur la page récapitulatif, j’ai voulu rendre possible l’utilisation au clavier des boutons « Afficher le montant » et « Rendre anonyme » (qui sont des éléments `a` sans attribut `href` donc inutilisables au clavier). Mais, en fait, ils ne fonctionnent que si on clique dessus à la souris donc, ça sert à rien…

## Avertissements

Cette extension a été produite très rapidement. Aucun audit d’accessibilité du site selon un référentiel n’a été réalisé. Par conséquent, certains problèmes peuvent subsister.

Certains textes sont ajoutés par l’extension uniquement en français et seront donc en français sur la version anglaise du site.

## Code de l’extension

Le code produit a pour but de surcharger le site Leetchi.com et non pas de le remplacer. Par conséquent, ce n’est pas forcément hyper propre.

La surcouche JavaScript est écrite en jQuery parce que c’était plus facile pour moi de coder ainsi. Libre à vous de proposer une conversion en Vanilla si vous le souhaitez.

## Morale de l’histoire

Tout ce travail montre bien qu’aucun outil ne pourrait corriger automatiquement l’accessibilité d’un site web puisque, déjà, en faisant une surcouche manuellement, on ne peut pas faire tout ce qu’on veut !
