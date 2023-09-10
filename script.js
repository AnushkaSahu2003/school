

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


var time = gsap.timeline()
time.from("#nav", {
  x: -400,
  opacity: 0,

  duration: 0.8,

})
time.from("#page1 h1", {
  y: 120,
  delay: 1,
  opacity: 0,
  duration: 0.8,

})
time.from("#page2 h1", {
  y: -120,
  opacity: 0,
  duration: 0.4,


  scrollTrigger: {
    trigger: `#page2`,
    start: `top 40%`,
    end: `top 20%`,
    scroller: `#main`,
    // markers:true,
    scrub: 0.4,
  }

})
time.from("#page2 h2", {
  y: 120,
  opacity: 0,
  duration: 0.4,


  scrollTrigger: {
    trigger: `#page2`,
    start: `top 35%`,
    end: `top 20%`,
    scroller: `#main`,
    // markers:true,
    scrub: 0.4,
  }

})
time.from("#page2 button", {
  x: -220,
  opacity: 0,
  duration: 0.4,


  scrollTrigger: {
    trigger: `#page2`,
    start: `top 15%`,
    end: `top 0%`,
    scroller: `#main`,
    // markers:true,
    scrub: 0.4,
  }

})

var tl = gsap.timeline()

tl.to("#div ,#video1,#video2,#video3,#video4,#video5", {
  top: "-120%",
  stagger: 3,
  duration: 3,
  scrollTrigger: {
    trigger: `#page2`,
    start: `top 0%`,
    end: `top -350%`,
    scroller: `#main`,
    // markers:true,
    pin: true,
    scrub: 5,
  }
})
tl.from("#page3 p", {
  opacity: 0,
  rotate: 20,
  y: 140,
  stagger: 0.5,
  duration: 0.5,
  scrollTrigger: {
    trigger: `#page3`,
    start: `top 40%`,
    end: `top 20%`,
    scroller: `#main`,
    // markers:true,
    scrub: 1,
  }
})
tl.from("#page3 button", {
  opacity: 0,
  rotate: 20,
  //  y:140,
  stagger: 0.5,
  duration: 0.4,
  scrollTrigger: {
    trigger: `#page3`,
    start: `top 30%`,
    end: `top 10%`,
    scroller: `#main`,
    // markers:true,
    scrub: 1,
  }
})
tl.from("#page4 svg", {
  opacity: 0,
  y: 120,
  rotate: 360,
  duration: 0.8,
  scrollTrigger: {
    trigger: `#page4`,
    start: `top 40%`,
    end: `top 0%`,
    scroller: `#main`,
    // markers:true,
    scrub: 1,
  }
})
tl.from("#page4 h1,#page4 p,#page4 button", {
  opacity: 0,
  y: -200,
  stagger: 1,
  duration: 0.8,
  scrollTrigger: {
    trigger: `#page4`,
    start: `top 30%`,
    end: `top 0%`,
    scroller: `#main`,
    // markers:true,
    scrub: 1,
  }
})
tl.from("#page5 #img", {
  width: "100%",
  duration: 0.8,
  scrollTrigger: {
    trigger: `#page5`,
    start: `top 40%`,
    end: `top 0%`,
    scroller: `#main`,
    // markers:true,
    scrub: 1,
  }
})
tl.to(".swiper-slide", {
  left: "-100%",
  duration: 4,
  scrollTrigger: {
    trigger: `#page6`,
    start: `top 10%`,
    end: `top -50%`,
    scroller: `#main`,
    // markers:true,
    scrub: 2,
  }
})
tl.from(".container", {
  opacity: 0,
  stagger: 1,

  duration: 4,
  y: 220,
  scrollTrigger: {
    trigger: `#page8`,
    start: `top 60%`,
    end: `top 10%`,
    scroller: `#main`,
    // markers:true,
    scrub: 2,
  }
})


var swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

  return direction;
}
const cursor = document.querySelector(".cursor");


var main = document.querySelector("#main")
document.addEventListener("mousemove", e => {
  cursor.setAttribute("style", "top:" + e.pageY + "px; left:" + e.pageX + "px;")
})





