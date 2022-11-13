const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closeButton = document.querySelector('.close-btn');

sidebarToggle.addEventListener('click', e => {
    sidebarToggle.classList.toggle('collapsed');
    sidebar.classList.toggle('collapsed');
});

closeButton.addEventListener('click', () => {
    sidebarToggle.classList.remove('collapsed');
    sidebar.classList.remove('collapsed');
});
