const valueProps = document.querySelectorAll('.value-prop');
window.addEventListener('scroll', fadeInValueProps);

function fadeInValueProps() {
    valueProps.forEach(valueProp => {
        const valuePropTop = valueProp.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (valuePropTop < windowHeight * 0.8) {
            valueProp.classList.add('fade-in');
        }
    });
}
fadeInValueProps();

const aboutContent = document.querySelector('.about-content');
window.addEventListener('scroll', fadeInAboutContent);

function fadeInAboutContent() {
    const aboutContentTop = aboutContent.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (aboutContentTop < windowHeight * 0.8) {
        aboutContent.classList.add('fade-in');
    }
}
fadeInAboutContent();


const ctaButton = document.querySelector('.cta-button');
const hiddenContent = document.querySelector('.hidden-content');
ctaButton.addEventListener('click', function() {
    hiddenContent.classList.toggle('show-more');
});