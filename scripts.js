// Objekt za opis projekata
const projectDescription = {
    1: {
        title: "Malerarbeiten - Wien",
        description: "Unutrašnji i vanjski radovi na bojenju stambene zgrade."
    },
    2: {
        title: "Fassadenrenovierung - Linz",
        description: "Kompletna renovacija fasade poslovne zgrade."
    },
    3: {
        title: "Fassadenrenovierung - Hreša",
        description: "Kompletna renovacija fasade poslovne zgrade."
    },
    4: {
        title: "Malerarbeiten - St. Pölten",
        description: "Unutrašnji i vanjski radovi na bojenju stambene zgrade."
    }
};

// Objekt za slike projekata
const projectDescriptions = {
    1: {
        title: "Malerarbeiten - Wien",
        description: "Unutrašnji i vanjski radovi na bojenju stambene zgrade."
    },
    2: {
        title: "Malerarbeiten - Linc",
        description: "Unutrašnji i vanjski radovi na bojenju stambene zgrade."
    },
    3: {
        title: "Malerarbeiten - Hreša",
        description: "Unutrašnji i vanjski radovi na bojenju stambene zgrade."
    }
};

const projectImages = {
    1: [
        "sprije.jpg",
        "sposle.jpg",
        "i1 (12).jpg"
    ],
    2: [
        "s3.jpg",
        "s4.jpg",
        "s2.jpg"
    ],
    3: [
        "Hreša 1.jpg",
        "Hreša 2.jpg",
        "Hreša 4.JPG"
    ]
};

let currentImageIndex = 0;

function openProjectModal(projectId) {
    const modal = document.getElementById('project-modal');
    const title = document.getElementById('project-title');
    const description = document.getElementById('project-description');
    const imagesContainer = document.getElementById('project-images');

    currentImageIndex = 0;

    title.textContent = projectDescriptions[projectId].title;
    description.textContent = projectDescriptions[projectId].description;
    imagesContainer.innerHTML = '';

    projectImages[projectId].forEach((imgSrc, index) => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = `Projekt ${projectId} Bild ${index + 1}`;
        img.style.display = 'none';
        imagesContainer.appendChild(img);
    });

    modal.style.display = 'flex';
    showImage(currentImageIndex);
}

function closeProjectModal() {
    document.getElementById('project-modal').style.display = 'none';
}

function changeImage(direction) {
    const images = document.querySelectorAll('#project-images img');
    if (images.length === 0) return;

    currentImageIndex += direction;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    showImage(currentImageIndex);
}

function showImage(index) {
    const images = document.querySelectorAll('#project-images img');
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('project-modal')) {
        closeProjectModal();
    }
});

function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
}

// Close menu when clicking outside
window.addEventListener('click', function(event) {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (!menuToggle.contains(event.target) && !navList.contains(event.target)) {
        navList.classList.remove('active');
    }
});
let currentSlideIndex = 0;

function openProjectModal() {
    document.getElementById("projectModal").style.display = "block";
    showSlide(currentSlideIndex);
}

function closeProjectModal() {
    document.getElementById("projectModal").style.display = "none";
}

function changeSlide(n) {
    currentSlideIndex += n;
    showSlide(currentSlideIndex);
}

function showSlide(n) {
    let slides = document.querySelectorAll(".modal-slides img");

    if (n >= slides.length) {
        currentSlideIndex = 0;
    } else if (n < 0) {
        currentSlideIndex = slides.length - 1;
    }

    // Sakrij sve slike
    slides.forEach(slide => (slide.style.display = "none"));

    // Prikaži trenutnu sliku
    slides[currentSlideIndex].style.display = "block";
}
