
const words = [  "Magician",
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
cursor.style.width = '20px';
cursor.style.height = '20px';
cursor.style.borderRadius = '50%';
cursor.style.backgroundColor = 'white';
cursor.style.position = 'absolute';
cursor.style.pointerEvents = 'none';
document.body.appendChild(cursor);

let cursorX = 0;
let cursorY = 0;
let targetX = 0;
let targetY = 0;

element.addEventListener('mousemove', (e) => {
  targetX = e.clientX - 10;
  targetY = e.clientY - 10;
});

function animateCursor() {
  // Розраховуємо різницю між поточною та цільовою позицією
  const diffX = targetX - cursorX;
  const diffY = targetY - cursorY;

  // Змінюємо позицію курсора на невелику частину різниці
  cursorX += diffX * 0.1; // 0.1 - коефіцієнт плавності
  cursorY += diffY * 0.1;

  // Встановлюємо нову позицію курсора
  cursor.style.left = `${cursorX}px`;
  cursor.style.top = `${cursorY}px`;

  // Запускаємо анімацію знову
  requestAnimationFrame(animateCursor);
}

animateCursor(); // Запускаємо анімацію

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




  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "free-consultation-call", {origin:"https://cal.com"});

  
  // Important: Please add the following attributes to the element that should trigger the calendar to open upon clicking.
  // `data-cal-link="kiril-karatitsyn/free-consultation-call"`
  // data-cal-namespace="free-consultation-call"
  // `data-cal-config='{"layout":"month_view","theme":"dark"}'`

  Cal.ns["free-consultation-call"]("ui", {"theme":"dark","styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":true,"layout":"month_view"});
