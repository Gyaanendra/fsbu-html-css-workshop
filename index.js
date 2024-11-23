document.addEventListener("DOMContentLoaded", () => {
  // Typing Animation Setup
  const textElements = document.querySelectorAll(".intro");
  textElements.forEach((element) => {
    element.classList.add("typing-text");
  });

  // Enhanced Scroll Animation Observer
  const elements = document.querySelectorAll(".animate-on-scroll");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          if (entry.target.classList.contains("card")) {
            startParallaxForElement(entry.target);
          }
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "50px",
    }
  );

  elements.forEach((el) => observer.observe(el));

  // Parallax Effect
  function startParallaxForElement(element) {
    const depth = 15; // Parallax intensity

    element.addEventListener("mousemove", (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const percentX = (x - centerX) / centerX;
      const percentY = (y - centerY) / centerY;

      const rotateX = percentY * depth;
      const rotateY = -percentX * depth;

      element.style.transform = `
         perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateZ(10px)
       `;
    });

    element.addEventListener("mouseleave", () => {
      element.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
    });
  }

  // Add parallax to cards
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    startParallaxForElement(card);
  });

  // Smooth Scrolling for Navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Profile Picture Parallax
  const profilePic = document.querySelector(".profilepic");
  if (profilePic) {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset;
      profilePic.style.transform = `translateY(${scrolled * 0.15}px)`;
    });
  }

  // Terminal Animation
  const terminal = document.querySelector(".terminal");
  if (terminal) {
    terminal.addEventListener("mousemove", (e) => {
      const rect = terminal.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const moveX = (x - centerX) / 20;
      const moveY = (y - centerY) / 20;

      terminal.style.transform = `
         perspective(1000px)
         rotateX(${moveY * -1}deg)
         rotateY(${moveX}deg)
         translateZ(20px)
       `;
    });

    terminal.addEventListener("mouseleave", () => {
      terminal.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
    });
  }
});


var button = document.getElementById('myButton');
button.onclick = function() {
  location.assign('/pro.html');
}