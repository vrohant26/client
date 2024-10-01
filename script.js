const getHeader = () => {
  fetch("./components/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;
      darkTheme();
    });
};
const getFooter = () => {
  fetch("./components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });
};

const darkTheme = () => {
  const toggleButton = document.getElementById("theme-toggle");
  const toggleText = toggleButton.querySelector("span"); // Select the text element

  // Function to update the status bar color based on the current theme
  const updateStatusBarColor = (theme) => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    const metaThemeColorIOS = document.querySelector(
      'meta[name="apple-mobile-web-app-status-bar-style"]'
    );

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

const lazyload = () => {
  const lazyVideos = document.querySelectorAll(".lazy-video");
  const lazyImages = document.querySelectorAll(".lazy-image");

  if ("IntersectionObserver" in window) {
    // Create a single observer for both videos and images
    let lazyMediaObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let media = entry.target;

          // Lazy load videos
          if (media.tagName === "VIDEO") {
            let videoSource = media.querySelector("source");
            videoSource.src = media.getAttribute("data-src");
            media.load();
            media.classList.add("is-loaded");
          }

          // Lazy load images
          if (media.tagName === "IMG") {
            media.src = media.getAttribute("data-src");
            media.classList.add("is-loaded");
          }

          // Stop observing the loaded media
          lazyMediaObserver.unobserve(media);
        }
      });
    });

    // Observe all lazy videos
    lazyVideos.forEach((video) => {
      lazyMediaObserver.observe(video);
    });

    // Observe all lazy images
    lazyImages.forEach((image) => {
      lazyMediaObserver.observe(image);
    });
  }
};

lazyload();
getHeader();
getFooter();
smoothScroll();
dynamicWord();

// GSAP ANIMATIONS //
