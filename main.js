const navigationMenuIcon = document.querySelector(".navigation-menu")
const navigationMenu = document.querySelector(".navigation-items")
const navigationBar = document.querySelector(".navigation")
const workContainer = document.querySelector(".work-items")
const workChange = document.querySelector(".work-filter__select")


const projects = {
    "Halqil-backend": {
        "tech": ["Jwt", "Express", "Nodejs"],
        "link": "https://github.com/the-ict/Halqil-backend",
        "img": "./assets/p1.png"
    },
    "Halqil-frontend": {
        "tech": ["React", "Tailwindcss"],
        "link": "https://github.com/the-ict/Halqil-frontend",
        "img": "./assets/p2.png"
    },
};


function displayProjects(filterTech) {
    workContainer.innerHTML = '';

    Object.keys(projects).map(project => {
        const projectTech = projects[project]["tech"];
        if (filterTech === 'all' || projectTech.includes(filterTech)) {
            const workItem = document.createElement("div");
            const workLink = document.createElement("a");
            const workTitle = document.createElement("h4");
            const workImg = document.createElement("img");

            workItem.classList.add("work-item");
            workLink.href = projects[project]["link"];
            workLink.target = "_blank";
            workImg.src = projects[project]["img"];
            workTitle.textContent = project;

            workLink.appendChild(workImg);
            workItem.appendChild(workLink);
            workItem.appendChild(workTitle);
            workContainer.appendChild(workItem);
        }
    });
}

displayProjects('all');

workChange.addEventListener("change", (event) => {
    const selectedTech = event.target.value; 
    displayProjects(selectedTech);
});


navigationMenuIcon.addEventListener("click", (event) => {
    navigationMenu.classList.toggle("active")
})

navigationMenu.addEventListener("click", (event) => {
    navigationMenu.classList.toggle("active")
})

window.addEventListener("scroll", () => {
    if (window.scrollY > 667) {
        navigationBar.style.position = "fixed"
    } else if (window.scrollY == 0) {
        navigationBar.style.position = "relative"
    }
})