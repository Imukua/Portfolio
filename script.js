function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


const lastName = document.querySelector('.last-name');

lastName.addEventListener('mouseenter', () => {
  lastName.textContent = 'Okello';
  lastName.style.color = 'red'; // Change the color if needed
});

lastName.addEventListener('mouseleave', () => {
  lastName.textContent = 'Mukua';
  lastName.style.color = ''; // Reset the color
});
