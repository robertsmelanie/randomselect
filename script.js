function spinWheel() {
    const input = document.getElementById('itemInput').value;
    const items = input.split(',').map(item => item.trim()).filter(Boolean);

    if (items.length < 2) {
        alert("Please enter at least two items.");
        return;
    }

    const wheel = document.getElementById('wheel');
    const result = document.getElementById('result');

    // Randomly select one item
    const selected = items[Math.floor(Math.random() * items.length)];

    // Simulate spinning
    const spins = Math.floor(Math.random() * 4) + 4; // 4 to 7 spins
    const degrees = spins * 360 + Math.floor(Math.random() * 360);

    wheel.style.transform = `rotate(${degrees}deg)`;

    // Delay result until spin ends
    setTimeout(() => {
        result.textContent = `🎉 Selected: ${selected}`;
    }, 3000);
}