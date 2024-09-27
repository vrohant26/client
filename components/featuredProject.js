const projects = [
  {
    imgSrc:
      "https://lh3.google.com/u/0/d/15ouEgBRCaSs2Mf1p3S4T4fjGEru6PhXH=w2000-h1740-iv1",
    name: "Project 1",
  },
  {
    imgSrc:
      "https://lh3.google.com/u/0/d/15FTTIlMKGVnQnznQrVAMqGuBZjbFpUXa=w1920-h927-iv1",
    name: "Project 2",
  },
  {
    imgSrc:
      "https://lh3.google.com/u/0/d/1_OsQ4O97-l119zXbQWUJCuKecaBNJl8_=w1172-h907-iv1",
    name: "Project 3",
  },
  {
    imgSrc:
      "https://lh3.google.com/u/0/d/1x6ONgTRY4jaouANOzaYqBFqTGV-lQXV9=w1920-h927-iv1",
    name: "Project 4",
  },
];

function loadFeaturedProjects() {
  // Get the work-set container
  const workSetContainer = document.getElementById("work-set");

  if (!workSetContainer) {
    return;
  }

  // Build the HTML string
  let projectHTML = "";

  projects.forEach((project) => {
    projectHTML += `
        <div class="set">
        <img src="${project.imgSrc}" alt="${project.name}">
        <div class="work-details">
        <h6>${project.name}</h6>
        </div>
        </div>
        `;
  });

  // Add the generated HTML to the container's innerHTML
  workSetContainer.innerHTML = projectHTML;
}

loadFeaturedProjects();
