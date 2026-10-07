
const links = document.querySelectorAll('a[href^="#"]');

const sections = document.querySelectorAll('#main, #about, #news, #contact');


function showPage(id) {
    
    sections.forEach(section => {
        section.style.display = 'none';
    });

    if (id === 'main') {
        
        document.querySelector('#main').style.display = 'flex';
        document.querySelector('#about').style.display = 'block';
    } else {
        document.getElementById(id).style.display = 'block';
    }
}


showPage('main');


links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); 
        const targetID = link.getAttribute('href').replace('#', '');
        showPage(targetID);
    });
});

function showPage(id) {

    sections.forEach(section => {
        section.style.display = 'none';
    });

    if (id === 'main') {
        document.querySelector('#main').style.display = 'flex';
        document.querySelector('#about').style.display = 'block';
    } else {
        document.getElementById(id).style.display = 'block';
    }

   
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + id);
    });
}