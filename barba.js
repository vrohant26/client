// Initialize Barba.js and handle page transitions
  barba.init({
    transitions: [
      {
        name: "fade",
        leave(data) {
          return leaveAnimation(data.current.container)
        },
        enter(data) {
          return enterAnimation(data.next.container, data.next.namespace)
        },
      },
    ],
    views: [
      {
        namespace: "home", 
        beforeEnter() {
       
          loadFeaturedProjects();  
          dynamicWord();  
          playVideo();  
        },
      
        
      }    
    ]
  });

  leaveAnimation = (container)=>{
    gsap.to(container, {
      opacity: 0,
      duration: 0.5,
      
    });
  }

  enterAnimation = (container, namespace)=>{
    gsap.from(container, {
      opacity: 0,
      duration: 0.5,
     
    });
  }