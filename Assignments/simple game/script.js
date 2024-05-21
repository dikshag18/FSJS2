
document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('player');
    const balloon = document.getElementById('balloon');
    const gameContainer = document.querySelector('.game-container');
  
    let playerPos = 175; // Initial position of the player
    let balloonPos = { top: 0, left: 185 }; // Initial position of the balloon
    let score = 0;
    let gameInterval;
  
    // Handle player movement
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft' && playerPos > 0) {
        playerPos -= 10;
      } else if (e.key === 'ArrowRight' && playerPos < 350) {
        playerPos += 10;
      }
      player.style.left = `${playerPos}px`;
    });
  
    // Function to start the game
    function startGame() {
      gameInterval = setInterval(() => {
        // Move the balloon down
        balloonPos.top += 5;
        if (balloonPos.top > 570) {
          balloonPos.top = 0;
          balloonPos.left = Math.random() * 370;
        }
  
        // Check for collision
        if (
          balloonPos.top > 520 &&
          balloonPos.left > playerPos - 30 &&
          balloonPos.left < playerPos + 50
        ) {
          score++;
          balloonPos.top = 0;
          balloonPos.left = Math.random() * 370;
          console.log(`Score: ${score}`);
        }
  
        // Update balloon position
        balloon.style.top = `${balloonPos.top}px`;
        balloon.style.left = `${balloonPos.left}px`;
      }, 100);
    }
  
    // Start the game
    startGame();
  });
  