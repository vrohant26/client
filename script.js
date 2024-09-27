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

  // Function to update the status bar color based on the current theme
  const updateStatusBarColor = (theme) => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    const metaThemeColorIOS = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
    
    if (theme === "dark") {
      metaThemeColor.setAttribute("content", "#191919"); // Dark theme color
      metaThemeColorIOS.setAttribute("content", "#191919"); // Dark theme color
    } else {
      metaThemeColor.setAttribute("content", "#f7f5f0"); // Light theme color
      metaThemeColorIOS.setAttribute("content", "#f7f5f0"); // Light theme color
    }
  };

  // Check if user has a previously saved theme
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    toggleText.textContent = savedTheme === "dark" ? "Light Mode" : "Dark Mode"; // Set initial text
    updateStatusBarColor(savedTheme); // Update the status bar color based on saved theme
  }

  // Function to toggle theme
  toggleButton.addEventListener("click", () => {
    let currentTheme = document.documentElement.getAttribute("data-theme");

    // If current theme is dark, switch to light, otherwise switch to dark
    if (currentTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light"); // Save the user's theme preference
      toggleText.textContent = "Dark Mode"; // Update the text to indicate the next toggle
      updateStatusBarColor("light"); // Update status bar color for light theme
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      toggleText.textContent = "Light Mode"; // Update the text to indicate the next toggle
      updateStatusBarColor("dark"); // Update status bar color for dark theme
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
