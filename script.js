  // Quand la page HTML est complètement chargée, exécute le code à l'intérieur de cette fonction
document.addEventListener("DOMContentLoaded", () => {
// Prandre id "quiz-form"  dans le HTML et le stocke dans une variable const a "qcm"
    const qcm = document.getElementById("quiz-form");
// Ajoute un événement sur le qcm quand le bouton "submit" est cliqué
    qcm.addEventListener("submit", (event) => {
// Empêche le comportement par défaut du qcm 
        event.preventDefault();
// Réinitialise les styles avant de procéder à la vérification des réponses
        styles();
// Parcourt toutes les questions du qcm     
        Array.from(qcm.querySelectorAll('.question-item')).forEach((question, index) => {
// Récupère la réponse sélectionnée pour chaque question
            const selecQ = question.querySelector('.answer:checked');
// Si la réponse est sélectionnée, appelle couleurChange pour changer la couleur du texte en qcm
            if (selecQ) couleurChange(question,  verif(index + 1, selecQ.value) ? "green" : "red");
        });
     });
//fonction nommée styles
    const styles = () => {
// Parcourt tous les éléments div à l'intérieur des questions et réinitialise leur couleur du texte
        Array.from(qcm.querySelectorAll('.question-item div')).forEach(element => element.style.color = "");
    };
// Définit une fonction verif qui vérifie si la réponse sélectionnée est correcte en utilisant un tableau 
    const verif = (questionNum, selecValue) => ({ 1: "true", 2: "true", 3: "true" }[questionNum] === selecValue);
 // Définit une fonction couleurChange qui change la couleur du texte de la question et des réponses.
    const couleurChange = (question, color) => {
    // Parcourt tous les éléments div, label et code à l'intérieur de la question et change leur couleur du texte.
        question.querySelectorAll('.question-item div, .answer-item label, .answer-item code').forEach(element => element.style.color = color);
    };
// Supprime l'élément avec l'id "alert"
    const alertElement = document.getElementById("alert");
    alertElement.remove();
});