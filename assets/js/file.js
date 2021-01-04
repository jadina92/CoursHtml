function afficheTableau(t) {
    document.writeln('<p>le tableau est :</p>');
    document.writeln('<table border="1"><tr>');
    for (var i = 0; i < t.length; i++) {
      document.writeln('<td>', t[i], '</td>');
    }
    document.writeln('</tr></table>');
  }
  /* Calcule et affiche la moyenne des éléments d'un tableau */
  function afficheMoyenne(t) {
    var somme = 0;
    for (var i = 0; i < t.length; i++) {
      somme = somme + t[i];
    }
    document.writeln('<p>La moyenne vaut ', (somme / t.length), '</p>');
  }
  /* Compte et affiche le nombre d'apparitions d'un élément dans un tableau */
  function occurrences(x, t) {
    var nbreOccurences = 0;
    for (var i = 0; i < t.length; i++) {
      if (t[i] == x) {
        nbreOccurences = nbreOccurences + 1;
      }
    }
    document.writeln('<p>', x, ' apparaît ', nbreOccurences, ' fois.</p>');
  }
  /* Compte et affiche combien ont eu 10 ou plus */
  function ontEuLaMoyenne(t) {
    var nbreMoyenne = 0;
    for (var i = 0; i < t.length; i++) {
      if (t[i] >= 10) {
        nbreMoyenne = nbreMoyenne + 1;
      }
    }
    document.writeln('<p>', nbreMoyenne, ' ont eu la moyenne.</p>');
  }
  /* Indique si un élément est présent dans un tableau ou non */
  function recherche(x, t) {
    var i = 0;
    while ((i < t.length) && (t[i] != x)) {
      i = i + 1
    }
    if (t.includes(x)) {
      document.writeln('<p>', x, ' est présent.</p>');
    } else {
      document.writeln('<p>', x, ' n\'est pas présent.</p>');
    }
  }
  /* appels aux procédures définies ci-dessus */
  var notes = [5, 12, 8, 20, 10];
  notes[2] = 9;
  afficheTableau(notes);
  afficheMoyenne(notes);
  occurrences(12, notes);
  occurrences(2, notes);
  ontEuLaMoyenne(notes);
  recherche(12, notes);
  recherche(2, notes);