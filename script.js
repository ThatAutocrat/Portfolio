function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500)
});

const timezoneElement = document.getElementById('timezone');
  const options = { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, timeStyle: 'short' };

  function updateTimezone() {
    const now = new Date();
    const formattedTime = now.toLocaleString('en-US', options); // Adjust locale as needed
    timezoneElement.textContent = `Hi 👋, in my timezone, it is: ${formattedTime}`;
  }

  updateTimezone();
  setInterval(updateTimezone, 1000);


 



  

