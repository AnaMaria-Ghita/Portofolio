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


const titlu = document.getElementById("titlu");
const initialPosition = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
  const rect = titlu.getBoundingClientRect();
  
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const distX = e.clientX - centerX;
  const distY = e.clientY - centerY;

  const distance = Math.sqrt(distX * distX + distY * distY);

  if (distance < 150) {

    const offsetX = -distX / distance * 50;
    const offsetY = -distY / distance * 50;

    gsap.to(titlu, {
      x: `+=${offsetX}`,
      y: `+=${offsetY}`,
      duration: 2,
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
