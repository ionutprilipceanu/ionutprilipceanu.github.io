//local review data

const reviews = [
  {
    id: 1,
    name: "Nicoleta Chelaru",
    job: "Februarie 2020",
    img: "https://res.cloudinary.com/doethsghh/image/upload/v1592148405/doi_bytytv.jpg", //'./poze/doi.png'
    text: '"De când l-am cunoscut pe Ionuț, familia mea a apelat doar la el pentru ședințe foto profesionale și evenimente, pentru că e super talentat, dedicat în ceea ce face, discret, cu mult bun simț (aspecte remarcate și de invitații noștri), foarte prietenos și amuzant, fâcându-te astfel să te simți în largul tău atunci când e cu obiectivul camerei pe tine. Mulțumim pentru tot! P.S. Albumele sunt superbe!"',
  },

  {
    id: 2,
    name: "Neculai Ursache",
    job: "Aprilie 2019",
    img: "https://res.cloudinary.com/doethsghh/image/upload/v1592148405/cinci_n8mjvr.jpg", //'./poze/patru.png'
    text: '"Îmi plac oamenii care fac ceva din pasiune iar Ionuț este unul dintre ei. Viziunea, talentul și pasiunea lui pentru fotografiere se poate vedea de la prima întâlnire. Rezultatele sunt superbe. Mă bucur enorm că am apelat la el și cu siguranță voi mai apela. Mult succes în ceea ce faci! Ne revedem curând."',
  },

  {
    id: 3,
    name: "Nicoleta Arsene",
    job: "Decembrie 2019",
    img: "https://res.cloudinary.com/doethsghh/image/upload/v1592148405/unu_shp0us.jpg", //'./poze/unu.png'
    text: '"Un fotograf dedicat, natural, creativ, cu multă răbdare, atent la detalii și foarte prompt (am primit foarte repede materialele de la el). Bravo pentru implicare și profesionalism. Recomand cu mare drag!"',
  },
  
  {
    id: 4,
    name: "Marta Magopeț-Grahoschi",
    job: "Ianuarie 2020",
    img: "https://res.cloudinary.com/doethsghh/image/upload/v1592148405/trei_or0ies.jpg", //'./poze/trei.png'
    text: '"Felicitări pentru profesionalismul și dedicarea de care dai dovadă în creearea fotografiei. Un om minunat și un adevărat artist. Recomand cu drag și din inimă!"',
  },

  {
    id: 5,
    name: "Petru Cozma",
    job: "Februarie 2019",
    img: "https://res.cloudinary.com/doethsghh/image/upload/v1592148405/patru_xcdvto.jpg", //'./poze/patru.png'
    text: '"Cum să explic, băiatul ăsta e ca la Kaufland //"Ieftin și bun//". Am ieșit așa bine în poze că m-aș fi luat și eu de soț."',
  },
  
]


// selectarea elementelor 
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// set starting item 
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function(){
  showPerson(currentItem);
});

//show person based on item
function showPerson(){
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person
nextBtn.addEventListener('click' , function(){
  currentItem++;
  if(currentItem > reviews.length - 1){
    currentItem = 0;
  }
  showPerson();
});

prevBtn.addEventListener('click' , function(){
  currentItem--;
  if(currentItem < 0){
    currentItem = reviews.length - 1;
  }
  showPerson();
});