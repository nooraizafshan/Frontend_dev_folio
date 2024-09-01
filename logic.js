// function myMenueFunction() {
//     var menuBtn = document.getElementById("myNavmenu");
//     if (menuBtn.className === "nav-menu") {
//         menuBtn.className += " responsive";
//     } else {
//         menuBtn.className = "nav-menu";
//     }
// }

// // Dark mode //
// const body = document.querySelector("body")
//  toggleSwitch = document.getElementById("toggle-switch");

// // Correct the spelling of addEventListener
// toggleSwitch.addEventListener("click", () => {
//     body.classList.toggle("dark");
// });
// // typing effect//

// // var typingEffect = new Typed('.typedtext', {
// //     strings: ["Designer", "Coder", "Developer"],
// //     loop: true,
// //     typeSpeed: 100,
// //     backSpeed: 80,
// //     backDelay: 2000,
// // });
// document.addEventListener('DOMContentLoaded', () => {
//     var typingEffect = new Typed('.typedtext', {
//         strings: ["Designer", "Coder", "Developer"],
//         loop: true,
//         typeSpeed: 100,
//         backSpeed: 80,
//         backDelay: 2000,
//     });
// });
// // scroll animation//
// const sr = ScrollReveal({
//     origin:"top",
//     distance:"80px",
//     duration:2000,
//     reset:true,
// });
// sr.reveal(".featured-name",{
//       delay:100
// });
// sr.reveal(".text-info",{
//     delay:200
// }); 
// sr.reveal(".text-btn",{
//     delay:200
// }); sr.reveal(".social_icons",{
//     delay:200
// }); sr.reveal(".featured-img",{
//     delay:320
// });     

// sr.reveal(".project-box",{interval:200});

// sr.reveal(".top-header",{});
// const srLeft = ScrollReveal({
//     origin:"left",
//     distance:"80px",
//     duration:2000,
//     reset:true,
// })
// srLeft.reveal(".about-info",{delay:100});
// srLeft.reveal(".contact-info",{delay:100});

// const srRight = ScrollReveal({
//     origin:"left",
//     distance:"80px",
//     duration:2000,
//     reset:true,
// })

// srRight.reveal(".skill",{delay:100});
// srRight.reveal(".skill-box",{delay:100});

// // active link //
// const sections=document.querySelectorAll(".section[id]");

// function scrollActive(){
//     const scrollY = window.scrollY;
//     sections.forEach((current) =>{
//         const sectionHeight = current.offsetHeight,
//         sectionTop = current.offsetTop - 50,
//         sectionId = current.getAttribute("id");

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector(".nav-menu a[href=" +sectionId+"]")
//             .classList.add("active-link");
//         }
//         else{
//             document.querySelector(".nav-menu a[href=" +sectionId+"]")
//             .classList.remove("active-link");

//         }
//     });
// }
// window.addEventListener("scroll",scrollActive);
// Menu toggle function
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavmenu");
    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

// Dark mode toggle
const body = document.querySelector("body");
const toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});

// Typing effect initialization
document.addEventListener('DOMContentLoaded', () => {
    var typingEffect = new Typed('.typedtext', {
        strings: ["Designer", "Coder", "Developer"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 2000,
    });
});

// ScrollReveal animations
document.addEventListener('DOMContentLoaded', () => {
    const sr = ScrollReveal({
        origin: "top",
        distance: "80px",
        duration: 2000,
        reset: true,
    });

    sr.reveal(".featured-name", { delay: 100 });
    sr.reveal(".text-info", { delay: 200 });
    sr.reveal(".text-btn", { delay: 200 });
    sr.reveal(".social_icons", { delay: 200 });
    sr.reveal(".featured-img", { delay: 320 });
    sr.reveal(".project-box", { interval: 200 });
    sr.reveal(".top-header");

    const srLeft = ScrollReveal({
        origin: "left",
        distance: "80px",
        duration: 2000,
        reset: true,
    });
    srLeft.reveal(".about-info", { delay: 100 });
    srLeft.reveal(".contact-info", { delay: 100 });

    const srRight = ScrollReveal({
        origin: "left", // Assuming this should be "right" based on your intentions
        distance: "80px",
        duration: 2000,
        reset: true,
    });
    srRight.reveal(".skill", { delay: 100 });
    srRight.reveal(".skill-box", { delay: 100 });
});

// Active link on scroll
const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-menu a[href='#" + sectionId + "']")
                .classList.add("active-link");
        } else {
            document.querySelector(".nav-menu a[href='#" + sectionId + "']")
                .classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);
