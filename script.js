
const words = [ "Developer", 
  "Magician",
   "Expert",
   "Master",
   "Specialist",
   "Guru",
   "Virtuoso",
   "Maestro",
]; 
let i = 0;
let letterIndex = 0;
const wordDiv = document.getElementById("word");

function typeWord() {
 if (letterIndex <= words[i].length) {
   wordDiv.textContent = words[i].substring(0, letterIndex);
   letterIndex++;
   setTimeout(typeWord, 100); 
 } else {
   setTimeout(eraseWord, 2000); 
 }
}

function eraseWord() {
 if (letterIndex >= 0) {
   wordDiv.textContent = words[i].substring(0, letterIndex);
   letterIndex--;
   setTimeout(eraseWord, 100);
 } else {
   i = (i + 1) % words.length; 
   letterIndex = 0;
   setTimeout(typeWord, 200);
 }
}

typeWord(); 
const element = document.body;

const cursor = document.createElement('div');
cursor.style.width = '10px';
cursor.style.height = '10px';
cursor.style.borderRadius = '50%';
cursor.style.backgroundColor = 'white';
cursor.style.position = 'absolute';
cursor.style.pointerEvents = 'none';

let cursorX = 0;
let cursorY = 0;
let targetX = 0;
let targetY = 0;

function animateCursor() {
 const diffX = targetX - cursorX;
 const diffY = targetY - cursorY;

 cursorX += diffX * 0.08;
 cursorY += diffY * 0.08;

 cursor.style.left = `${cursorX}px`;
 cursor.style.top = `${cursorY}px`;

 requestAnimationFrame(animateCursor);
}

// Перевіряємо, чи це ПК (не мобільний пристрій)
if (!/Mobi|Android/i.test(navigator.userAgent)) {
 document.body.appendChild(cursor); // Додаємо курсор лише на ПК

 element.addEventListener('mousemove', (e) => {
   targetX = e.clientX + window.scrollX - 5; 
   targetY = e.clientY + window.scrollY - 5;
 });

 animateCursor();
}
function getCurrentTimeWithAmPm() {
 const now = new Date();
 let hours = now.getHours();
 const minutes = now.getMinutes();
 const seconds = now.getSeconds();
 const ampm = hours >= 12 ? 'PM' : 'AM';
 
 // Convert to 12-hour format
 hours = hours % 12;
 hours = hours ? hours : 12; // the hour '0' should be '12'
 
 // Add leading zeros
 const formattedMinutes = minutes.toString().padStart(2, '0');
 const formattedSeconds = seconds.toString().padStart(2, '0');
 
 return `${hours}:${formattedMinutes} ${ampm}`;
}

function updateAllTimeElements() {
 // Находим все элементы с id="time"
 const timeElements = document.querySelectorAll('#time');
 const currentTime = getCurrentTimeWithAmPm();
 
 // Обновляем текст во всех найденных элементах
 timeElements.forEach(element => {
     element.textContent = currentTime;
 });
}

// Инициализация при загрузке страницы
updateAllTimeElements();

// Обновление каждые 5 секунд
setInterval(updateAllTimeElements, 30000);

 (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "free-consultation-call", {origin:"https://cal.com"});

 
 // Important: Please add the following attributes to the element that should trigger the calendar to open upon clicking.
 // `data-cal-link="kiril-karatitsyn/free-consultation-call"`
 // data-cal-namespace="free-consultation-call"
 // `data-cal-config='{"layout":"month_view","theme":"dark"}'`

 Cal.ns["free-consultation-call"]("ui", {"theme":"dark","styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":true,"layout":"month_view"});


 document.addEventListener('DOMContentLoaded', function() {
   const burger = document.querySelector('.burger');
   const nav = document.querySelector('.nav');
   const body = document.body;

   burger.addEventListener('click', function() {
       // Toggle the active class on burger
       this.classList.toggle('active');
       
       // Toggle the open class on nav
       nav.classList.toggle('open');
       
       // Toggle overflow on body
       body.classList.toggle('menu-open');
   });

   // Close menu when clicking on links
   const navLinks = document.querySelectorAll('.nav a');
   navLinks.forEach(link => {
       link.addEventListener('click', () => {
           burger.classList.remove('active');
           nav.classList.remove('open');
           body.classList.remove('menu-open');
       });
   });
});


document.addEventListener('DOMContentLoaded', function() {
 const video = document.querySelector('.back-video');
 
 // Start playing the video
 video.play().catch(function(error) {
     console.log("Video autoplay failed:", error);
     // Add controls if autoplay fails
     video.controls = true;
 });

 // Check if video is playing after a short delay
 setTimeout(function() {
     if (video.paused) {
         video.controls = true;
     }
 }, 1000);
});


 document.addEventListener( 'DOMContentLoaded', function() {
   var splide = new Splide( '.splide' );
   splide.mount();
 } );

 // Select all images with the 'lazy' class
const lazyImages = document.querySelectorAll('.lazy');

// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // When the image comes into view, set the src attribute
      const img = entry.target;
      img.src = img.dataset.src;
      // Stop observing the image once it's loaded
      observer.unobserve(img);
    }
  });
});

// Observe each lazy image
lazyImages.forEach((img) => {
  observer.observe(img);
});



window.addEventListener("load",function(){
  const preloader = document.getElementById("preloader");
  preloader.style.transform = "translateY(-100%)";
  preloader.style.opacity = "0";
  setTimeout(() => {
      preloader.style.display = "none";
      document.body.style.overflow = "auto";
  }, 2000); // Wait for the animation to finish before hiding
});