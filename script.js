const emotions = [
  {
    message: "This is for my most beautiful and kind friend 💖",
    gif: "236edd320f07f4fb99a823ae19ef7c49.gif"
  },
  {
    message: "Even if we don't talk anymore you always be one of my best peoples i have ever met 💞",
    gif: "backup.gif"
  },
  {
    message: "I know sometimes I acted stupid, and said upsetting things, and many times hurted you , i really wanna say sorry for all that  😔",
    gif: "b710f21fee78da75eecb22b407658ead.gif"
  },
  {
    message: "Thank you always for being there in the moments when i didn't even expected anyone will be there for me 💗",
    gif: "cfcc7cc8e55482c77ff28e29facde023.gif"
  },
  {
    message: "ALways take care of your self , Kratika 💗",
    gif: "backup 3.gif"
  },
 
];

let index = 0;

window.onload = function () {
  const textBox = document.getElementById("emotionText");
  const gifBox = document.getElementById("emotionGif");
  const nextBtn = document.getElementById("nextBtn");
  const musicBtn = document.getElementById("toggleMusic");
  const bgMusic = document.getElementById("bgMusic");

  // Typing Effect
  function typeMessage(message, element) {
    element.textContent = "";
    let i = 0;
    const chars = [...message]; // Handle emojis properly
    const typing = setInterval(() => {
      element.textContent += chars[i];
      i++;
      if (i >= chars.length) clearInterval(typing);
    }, 50);
  }

  // Next button logic in coded for showing the next msg to appear
  nextBtn.addEventListener("click", () => {
    const emotion = emotions[index];
    typeMessage(emotion.message, textBox);
    gifBox.src = emotion.gif;
    index = (index + 1) % emotions.length;
  });

  // Music button logic in the #s in verb + log 
  musicBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play();
      musicBtn.textContent = "🔊 Pause Music";
    } else {
      bgMusic.pause();
      musicBtn.textContent = "🔈 Play Music";
    }
  });

  // First click triggers music autoplay
  document.body.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play();
    }
  }, { once: true });

  // Floating hearts
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 6 + "s";
    document.body.appendChild(heart);
  }
};
