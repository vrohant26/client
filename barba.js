


// Initialize Barba.js and handle page transitions
barba.init({
  sync : true,
  transitions: [
    {
      name: "slider-up",
      to : {
          namespace : ['work', 'about', 'home']
      },
      async leave() {
        await leaveAnimation();
      },
      async enter() {
        await enterAnimation();
      },
     
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
        const splitText = new SplitType(".hero h1",{type : "chars"})
       
        loadAllProjects();
        lazyload();
      },
    },
    {
      namespace: "about",
      beforeEnter() {
        const splitText = new SplitType(".hero h1",{types : "chars"})
       
      },
    },
  ],
});

let tt = gsap.timeline()




leaveAnimation = async() => {


 
  tt.to(".transition", {
    scaleY : 1,
    transformOrigin : "bottom",
    duration: 1,
    ease : "expo.inOut"
  });

 


 await tt;
  
  tt.to(".transition",{
    scaleY : 0,
    transformOrigin : "top",
    ease : "expo.inOut",
    duration: 1,
  },"<1")
 

};

enterAnimation = () => {

  

  tt.from(".hero h1 .char" , {
    y : "100%",
    stagger : 0.02
    },"<=0.5")

};
