document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});

function renderProjects() {
    fetch('projects.json')
        .then(response => response.json())
        .then(projects => {
            const container = document.querySelector('.projects-container');

            projects.forEach((project) => {
                const projectDev = document.createElement('div');
                projectDev.className = 'project';

                const projectLinks = project.links.map((link) => {
                    const classList = ['project-link'];
                    if (!link.href) {
                        classList.push("disabled");
                    }

                    return `<a class="${classList.join(' ')}" target="_blank" href="${link.href}">${link.title}</a>`;
                }).join('\n');

                projectDev.innerHTML = `
                    <img class="project-image" src="${project.images[0]}">
                    <h3 class="project-title">${project.title}</h3>
                    <div class="project-links">
                        ${projectLinks}
                    </div>
                    <p class="project-text truncated">${project.description}</p>
                    <button class="read-more-btn">Read More</button>
                `;

                container.appendChild(projectDev);
            });

            initializeModal();
            initializeReadMoreListners();
        })
        .catch(error => {
            console.error('Error loading JSON:', error);
        });
}

function initializeReadMoreListners() {
    document.querySelectorAll('.read-more-btn').forEach(btn => {
        const text = btn.previousElementSibling;
        btn.onclick = () => {
            text.classList.toggle('truncated');
            btn.textContent = text.classList.contains('truncated') ? 'Read More' : 'Read Less';
        };

    });
}

function initializeModal() {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeModalBtn = document.querySelector('.close-modal-btn');
    
    function closeModalFunction() {
        modal.classList.remove('show');
    }

    document.querySelectorAll('.project-image').forEach(img => {
        img.addEventListener('click', () => {
            modal.classList.add('show');
            modalImage.src = img.src;
            modalImage.alt = img.alt;
        });
    });
    
    closeModalBtn.addEventListener('click', closeModalFunction);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalFunction();
        }
    });
    
    // ESC key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModalFunction();
        }
    });
    
}