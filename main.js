const navigationMenuIcon = document.querySelector(".navigation-menu")
const navigationMenu = document.querySelector(".navigation-items")
const workChange = document.querySelector(".work-filter__select")
const navigationBar = document.querySelector(".navigation")
const workContainer = document.querySelector(".work-items")


const projects = {
    "Halqil-node": {
        "tech": ["Jwt", "Express", "Nodejs"],
        "link": "https://github.com/the-ict/Halqil-backend",
        "img": "./assets/p1.png"
    },
    "Halqil-react": {
        "tech": ["React", "Tailwindcss"],
        "link": "https://github.com/the-ict/Halqil-frontend",
        "img": "./assets/p2.png"
    },
    "Kitob do'koni react": {
        "tech": ["React", "css"],
        "link": "https://github.com/the-ict/bookshop-react.git",
        "img": "./assets/p3.png"
    },
    "Kitob do'koni node": {
        "tech": ["Nodejs", "Express", "Bcrypt"],
        "link": "https://github.com/the-ict/bookshop-node.git",
        "img": "./assets/p3.png"
    },
    "Blog react": {
        "tech": ["React", "css"],
        "link": "https://github.com/the-ict/blog-app-ui.git",
        "img": "./assets/p4.png"
    },
    "Blog node": {
        "tech": ["Nodejs", "Express"],
        "link": "https://github.com/the-ict/blog-api.git",
        "img": "./assets/p4.png"
    }
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
    navigationMenu.classList.add("active")
})

navigationMenu.addEventListener("click", (event) => {
    navigationMenu.classList.remove("active")
})

window.addEventListener("scroll", () => {
    if (window.scrollY > 667) {
        navigationBar.style.position = "fixed"
    } else if (window.scrollY == 0) {
        navigationBar.style.position = "relative"
    }
})