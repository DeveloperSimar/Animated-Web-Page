var cursor = document.querySelector(".cursor");
var cursorBlur = document.querySelector(".cursor-blur");
var h1all = document.querySelectorAll("nav h1");

document.addEventListener("mousemove", (det)=>{
    cursor.style.left=det.x + "px"
    cursor.style.top=det.y + "px"
    cursorBlur.style.left=det.x + "px"
    cursorBlur.style.top=det.y + "px"
})

h1all.forEach(elm => {
    elm.addEventListener("mouseenter", function(){
        cursor.style.height = "13vh"
        cursor.style.width = "7vw"
        cursor.style.backgroundColor = "transparent"
        cursor.style.border = "1px solid white"
    })
});
h1all.forEach(elm => {
    elm.addEventListener("mouseleave", function(){
        cursor.style.height = "20px"
        cursor.style.width = "20px"
        cursor.style.backgroundColor = "#95c11e"
        cursor.style.border = "0px solid white"
    })
});


gsap.to("nav",{
    backgroundColor:"#000",
    duration: 0.5,
    height: "120px",
    scrollTrigger: {
        trigger: "nav",
        scroller: "body",
        scrub: 3,
        start: "top -10%",
        end: "top -11%"
    }
})

gsap.to("section", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "section",
        scroller: "body",
        scrub: 2,
        start: "top -25%",
        end: "top -70%"
    }
})

gsap.from(".about-us img, .center", {
    y: 90,
    opacity:0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger:{
        trigger:".about-us",
        scroller:"body",
        scrub:3
    }
})

gsap.from(".card", {
    y: 70,
    scale: 0,
    opacity:0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        scrub:3
    }
})

gsap.from(".coma1", {
    y: 70,
    x: 70,
    duration: 1,
    scrollTrigger:{
        trigger:".coma1",
        scroller:"body",
        scrub:5
    }
})

gsap.from(".coma2", {
    y: -70,
    x: -70,
    duration: 1,
    scrollTrigger:{
        trigger:".coma2",
        scroller:"body",
        scrub:5
    }
})

gsap.from(".page4 h1", {
    y:70,
    scrollTrigger:{
        trigger: ".page4 h1",
        scroller: "body",
        scrub:3,
    }
})