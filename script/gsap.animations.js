let nltl = gsap.timeline({repeatDelay: 1, delay: 0});

nltl.from('.gradiel', {duration: 0.6, x: -400}, ">-2")
nltl.from('.n1', {duration: 0.2, x: 40, opacity: 0})
nltl.from('.n2', {duration: 0.2, x: 40, opacity: 0})
nltl.from('.n3', {duration: 0.2, x: 40, opacity: 0})
nltl.from('.n4', {duration: 0.2, x: 40, opacity: 0})
nltl.from('.dark-mode-toggle', {duration: 0.4, x: 40, opacity: 0})

nltl.pause();

let tl = gsap.timeline({repeatDelay: 0.1, delay: 0.2});

tl.from(".t1", {duration: 0.3, y: -20, opacity: 0});
tl.from(".t2", {duration: 0.3, y: -20, opacity: 0,});
tl.from(".t3", {duration: 0.3, y: -20, opacity: 0, ease: "slow(0.7, 0.7, false)"});
tl.from(".r4", {duration: 0.3, x: 30, opacity: 0});
tl.from(".avatar-wrapper", {duration: 0.5, x: 30, opacity: 0, ease: "slow(0.7, 0.7, false)"})

const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        nltl.play()
      } else {
        nltl.seek(0)
        nltl.pause()
      }
    })
  })
  
  
  const boxElList = document.querySelectorAll('.nav');
  boxElList.forEach((el) => {
    io.observe(el);
  })



  const op = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        tl.play()
        console.log('play')
      } else {
        tl.seek(0)
        tl.pause()
      }
    })
  })
  
  
  const aniObser = document.querySelectorAll('.aniObser');
  aniObser.forEach((el) => {
    op.observe(el);
  })
  

    

  