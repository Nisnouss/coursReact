# React Hook & Gestion de formulaires

## Qu'est ce qu'un Hook ?
- **Les problèmes avant les Hooks:** Les composants de classe étaient lourds, le cycle de vie (componentDidMount, etc.) était complexe, et la logique était difficile à partager.
- **La solution :** Les hooks (apparus avec React 16.9) dont des fonctions spéciales qui permettent de "s'accrocher" (to hook into) aux fonctionnalités de React (état, cycle de vie) depuis des composants fonctionnels.
- **Règle d'or :**
    - Toujours appeler au niveau supérieur (pas dans des boucles ou des conditions)
    - Uniquement dans des composants fonctions React (ou d'autres hooks personnalisés)

## Gérer l'état local avec `UseState`
- **Concept :** Permet d'ajouter une "mémoire" (un état local) à u composant fonctionnel. La fonction `UseState` renvoie toujours un tableaux de deux éléments : la valeur actuelle et la fonction pour le modifier.
- **Intérêts de l'utilisation :** C'est le coeur de l'intéractivité React. Sans état, une application est purement statique. Chaque fois que la fonction de msie à jour est appelée, React est prévenu qu'une donnée a changé et déclenche automatiquement un nouveau rendu (re-render) du composant pour mettre à jour l'influence visuelle.

## Gérer les effets de bords avec `useEffect`
- **Concept :** Permet d'exécuter du code "en dehors" du rendu pur de React (ex: Appels API, abonnements, manipulation manuelle du DOM)
- **Qu'est-ce qu'un "effet de bord ? :** En programamtion, un composnant React idéal est une "fonction pure" : il reçoit des données (props/state) et renvoie du JSX, sans rien modifier d'autre. Un **effet de bord** est tout ce qui sort de ce cadre et intéragit avec le monde extérieurs":
    - Récupérer des données sur un serveur (Appels API)
    - Modifier manuellement le titre de l'onglet (document.title)
    - Configurer un intervalle ou un timer (`setInterval`, `setTimeout`)
    - S'abonner à un service externe (Websockets, Firebase)
- **Le tableau de dépendances :**
    - `[]` : S'exécute uniquement au montage
    - `[variable1, variable2]` : S'exécute au montage ET quand les variables changent
    - *Rien* : S'exécute à chaque rendu (à éviter en général)

## Optimisation avec `useMemo`
- **Concept :** La "mémoïsation" sert à mettre en cache le résultat d'un calcul coûteux pour éviter de le refaire à chaque rendu composant.
- **Analogie :** Si je te demande combien font 345 x 897, tu vas calculer. Si je te redemande 2 secondes plus tard, tu vas me donner la réponse de mémoire sans recalculer, sauf si je change les nombres.
- **Un exemple :** Créer une fonction de filtrage sur une liste de 10 000 éléments

## Fluidite de l'interface utilisateur avec `useTransition`
- **Concept (React >= 18):** Permet de marquer certaines mises à jour d'état comme "non urgente" (transitions). On garde l'interface réctive (comme un champ de texte) même si un rendu lourd se prépare en arrière plan.
- **Intérêt de l'utilisation :** Le but principal est d'améliorer considérablement l'expérience utilisateur (UX) en évitant les blocages ou les saccades (le fameux "freezes"). Au lieu de paralyser l'écran pendant le calcul d'un filtre complexe ou le rendu d'une énorme liste, l'utilisateur peut continuer à intéragir de manière fluide (par exemple, continuer à taper au clavier). L'état `isPending`fourni par le hook est également parfait pour afficher un petit indicateur de chargement, montrant que l'application travail en tâche de fond.

## Gestion des formulaires avec `Formik` et `Yup`
- **Le problème :** Gérer les formulaires natifs en React demande beaucoup de code (gestion de chaque champ, des erreurs, de la soumission).
- **La solution Formik :** Gère l'état du formulaire, les événements de changement et la soumission de manière déclarative.
- **La solution Yup :** Bibliothèque de validation de schéma

### Installation
- **Formik :** `npm install formik --save`
- **Yup :** `npm install yup --save`

## Gestion d'état global avec `Zustand`
- **Concept :** Zustand est une bibliothèque de gestion d'état (state managment). Elle permet de créer un store global accessible partout dans l'application sans utiliser de `Context Provider`.
- **Intérêt de l'utilisation :**
    1. **Zéro boilerplate (code minimal obligatoire pour qu'un certain système fonctionne):** Contrairement à Redux, il n'y a pas besoin d'Actions, de Reducers ou de Types complexes.
    2. **Performance :** Les composants ne se re-rendent que si la partie précise de l'état qu'ils utilisent change (sélecteurs).
    3. **Simplicité :** C'est une simple fonction `create` qui renvoie Hook.