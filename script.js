/*loading screen*/
window.addEventListener('load', function () {

  document.getElementById('loading').style.display = 'none';

  document.getElementById('projects').style.display = 'block';
});

/*cursor*/
const cursorEffect = document.querySelector('.cursor-effect');

document.addEventListener('mousemove', (e) => {
    const target = e.target;

    cursorEffect.style.left = `${e.pageX - 75}px`;
    cursorEffect.style.top = `${e.pageY - 75}px`;

    if (target.tagName === "IMG") {
        cursorEffect.style.opacity = "1";
        cursorEffect.style.visibility = "visible";
    } else {
        cursorEffect.style.opacity = "0";
        cursorEffect.style.visibility = "hidden";
    }
});

/*title*/
gsap.from(".titlu h1", {
    opacity: 0,
    y: -50,
    duration: 1,
    delay: 0.5
});

gsap.from(".titlu h2", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1
});

/*arrow*/

const titlu = document.getElementById("arrow-down");
const initialPosition = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
  const rect = titlu.getBoundingClientRect();

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const distX = e.clientX - centerX;
  const distY = e.clientY - centerY;

  const distance = Math.sqrt(distX * distX + distY * distY);

  const radius =200;
  if (distance < radius) {
    const safeDistance = Math.max(distance, 1);

    const offsetX = -distX / safeDistance * (radius - distance + 1);
    const offsetY = -distY / safeDistance * (radius - distance + 1);

    gsap.to(titlu, {
      x: `+=${offsetX}`,
      y: `+=${offsetY}`,
      duration: 0.3,
      ease: "power1.out",
    });
  } else {
    gsap.to(titlu, {
      x: initialPosition.x,
      y: initialPosition.y,
      duration: 0.5,
      ease: "power1.out",
    });
  }
});

/*projects*/

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.scroll-img').forEach((img) => {
    gsap.fromTo(
        img,
        {
            scale: 0,
            opacity: 0,
        },
        {
            scale: 1,
            opacity: 1,
            duration: 10,
            ease: 'circle.out',
            scrollTrigger: {
                trigger: img,
                start: 'top 75%',
                end: 'top 50%',
                scrub: true,
            },
        }
    );
});

/*me*/
const leftImage = document.querySelector('.photoBackground');
const rightImage = document.querySelector('.me-photo');

  function overlapAnimation() {
    gsap.to(leftImage, {
      opacity:0.5,
      x: '40%',
      duration: 1.5,
      ease: 'expo.in',
    });

    gsap.to(rightImage, {
      x: '-60%',
      duration: 1.5,
      ease: 'expo.in',
    });
  }

  gsap.to(window, {
    scrollTrigger: {
      trigger: leftImage,
      start: 'center bottom',
      onEnter: overlapAnimation,
    }
  });