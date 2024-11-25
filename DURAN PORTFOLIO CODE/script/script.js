// Personalized greeting based on time of day
window.onload = function() {
  const now = new Date();
  const hours = now.getHours();
  let greeting;

  if (hours < 12) {
      greeting = "Good Morning!";
  } else if (hours < 18) {
      greeting = "Good Afternoon!";
  } else {
      greeting = "Good Evening!";
  }

  const greetingMessage = document.createElement("h2");
  greetingMessage.innerText = greeting;
  greetingMessage.style.color = "white";
  greetingMessage.style.marginTop = "10px";

  const header = document.querySelector(".portfolio-header");
  header.appendChild(greetingMessage);
};

// Light/Dark theme toggle
const toggleTheme = () => {
  const body = document.body;
  const isDark = body.classList.toggle('light-theme');
  const themeText = document.getElementById('themeToggleText');
  themeText.innerText = isDark ? "Switch to Dark Mode" : "Switch to Light Mode";
};

document.querySelector('.menu-icon').addEventListener('click', toggleTheme);

// Simple hover animation for profile image
const profileImage = document.querySelector('.profile-image img');
profileImage.addEventListener('mouseover', () => {
  profileImage.style.transform = 'scale(1.1)';
  profileImage.style.transition = 'transform 0.3s';
});
profileImage.addEventListener('mouseout', () => {
  profileImage.style.transform = 'scale(1)';
});

// Typing effect for title
const titleText = "MY PORTFOLIO";
let index = 0;

function typeWriter() {
  if (index < titleText.length) {
      document.querySelector('.title-section h1').textContent += titleText.charAt(index);
      index++;
      setTimeout(typeWriter, 150);
  }
}
document.addEventListener('DOMContentLoaded', typeWriter);
