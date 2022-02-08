const faders = document.querySelectorAll('.fadesin');
const appearOptions = {
   // threshold: 0,
   // rootMargin: "0px 0px -200px 0px",
};
const appearsOnScroll = new IntersectionObserver(
function(entries,appearsOnScroll){
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add('appear');
            appearsOnScroll.unobserve(entry.target);
        }
    });
},
appearOptions);

faders.forEach(fader => {
    appearsOnScroll.observe(fader);
});