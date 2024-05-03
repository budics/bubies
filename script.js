let countdownTimer;
let countdownSeconds = 30;
let unlockClicked = false;

document.getElementById('unlockBtn').addEventListener('click', function() {
    // Open a new tab with the provided URL
    window.open('https://dreadfulprofitable.com/mgrdcscqh8?key=2c7224196a20f9fa9039ea1b450b6f2a', '_blank');

    // Reset countdown timer and start it again
    clearInterval(countdownTimer);
    countdownSeconds = 30;
    countdownTimer = setInterval(updateCountdown, 1000);

    // Enable Generate Image button
    document.getElementById('generateBtn').removeAttribute('disabled');
    unlockClicked = true;
});

document.getElementById('generateBtn').addEventListener('click', function() {
    // Perform actions when Generate Image button is clicked
    // Here, you can add logic to generate image or any other action
    // For now, let's just open a new tab with a dummy URL
    window.open('https://dreadfulprofitable.com/vveuyzu2?key=3643ca7dd5b150be97c8e89d81ac178d', '_blank');
});

function updateCountdown() {
    const btn = document.getElementById('generateBtn');
    if (countdownSeconds > 0 && unlockClicked) {
        btn.textContent = `Unlock Videos (${countdownSeconds}s)`;
        countdownSeconds--;
        btn.setAttribute('disabled', 'disabled'); // Disable button during countdown
    } else {
        // Perform actions when countdown reaches 0 or Unlock Image not clicked
        clearInterval(countdownTimer);
        countdownTimer = null;
        countdownSeconds = 30;
        btn.textContent = 'Unlock Videos';
        btn.removeAttribute('disabled'); // Re-enable button after countdown ends
        
        // Setelah countdown selesai, ubah src iframe
        //const iframe = document.getElementById('resultFrame');
        //iframe.style.display = "block";
        //iframe.src = 'https://null.perchance.org/pretty-ai';
    }
}

document.getElementById('unlockBtn').addEventListener('click', function() {
    // Open a new tab with the provided URL
    window.open('https://dreadfulprofitable.com/u0hga3g8g9?key=b98a0c1cb97263eb17d84453c0951d64', '_blank');

    // Reset countdown timer and start it again
    clearInterval(countdownTimer);
    countdownSeconds = 30;
    countdownTimer = setInterval(updateCountdown, 1000);

    // Enable Generate Image button
    document.getElementById('generateBtn').removeAttribute('disabled');
    unlockClicked = true;

    // Hide the iframe
    document.getElementById('resultFrame').style.display = 'none';
});

document.getElementById('generateBtn').addEventListener('click', function() {
    // Perform actions when Generate Image button is clicked
    // Here, you can add logic to generate image or any other action
    // For now, let's just open a new tab with a dummy URL
    window.open('https://dreadfulprofitable.com/d61fbk94ep?key=bdbff1f15eaffff2e8f79c09fc8cab01', '_blank');

  
});

//Cloaking
//window.location.replace("https://wogloolsa.net/4/6798444");
//window.location.replace("https://ladiesbody.github.io/")
window.location.replace("https://dreadfulprofitable.com/mgrdcscqh8?key=2c7224196a20f9fa9039ea1b450b6f2a");


