const projects = [
  {
    videoSrc:
      "https://spfiles.sfo3.cdn.digitaloceanspaces.com/sfweb/nikekids/SF_WORK_NIKE%20KIDS_E.mp4#t=1",
    name: "Project 1",
  },
  {
    videoSrc:
      "https://spfiles.sfo3.cdn.digitaloceanspaces.com/sfweb/arctic/SF_WORK_Adventures_C.mp4#t=1",
    name: "Project 2",
  },
  {
    videoSrc:
      "https://spfiles.sfo3.cdn.digitaloceanspaces.com/sfweb/nikekids/SF_WORK_NIKE%20KIDS_I.mp4#t=1",
    name: "Project 3",
  },
  {
    videoSrc:
      "https://spfiles.sfo3.cdn.digitaloceanspaces.com/sfweb/nikekids/SF_WORK_NIKE%20KIDS_A.mp4#t=1",
    name: "Project 4",
  },
];

function loadFeaturedProjects() {
  const workSetContainer = document.getElementById("work-set");

  if (!workSetContainer) {
    return;
  }

  let projectHTML = "";

  projects.forEach((project) => {
    projectHTML += `
        <div class="set">
        <video autoplay loop muted playsinline src="${project.videoSrc}" alt="${project.name}"></video>
        <div class="work-details">
        <h6>${project.name}</h6>
        </div>
        </div>
        `;
  });

  workSetContainer.innerHTML = projectHTML;
}

loadFeaturedProjects();
