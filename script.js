// Initialize Barba.js and handle page transitions
barba.init({
  transitions: [
    {
      name: "fade",
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {},
        });
      },
      enter(data) {
        gsap.from(data.next.container, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            if (data.next.namespace === "home") {
              loadFeaturedProjects();
              dynamicWord();
              playVideo();
            }
          },
        });
      },
    },
  ],
});

const getHeader = () => {
  fetch("./components/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;
      darkTheme();
    });
};

const darkTheme = () => {
  const toggleButton = document.getElementById("theme-toggle");
  const toggleText = toggleButton.querySelector("span"); // Select the text element

  // Check if user has a previously saved theme
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    toggleText.textContent = savedTheme === "dark" ? "Light Mode" : "Dark Mode"; // Set initial text
  }

  // Function to toggle theme
  toggleButton.addEventListener("click", () => {
    let currentTheme = document.documentElement.getAttribute("data-theme");

    // If current theme is dark, switch to light, otherwise to dark
    if (currentTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light"); // Save the user's theme preference
      toggleText.textContent = "Dark Mode"; // Update the text to indicate the next toggle
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      toggleText.textContent = "Light Mode"; // Update the text to indicate the next toggle
    }
  });
};

const smoothScroll = () => {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};

const dynamicWord = () => {
  const dynamicWordElement = document.getElementById("dynamic-word");

  if (!dynamicWordElement) {
    return;
  }

  const words = ["Creative", "Innovative", "Visionary"];
  let index = 0;

  function changeWord() {
    dynamicWordElement.textContent = words[index];
    index = (index + 1) % words.length;
  }

  setInterval(changeWord, 1500);
};

const playVideo = () => {
  const videoElement = document.querySelector("video");
  if (videoElement) {
    videoElement.currentTime = 0;
    videoElement.play();
  }
};

getHeader();
smoothScroll();
dynamicWord();
