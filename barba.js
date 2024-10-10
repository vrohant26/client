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
        leaveAnimation(data, done);
        await delay(1100);
        done();
      },

      async afterLeave(){
        ScrollTrigger.getAll().forEach( t => t.kill(false) )
        ScrollTrigger.refresh(true);
      },
     
      async enter(data) {
        window.scrollTo(0, 0);
         enterAnimation(data); 
      },
    
      async once(data) {
        // preloader();
        enterAnimation(data);
        
      },
    },
  ],

  views: [
    
    {
      namespace: "home",
      beforeEnter() {
        
        loadFeaturedProjects();
        dynamicWord();
        // cursor();
        lazyload();
      },
     
    },
    {
      namespace: "work",
      beforeEnter() {
        loadAllProjects();
        lazyload();
      },
    },
    {
      namespace: "about",
      beforeEnter() {      
        parallax();
        textAnimation();
      },
    },
    
  ],
  
});



document.addEventListener("DOMContentLoaded", function() {
  const currentNamespace = document.querySelector('[data-barba="container"]').dataset.barbaNamespace;
  if (currentNamespace === 'about') {
    parallax();
    textAnimation();
  }
});


let tt = gsap.timeline();

leaveAnimation = (data) => {
  tt.to(data.current.container, {
    y: "-40%",
    opacity: 0,
    duration: 2.5,
    delay: 0.1,
    ease: "power3.inOut",
  }).to(
    ".transition",
    {
      scaleY: 1.2,
      transformOrigin: "bottom",
      duration: 1.2,
      ease: "power3.inOut",
    },
    "-=2.2"
  ).to(
    ".transition",
    {
      scaleY: 0,
      transformOrigin: "top",
      ease: "power3.inOut",
      duration: 1,
    },
    "-=1.4"
  );
};

enterAnimation = (data) => {
  gsap.from(data.next.container, {
    y: "10%",
    opacity: 1,
    duration: 1.5,
    ease: "power2.out",
  });
};




