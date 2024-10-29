
const words = [ "Developer", 
   "Magician",
    "Expert",
    "Master",
    "Specialist",
    "Guru",
    "Virtuoso",
    "Maestro",
    "Problem Solver",
    "Solution Provider"]; 
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
  const amPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 годин має відображатися як 12
  const timeString = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ' ' + amPm;
  return timeString;
}

// Виводимо час на сторінку
const timeElement = document.getElementById('time'); // Замініть 'time' на id вашого елемента
timeElement.textContent = getCurrentTimeWithAmPm();

setInterval(() => {
  timeElement.textContent = getCurrentTimeWithAmPm();
}, 5000); // 60000 мс = 1 минута



  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "free-consultation-call", {origin:"https://cal.com"});

  
  // Important: Please add the following attributes to the element that should trigger the calendar to open upon clicking.
  // `data-cal-link="kiril-karatitsyn/free-consultation-call"`
  // data-cal-namespace="free-consultation-call"
  // `data-cal-config='{"layout":"month_view","theme":"dark"}'`

  Cal.ns["free-consultation-call"]("ui", {"theme":"dark","styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":true,"layout":"month_view"});


  function openEmail() {
    window.open("mailto:karat2007ll@gmail.com");
}