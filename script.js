function rollDice() {
    const dice = document.getElementById("dice");
    const xRotation = Math.floor(Math.random() * 4) * 90;
    const yRotation = Math.floor(Math.random() * 4) * 90;
    
    dice.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
}