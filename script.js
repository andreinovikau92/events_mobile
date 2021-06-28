window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

     box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('touchstart');
    }); 

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('move');
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('move');
    });
});