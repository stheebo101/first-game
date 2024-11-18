const game = document.getElementById("game");
const player = document.getElementById("player");
const object = document.getElementById("object");
const scoreDisplay = document.getElementById("score");

let score = 0;
let playerPosition = 180;
let objectPosition = { x: Math.random() * 370, y: 0 };

// Move the player with arrow keys
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && playerPosition > 0) {
    playerPosition -= 10;
  } else if (e.key === "ArrowRight" && playerPosition < 360) {
    playerPosition += 10;
  }
  player.style.left = `${playerPosition}px`;
});

// Object falling logic
function dropObject() {
  objectPosition.y += 5;
  if (objectPosition.y > 600) {
    // Reset object position if it falls off the screen
    objectPosition.y = 0;
    objectPosition.x = Math.random() * 370;
  }
  // Check for collision
  if (
    objectPosition.y > 550 &&
    objectPosition.x > playerPosition - 30 &&
    objectPosition.x < playerPosition + 40
  ) {
    score++;
    objectPosition.y = 0;
    objectPosition.x = Math.random() * 370;
  }
  // Update positions
  object.style.top = `${objectPosition.y}px`;
  object.style.left = `${objectPosition.x}px`;
  scoreDisplay.textContent = `Score: ${score}`;
  requestAnimationFrame(dropObject);
}

// Start the game
dropObject();
