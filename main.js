let counter=0;
let buttonmoins=document.querySelector('.fa-minus-circle');
let buttonplus=document.querySelectorAll(".fa-plus-circle");
let affichage=document.querySelector('.counter');
let subtotal=document.querySelector('.subtotal');
let total=document.querySelector('.Total');
let panier=Array.from(document.querySelectorAll(".fa-plus-circle"))

// Fonction pour mettre à jour le sous-total
function updateSubtotalAndTotal() {
  let calculatedSubtotal = 0;
  let total = 0;

  // Parcours chaque ensemble d'éléments pour calculer le sous-total individuel
  document.querySelectorAll('.container').forEach((container, index) => {
    const article = panier[index];
    const price = parseFloat(container.querySelector('.incr').getAttribute('data-price'));
    const counterElement = container.querySelector('.counter'); // Sélectionne l'élément counter spécifique à cet article

    if (article && article.quantity > 0) {
      calculatedSubtotal += price * article.quantity;
      total += price * article.quantity;
    // Mets à jour l'affichage du compteur spécifique à cet article
    counterElement.textContent = `Nombre d'article : ${article.quantity}`;
    } else {
      // Remet le compteur à zéro si la quantité est nulle
      counterElement.textContent = `Nombre d'article : 0`;
    }
  });

  // Mets à jour l'affichage du sous-total
  const subtotalElement = document.querySelector('.subtotal');
  subtotalElement.textContent = `Subtotal : ${calculatedSubtotal.toFixed(2)}`;

  // Mets à jour l'affichage du total
  const totalElement = document.querySelector('.Total');
  totalElement.textContent = `Total : ${total.toFixed(2)}`;
}

// Écouteur pour le clic sur les boutons d'incrémentation
document.querySelectorAll('.incr').forEach((button, index) => {
  button.addEventListener('click', () => {
    incrementerArticle(button, index);
  });
});


// Fonction pour incrémenter la quantité d'un article
function incrementerArticle(button, index) {
  const counterElement = document.querySelector(`#counter${index + 1}`);
  const article = panier[index];

  if (article) {
    article.quantity = (article.quantity || 0) + 1;
    counterElement.textContent = `Nombre d'article : ${article.quantity}`;

    // Récupère le prix depuis l'attribut data-price du bouton cliqué
    const price = parseFloat(button.getAttribute('data-price'));

    // Mets à jour le sous-total
    updateSubtotalAndTotal();
  }
}

// Écouteur pour le clic sur les boutons de decrémentation
document.querySelectorAll('.decr').forEach((button, index) => {
  button.addEventListener('click', () => {
    decrementerArticle(button, index);
  });
});

// Fonction pour decrémenter la quantité d'un article
function decrementerArticle(button, index) {
  const counterElement = document.querySelector(`#counter${index + 1}`);
  const article = panier[index];

  if (article) {
    if (article.quantity>0) {
      article.quantity = (article.quantity || 0) - 1;
    }
    counterElement.textContent = `Nombre d'article : ${article.quantity}`;

    // Récupère le prix depuis l'attribut data-price du bouton cliqué
    const price = parseFloat(button.getAttribute('data-price'));

    // Mets à jour le sous-total
    updateSubtotalAndTotal();
  }
}

// Écouteur pour le clic sur les boutons de suppression
document.querySelectorAll('.trash').forEach((button, index) => {
  button.addEventListener('click', () => {
    supprimerArticle(index);
  });
});

function supprimerArticle(index) {
  const counterElement = document.querySelector(`#counter${index + 1}`);
  const article = panier[index];
  if (article) {
    if (article.quantity >0){
      article.quantity = 0; // Remet la quantité à zéro
    }
    counterElement.textContent = `Nombre d'article : ${article.quantity}`;

    // Mets à jour le sous-total
    updateSubtotalAndTotal();
  }
}

// Écouteur pour le clic sur les boutons "heart"
document.querySelectorAll('.heart').forEach((button, index) => {
  button.addEventListener('click', () => {
    toggleHeartColor(button);
  });
});

// Fonction pour basculer la couleur de la classe "heart"
function toggleHeartColor(button) {
  if (button.classList.contains('red')) {
    button.classList.remove('red');
    button.style.color = 'black'; // Change la couleur en noir
  } else {
    button.classList.add('red');
    button.style.color = 'red'; // Change la couleur en rouge
  }
}