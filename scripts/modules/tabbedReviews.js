const reviewButtonContainer = document.querySelector('.review-button-container');
const reviewContainer = document.querySelector('.reviews-spotlight-section');

function changeReview() {
    // Swith selected tab
    reviewButtonContainer.querySelector('.selected').classList.remove('selected');
    this.classList.add('selected');

    // Hide currently visible review
    document.querySelector('.visible').classList.remove('visible');
    // Find the index of the button that was clicked, and use it to find the relevant review
    reviewContainer.children[Array.from(reviewButtonContainer.children).indexOf(this) + 1].classList.add('visible');
}

function addButtonEventListeners() {
    // for (const button in reviewButtonContainer.children) {
    //     button.addEventListener("click", changeReview);
    // }

    for (let i = 0; i < reviewButtonContainer.children.length; i++) {
        reviewButtonContainer.children[i].addEventListener('click', changeReview);
    }
}

addButtonEventListeners();
