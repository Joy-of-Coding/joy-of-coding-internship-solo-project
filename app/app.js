// Function to handle unlocking the diary
function unlockDiary(): void {
    const button = document.querySelector('.lock-button') as HTMLButtonElement;
    const bookPages = document.querySelector('.book-pages') as HTMLElement;
  
    // Toggle unlocked state of the button
    button.classList.toggle('unlocked');
  
    // Update the content of the book based on the button state
    if (button.classList.contains('unlocked')) {
      bookPages.innerHTML = '<p>Your diary is unlocked! Write your thoughts here...</p>';
    } else {
      bookPages.innerHTML = '<p>Welcome to your digital diary. Press the lock button to start your journey.</p>';
    }
  }
  
  // Attach event listener to lock button after the DOM is loaded
  window.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.lock-button') as HTMLButtonElement;
    button.addEventListener('click', unlockDiary);
  });
  