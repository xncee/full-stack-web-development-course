document.addEventListener('DOMContentLoaded', () => {
    initializeModal();
    initializeReadMoreListners();
});

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