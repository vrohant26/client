const projects = [
  {
    id: 1,
    videoSrc:
      "https://spfiles.sfo3.cdn.digitaloceanspaces.com/sfweb/nikekids/SF_WORK_NIKE%20KIDS_E.mp4#t=1",
    name: "Project 1",
    imgSrc:
      "https://lh3.google.com/u/0/d/15ouEgBRCaSs2Mf1p3S4T4fjGEru6PhXH=w1920-h927-iv1",
    featured: true,
  },
  {
    id: 2,
    videoSrc:
      "https://spfiles.sfo3.cdn.digitaloceanspaces.com/sfweb/arctic/SF_WORK_Adventures_C.mp4#t=1",
    imgSrc:
      "https://lh3.google.com/u/0/d/15FTTIlMKGVnQnznQrVAMqGuBZjbFpUXa=w1397-h927-iv1",
    name: "Project 2",
    featured: true,
  },
  {
    id: 3,
    videoSrc:
      "https://spfiles.sfo3.cdn.digitaloceanspaces.com/sfweb/nikekids/SF_WORK_NIKE%20KIDS_I.mp4#t=1",
    imgSrc:
      "https://lh3.google.com/u/0/d/1_OsQ4O97-l119zXbQWUJCuKecaBNJl8_=w1397-h927-iv1",
    name: "Project 3",
    featured: true,
  },
  {
    id: 4,
    videoSrc:
      "https://spfiles.sfo3.cdn.digitaloceanspaces.com/sfweb/nikekids/SF_WORK_NIKE%20KIDS_A.mp4#t=1",
    imgSrc: "../assets/images/placeholder-image-368x246.png",
    name: "Project 4",
    featured: true,
  },
  {
    id: 5,
    videoSrc:
      "https://spfiles.sfo3.cdn.digitaloceanspaces.com/sfweb/nikekids/SF_WORK_NIKE%20KIDS_A.mp4",
    imgSrc: "../assets/images/placeholder-image-368x246.png",
    name: "Project 5",
    featured: true,
  },
  {
    id: 6,
    videoSrc:
      "https://pub-4a3a88101a3441359add32df59ec8ed7.r2.dev/WmUtR3JFbU5zZjJzSGdtSl9Ib21lLURlc2t0b3AtVy1Db252ZXJ0ZWQt.mp4",
    imgSrc: "../assets/images/placeholder-image-368x246.png",
    name: "Project 6",
    featured: true,
  },
  {
    id: 7,
    videoSrc:
      "https://pub-4a3a88101a3441359add32df59ec8ed7.r2.dev/WmUtR3JFbU5zZjJzSGdtSl9Ib21lLURlc2t0b3AtVy1Db252ZXJ0ZWQt.mp4",
    imgSrc: "../assets/images/placeholder-image-368x246.png",
    name: "Project 6",
    featured: false,
  },
  {
    id: 8,
    imgSrc: "../assets/images/placeholder-image-368x246.png",
    videoSrc:
      "https://pub-4a3a88101a3441359add32df59ec8ed7.r2.dev/WmUtR3JFbU5zZjJzSGdtSl9Ib21lLURlc2t0b3AtVy1Db252ZXJ0ZWQt.mp4",
    name: "Project 6",
    featured: false,
  },
  {
    id: 9,
    videoSrc:
      "https://pub-4a3a88101a3441359add32df59ec8ed7.r2.dev/WmUtR3JFbU5zZjJzSGdtSl9Ib21lLURlc2t0b3AtVy1Db252ZXJ0ZWQt.mp4",
    imgSrc: "../assets/images/placeholder-image-368x246.png",
    name: "Project 6",
    featured: false,
  },
  {
    id: 10,
    videoSrc:
      "https://pub-4a3a88101a3441359add32df59ec8ed7.r2.dev/WmUtR3JFbU5zZjJzSGdtSl9Ib21lLURlc2t0b3AtVy1Db252ZXJ0ZWQt.mp4",
    imgSrc: "../assets/images/placeholder-image-368x246.png",
    name: "Project 6",
    featured: false,
  },
];

function loadFeaturedProjects() {
  const workSetContainer = document.getElementById("work-set");

  if (!workSetContainer) {
    return;
  }

  let projectHTML = "";

  const featuredProjects = projects.filter((project) => project.featured);

  featuredProjects.forEach((project) => {
    projectHTML += `
       <div class="set">
  <video class="lazy-video" autoplay muted loop playsinline width="100%" height="auto" data-src="${project.videoSrc}" alt="${project.name}">
    <source type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="work-details">
    <h6>${project.name}</h6>
  </div>
</div>  `;
  });

  workSetContainer.innerHTML = projectHTML;
}

function loadAllProjects() {
  const projectsContainer = document.getElementById("allProjects");

  if (!projectsContainer) {
    return;
  }

  let allProjectHTML = "";

  projects.forEach((project) => {
    allProjectHTML += `<div class="project">
          <img loading="lazy" src="${project.imgSrc}" alt="${project.name}" />
          <h6>${project.name}</h6>
        </div>`;
  });

  projectsContainer.innerHTML = allProjectHTML;
}
