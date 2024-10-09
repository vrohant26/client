function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

// Initialize Barba.js and handle page transitions
barba.init({
  sync: true,
  transitions: [
    {
      name: "slider-up",
      to: {
        namespace: ["work", "about", "home"],
      },
      async leave(data) {
        const done = this.async();
        leaveAnimation(data);
        await delay(1200);
        done();
      },
      async enter(data) {
        enterAnimation(data);
      },
      // async once(data) {
      //   preloader();
      //   enterAnimation(data);
      // },
    },
  ],

  views: [
    {
      namespace: "home",
      beforeEnter() {
        loadFeaturedProjects();
        dynamicWord();
        cursor();
        lazyload();
      },
    },
    {
      namespace: "work",
      beforeEnter() {
        const splitText = new SplitType(".hero h1", { types: "chars" });
        loadAllProjects();
        lazyload();
      },
    },
    {
      namespace: "about",
      beforeEnter() {
        const splitText = new SplitType(".hero h1", { types: "chars" });
      },
    },
  ],
});

let tt = gsap.timeline();

leaveAnimation = (data) => {
  tt.to(data.current.container, {
    y: "-40%",
    opacity: 0,
    duration: 2.5,
    delay: 0.1,
    ease: "power3.inOut",
  });

  tt.to(
    ".transition",
    {
      scaleY: 1.2,
      transformOrigin: "bottom",
      duration: 1.2,
      ease: "power3.inOut",
    },
    "-=2.2"
  );
  tt.to(
    ".transition",
    {
      scaleY: 0,
      transformOrigin: "top",
      ease: "power3.inOut",
      duration: 0.8,
    },
    "-=1.2"
  );
};

enterAnimation = (data) => {
  gsap.from(data.next.container, {
    y: "10%",
    opacity: 1,
    duration: 1,
    ease: "power3.inOut",
  });
};
