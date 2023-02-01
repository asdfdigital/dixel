let nltl = gsap.timeline({repeatDelay: 1, delay: 0});

nltl.from('.gradiel', {duration: 0.6, x: -500, delay: 0.5})
nltl.from('.n1', {duration: 0.2, x: 40, opacity: 0})
nltl.from('.n2', {duration: 0.2, x: 40, opacity: 0})
nltl.from('.n3', {duration: 0.2, x: 40, opacity: 0})
nltl.from('.n4', {duration: 0.2, x: 40, opacity: 0})
nltl.from('.dark-mode-toggle', {duration: 0.4, x: 40, opacity: 0})

nltl.pause();

document.querySelector('.menu-btn').addEventListener('click', ()=> {
  if (document.querySelector('.nav').classList.contains("nav-open")) {
    nltl.play()
  } else {
    nltl.seek(1)
    nltl.reverse()
  } 
}) 


let tl = gsap.timeline({repeatDelay: 0.5, delay: 0.5});

tl.from(".t1", {duration: 0.3, y: -20, opacity: 0});
tl.from(".t2", {duration: 0.3, y: -20, opacity: 0,});
tl.from(".t3", {duration: 0.3, y: -20, opacity: 0, ease: "slow(0.7, 0.7, false)"});
tl.from(".r4", {duration: 0.3, x: 30, opacity: 0});
tl.from(".avatar-wrapper", {duration: 0.5, x: 30, opacity: 0, ease: "slow(0.7, 0.7, false)"})

tl.play()


window.addEventListener("load", ()=> {
  document.querySelector('.ani_pause').style.opacity = '1'
})


// const op = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.intersectionRatio > 0) {
//       tl.play()
//     } 
//   })
// })

// const aniObser = document.querySelectorAll('.aniObser');
// aniObser.forEach((el) => {
//   op.observe(el);
// })


    

  
// title 

let titleTl = gsap.timeline()

titleTl.from(".gr", {duration: 1, y: "-15", opacity: 0})
titleTl.to(".gr", {delay: 1, duration: 1, y: 15, opacity: 0})
titleTl.from(".wb", {duration: 1, y: "-15", opacity: 0})
titleTl.to(".wb", {delay: 1, duration: 1, y: 15, opacity: 0})

titleTl.repeat(-1)

