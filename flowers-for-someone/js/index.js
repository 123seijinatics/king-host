const title = document.querySelector('.title');
const text = `Hi my ange, I have something to tell you`.split(' ');

// Apply styles to center and maximize the text space
title.style.position = 'absolute';
title.style.top = '50%'; // Center vertically
title.style.left = '50%'; // Center horizontally
title.style.transform = 'translate(-50%, -50%)'; // Adjust for centering
title.style.display = 'flex';
title.style.flexWrap = 'wrap';
title.style.justifyContent = 'center'; // Center horizontally within the container
title.style.alignItems = 'center'; // Center vertically within the container
title.style.textAlign = 'center';
title.style.gap = '0.5rem';
title.style.width = '90%'; // Ensure the text container takes up most of the viewport width
title.style.maxWidth = '1200px'; // Limit the maximum width for readability
title.style.padding = '1rem'; // Add padding for better spacing

// Dynamically adjust font size based on viewport width
const fontSize = Math.min(window.innerWidth * 0.05, 40); // Scale font size, max 40px
title.style.fontSize = `${fontSize}px`;
title.style.lineHeight = '1.5'; // Improve readability with line spacing

// Populate the title with spans for each word and add animation
text.forEach((word, index) => {
  const span = document.createElement('span');
  span.textContent = word;
  span.style.opacity = '0'; // Initially hide the word
  span.style.visibility = 'hidden'; // Make the word invisible initially
  span.style.transform = 'translateY(20px) scale(0.9)'; // Start with a slight downward position and smaller size
  span.style.transition = 'opacity 0.6s ease, transform 0.6s ease, visibility 0.6s ease'; // Smooth transitions
  span.style.transitionDelay = `${index * 0.5}s`; // Delay based on word position
  title.appendChild(span);
});

// Add animation to show words one by one
setTimeout(() => {
  const spans = document.querySelectorAll('.title span');
  spans.forEach((span) => {
    span.style.opacity = '1'; // Make the word visible
    span.style.visibility = 'visible'; // Ensure the word is visible
    span.style.transform = 'translateY(0) scale(1)'; // Move to its original position and size
    span.style.color = '#FFC0CB'; // Change the color to pink for a glowing effect
  });
}, 100);

const flowerContainer = document.createElement('div');
flowerContainer.className = 'flower';
flowerContainer.innerHTML = `
  <div class="flower">
    <!-- Existing flower structure -->
    <div class="bee">
      <div class="bee__body"></div>
      <div class="bee__wing bee__wing--left"></div>
      <div class="bee__wing bee__wing--right"></div>
    </div>
  </div>
`;
document.body.appendChild(flowerContainer);

const style = document.createElement('style');
style.innerHTML = `
.bee {
  position: absolute;
  top: 50%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%); /* Adjust for centering */
  width: 3vmin;
  height: 2vmin;
  background-color: yellow;
  border-radius: 50%;
  box-shadow: inset 0 0 0.3vmin black, 0 0 0.3vmin rgba(0, 0, 0, 0.5);
  z-index: 20;
  animation: fly-around 6s ease-in-out infinite;
}

.bee__body {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, yellow 33%, black 33%, black 66%, yellow 66%);
  border-radius: 50%;
}

.bee__wing {
  position: absolute;
  width: 2vmin;
  height: 1vmin;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  animation: wing-flap 0.3s ease-in-out infinite;
}

.bee__wing--left {
  top: -0.5vmin;
  left: 0;
  transform: rotate(-30deg);
}

.bee__wing--right {
  top: -0.5vmin;
  right: 0;
  transform: rotate(30deg);
}

@keyframes wing-flap {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

@keyframes fly-around {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(8vmin, -4vmin) rotate(45deg);
  }
  50% {
    transform: translate(-8vmin, -6vmin) rotate(90deg);
  }
  75% {
    transform: translate(-4vmin, 4vmin) rotate(135deg);
  }
  100% {
    transform: translate(0, 0) rotate(180deg);
  }
}
`;
document.head.appendChild(style);