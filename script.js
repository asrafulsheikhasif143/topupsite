function showTopUpForm(game) {
  const formTitle = document.getElementById('form-title');
  const topupForm = document.getElementById('topup-form');
  topupForm.classList.remove('hidden');
  
  if (game === 'game1') {
    formTitle.textContent = 'Top-Up for Game 1';
    // Dynamically generate form fields for game 1 top-up
  } else if (game === 'game2') {
    formTitle.textContent = 'Top-Up for Game 2';
    // Dynamically generate form fields for game 2 top-up
  }
  // Add more conditions for other games
}