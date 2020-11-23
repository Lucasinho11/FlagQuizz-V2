let flagImg = document.getElementById("flag")
let flagName = document.getElementById("invisible")
let difNone = document.getElementById("invisibledif")
let scoreTxt = document.querySelector(".score")
let displayDiv = document.getElementById("display-div")
let gameDiv = document.querySelector(".game")
let btnNext = document.querySelector(".btn-next")
let nextFlag = document.querySelector(".next-flag")
let formulaire = document.getElementById("formulaire")
let start = document.getElementById("start")
let restart = document.getElementById("restart")
let trueFalse = document.querySelector(".TF")
let trueRep = document.querySelector(".true-rep")
let btnDif = document.querySelector(".btndif")
let easy = document.querySelector(".easy")
let normal = document.querySelector(".simple")
let hard = document.querySelector(".hard")
let divStart = document.querySelector(".div-start")
let scoreTotal = document.querySelector(".score-total")
let com = document.querySelector(".com")
var score = 0
var tour = 0

var timer = document.getElementById("timer")
var timerFlag = document.getElementById("timer-flag")
var secondes = 0;
var minutes = 0;
var on = false;
var onFlag = false;
let ex = ""

//difficultés : 
easy.addEventListener('click', event => {
  event.preventDefault();
  var difficulte = 10
  start.style.display = "block"
  easy.style.display = "none"
  normal.style.display = "none"
  hard.style.display = "none"
  difNone.innerHTML = difficulte
  secondesFlag = difNone.textContent
  timerFlag.innerHTML = "Temps restant: 00 : "+secondesFlag+"s"
})

normal.addEventListener('click', event => {
  event.preventDefault();
  var difficulte = 5
  start.style.display = "block"
  easy.style.display = "none"
  normal.style.display = "none"
  hard.style.display = "none"
  difNone.innerHTML = difficulte
  secondesFlag = difNone.textContent
  timerFlag.innerHTML = "Temps restant: 00 : 0"+secondesFlag+"s"
})

hard.addEventListener('click', event => {
  event.preventDefault();
  var difficulte = 3
  start.style.display = "block"
  easy.style.display = "none"
  normal.style.display = "none"
  hard.style.display = "none"
  difNone.innerHTML = difficulte
  secondesFlag = difNone.textContent
  timerFlag.innerHTML = "Temps restant: 00 : 0"+secondesFlag+"s"
})

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

  var flags = [
    ["ad", "Andorre"],
    ["ae", "Émirats arabes unis"],
    ["af", "Afghanistan"],
    ["ag", "Antigua-et-Barbuda"],
    ["ai", "Anguilla"],
    ["al", "Albanie"],
    ["am", "Arménie"],
    ["ao", "Angola"],
    ["aq", "Antarctique"],
    ["ar", "Argentine"],
    ["as", "Samoa américaines"],
    ["at", "Autriche"],
    ["au", "Australie"],
    ["aw", "Aruba"],
    ["ax", "Åland"],
    ["az", "Azerbaïdjan"],
    ["ba", "Bosnie-Herzégovine"],
    ["bb", "Barbade"],
    ["bd", "Bangladesh"],
    ["be", "Belgique"],
    ["bf", "Burkina Faso"],
    ["bg", "Bulgarie"],
    ["bh", "Bahreïn"],
    ["bi", "Burundi"],
    ["bj", "Bénin"],
    ["bl", "Saint-Barthélemy"],
    ["bm", "Bermudes"],
    ["bn", "Brunei"],
    ["bo", "Bolivie"],
    ["bq", "Pays-Bas caribéens"],
    ["br", "Brésil"],
    ["bs", "Bahamas"],
    ["bt", "Bhoutan"],
    ["bv", "Île Bouvet"],
    ["bw", "Botswana"],
    ["by", "Biélorussie"],
    ["bz", "Belize"],
    ["ca", "Canada"],
    ["cc", "Îles Cocos"],
    ["cd", "Congo (Rép. dém.)"],
    ["cf", "République centrafricaine"],
    ["cg", "Congo"],
    ["ch", "Suisse"],
    ["ci", "Côte d'Ivoire"],
    ["ck", "Îles Cook"],
    ["cl", "Chili"],
    ["cm", "Cameroun"],
    ["cn", "Chine"],
    ["co", "Colombie"],
    ["cr", "Costa Rica"],
    ["cu", "Cuba"],
    ["cv", "Cap-Vert"],
    ["cw", "Curaçao"],
    ["cx", "Île Christmas"],
    ["cy", "Chypre"],
    ["cz", "République Tchèque"],
    ["de", "Allemagne"],
    ["dj", "Djibouti"],
    ["dk", "Danemark"],
    ["dm", "Dominique"],
    ["do", "République dominicaine"],
    ["dz", "Algérie"],
    ["ec", "Équateur"],
    ["ee", "Estonie"],
    ["eg", "Égypte"],
    ["eh", "Sahara Occidental"],
    ["er", "Érythrée"],
    ["es", "Espagne"],
    ["et", "Éthiopie"],
    ["eu", "Union européenne"],
    ["fi", "Finlande"],
    ["fj", "Fidji"],
    ["fk", "Îles Malouines"],
    ["fm", "Micronésie"],
    ["fo", "Îles Féroé"],
    ["fr", "France"],
    ["ga", "Gabon"],
    ["gb", "Royaume-Uni"],
    ["gb-eng", "Angleterre"],
    ["gb-nir", "Irlande du Nord"],
    ["gb-sct", "Écosse"],
    ["gb-wls", "Pays de Galles"],
    ["gd", "Grenade"],
    ["ge", "Géorgie"],
    ["gf", "Guyane"],
    ["gg", "Guernesey"],
    ["gh", "Ghana"],
    ["gi", "Gibraltar"],
    ["gl", "Groenland"],
    ["gm", "Gambie"],
    ["gn", "Guinée"],
    ["gp", "Guadeloupe"],
    ["gq", "Guinée équatoriale"],
    ["gr", "Grèce"],
    ["gs", "Géorgie du Sud-et-les Îles Sandwich du Sud"],
    ["gt", "Guatemala"],
    ["gu", "Guam"],
    ["gw", "Guinée-Bissau"],
    ["gy", "Guyana"],
    ["hk", "Hong Kong"],
    ["hm", "Îles Heard-et-MacDonald"],
    ["hn", "Honduras"],
    ["hr", "Croatie"],
    ["ht", "Haïti"],
    ["hu", "Hongrie"],
    ["id", "Indonésie"],
    ["ie", "Irlande"],
    ["il", "Israël"],
    ["im", "Île de Man"],
    ["in", "Inde"],
    ["io", "Territoire britannique de l'océan Indien"],
    ["iq", "Irak"],
    ["ir", "Iran"],
    ["is", "Islande"],
    ["it", "Italie"],
    ["je", "Jersey"],
    ["jm", "Jamaïque"],
    ["jo", "Jordanie"],
    ["jp", "Japon"],
    ["ke", "Kenya"],
    ["kg", "Kirghizistan"],
    ["kh", "Cambodge"],
    ["ki", "Kiribati"],
    ["km", "Comores"],
    ["kn", "Saint-Christophe-et-Niévès"],
    ["kp", "Corée du Nord"],
    ["kr", "Corée du Sud"],
    ["kw", "Koweït"],
    ["ky", "Îles Caïmans"],
    ["kz", "Kazakhstan"],
    ["la", "Laos"],
    ["lb", "Liban"],
    ["lc", "Sainte-Lucie"],
    ["li", "Liechtenstein"],
    ["lk", "Sri Lanka"],
    ["lr", "Liberia"],
    ["ls", "Lesotho"],
    ["lt", "Lituanie"],
    ["lu", "Luxembourg"],
    ["lv", "Lettonie"],
    ["ly", "Libye"],
    ["ma", "Maroc"],
    ["mc", "Monaco"],
    ["md", "Moldavie"],
    ["me", "Monténégro"],
    ["mf", "Saint-Martin (Antilles françaises)"],
    ["mg", "Madagascar"],
    ["mh", "Îles Marshall"],
    ["mk", "Macédoine du Nord"],
    ["ml", "Mali"],
    ["mm", "Birmanie"],
    ["mn", "Mongolie"],
    ["mo", "Macao"],
    ["mp", "Îles Mariannes du Nord"],
    ["mq", "Martinique"],
    ["mr", "Mauritanie"],
    ["ms", "Montserrat"],
    ["mt", "Malte"],
    ["mu", "Maurice"],
    ["mv", "Maldives"],
    ["mw", "Malawi"],
    ["mx", "Mexique"],
    ["my", "Malaisie"],
    ["mz", "Mozambique"],
    ["na", "Namibie"],
    ["nc", "Nouvelle-Calédonie"],
    ["ne", "Niger"],
    ["nf", "Île Norfolk"],
    ["ng", "Nigeria"],
    ["ni", "Nicaragua"],
    ["nl", "Pays-Bas"],
    ["no", "Norvège"],
    ["np", "Népal"],
    ["nr", "Nauru"],
    ["nu", "Niue"],
    ["nz", "Nouvelle-Zélande"],
    ["om", "Oman"],
    ["pa", "Panama"],
    ["pe", "Pérou"],
    ["pf", "Polynésie française"],
    ["pg", "Papouasie-Nouvelle-Guinée"],
    ["ph", "Philippines"],
    ["pk", "Pakistan"],
    ["pl", "Pologne"],
    ["pm", "Saint-Pierre-et-Miquelon"],
    ["pn", "Îles Pitcairn"],
    ["pr", "Porto Rico"],
    ["ps", "Palestine"],
    ["pt", "Portugal"],
    ["pw", "Palaos"],
    ["py", "Paraguay"],
    ["qa", "Qatar"],
    ["re", "Réunion"],
    ["ro", "Roumanie"],
    ["rs", "Serbie"],
    ["ru", "Russie"],
    ["rw", "Rwanda"],
    ["sa", "Arabie saoudite"],
    ["sb", "Îles Salomon"],
    ["sc", "Seychelles"],
    ["sd", "Soudan"],
    ["se", "Suède"],
    ["sg", "Singapour"],
    ["sh", "Sainte-Hélène, Ascension et Tristan da Cunha"],
    ["si", "Slovénie"],
    ["sj", "Svalbard et Jan Mayen"],
    ["sk", "Slovaquie"],
    ["sl", "Sierra Leone"],
    ["sm", "Saint-Marin"],
    ["sn", "Sénégal"],
    ["so", "Somalie"],
    ["sr", "Suriname"],
    ["ss", "Soudan du Sud"],
    ["st", "Sao Tomé-et-Principe"],
    ["sv", "Salvador"],
    ["sx", "Saint-Martin (royaume des Pays-Bas)"],
    ["sy", "Syrie"],
    ["sz", "Swaziland"],
    ["tc", "Îles Turques-et-Caïques"],
    ["td", "Tchad"],
    ["tf", "Terres australes et antarctiques françaises"],
    ["tg", "Togo"],
    ["th", "Thaïlande"],
    ["tj", "Tadjikistan"],
    ["tk", "Tokelau"],
    ["tl", "Timor oriental"],
    ["tm", "Turkménistan"],
    ["tn", "Tunisie"],
    ["to", "Tonga"],
    ["tr", "Turquie"],
    ["tt", "Trinité-et-Tobago"],
    ["tv", "Tuvalu"],
    ["tw", "Taïwan"],
    ["tz", "Tanzanie"],
    ["ua", "Ukraine"],
    ["ug", "Ouganda"],
    ["um", "Îles mineures éloignées des États-Unis"],
    ["un", "Organisation des Nations unies"],
    ["us", "États-Unis"],
    ["uy", "Uruguay"],
    ["uz", "Ouzbékistan"],
    ["va", "Vatican"],
    ["vc", "Saint-Vincent-et-les-Grenadines"],
    ["ve", "Venezuela"],
    ["vg", "Îles Vierges britanniques"],
    ["vi", "Îles Vierges des États-Unis"],
    ["vn", "Viêt Nam"],
    ["vu", "Vanuatu"],
    ["wf", "Wallis-et-Futuna"],
    ["ws", "Samoa"],
    ["xk", "Kosovo"],
    ["ye", "Yémen"],
    ["yt", "Mayotte"],
    ["za", "Afrique du Sud"],
    ["zm", "Zambie"],
    ["zw", "Zimbabwe"]];



function startRound(){
  trueFalse.style.display = "none"
  scoreTxt.innerHTML = "Score: " + score
  displayDiv.style.display = "block"
  let randFlags = flags[Math.floor(Math.random()*flags.length)];
  GameRound(randFlags)
}
function GameRound(randArray){
  
  flagImg.innerHTML = `<img src="https://flagcdn.com/w160/${randArray[0]}.png" class="main-img"><br>`
  flagImg.style.display = "block";
  flagName.innerHTML = randArray[1]
  let arrayName = [randArray];
  var index = flags.indexOf(randArray);
  flags.splice(index, 1);
  for( i=0; i<3; i++){
    let randFlags2 = flags[Math.floor(Math.random()*flags.length)];
    arrayName.push(randFlags2)
  }
  shuffle(arrayName)

  formulaire.innerHTML = `<div id="form1">
  <div class="margin-radio">
    <div>
      <button type="button" class="btn1 btns btn btn-info"></button>
    </div>
    <div>
    <button type="button" class="btn2 btns btn btn-info"></button>
    </div>
    <div>
    <button type="button" class="btn3 btns btn btn-info"></button>
    </div>
    <div>
    <button type="button" class="btn4 btns btn btn-info"></button>
    </div>
  </div><br>
</div> `

  let btn1 = document.querySelector(".btn1")
  let btn2 = document.querySelector(".btn2")
  let btn3 = document.querySelector(".btn3")
  let btn4 = document.querySelector(".btn4")

  btn1.innerHTML = arrayName[0][1]
  btn2.innerHTML = arrayName[1][1]
  btn3.innerHTML = arrayName[2][1]
  btn4.innerHTML = arrayName[3][1]

  btn1.addEventListener('click', event => {
    event.preventDefault();
    stopChrono()
    stopChronoFlag()
    trueFalse.style.display = "block"
    timerFlag.style.display = "none";
    trueRep.style.display = "block"
    valeur = btn1.textContent;
    console.log(valeur)
    verif(valeur)
})

btn2.addEventListener('click', event => {
  event.preventDefault();
  stopChrono()
  stopChronoFlag()
  trueFalse.style.display = "block"
  timerFlag.style.display = "none";
  trueRep.style.display = "block"
  valeur = btn2.textContent;
  console.log(valeur)
  verif(valeur)
})
  
btn3.addEventListener('click', event => {
  event.preventDefault();
  stopChrono()
  stopChronoFlag()
  trueFalse.style.display = "block"
  timerFlag.style.display = "none";
  trueRep.style.display = "block"
  valeur = btn3.textContent;
  console.log(valeur)
  verif(valeur)
})

btn4.addEventListener('click', event => {
  event.preventDefault();
  stopChrono()
  stopChronoFlag()
  timerFlag.style.display = "none";
  trueFalse.style.display = "block"
  trueRep.style.display = "block"
  valeur = btn4.textContent;
  console.log(valeur)
  verif(valeur)
})
  
}
btnNext.addEventListener('click', e => {
  e.preventDefault();
  tour++
  
  if(secondesFlag == 10){
    timerFlag.innerHTML = "Temps restant: 00 : "+secondesFlag+"s"
  }
  else{
    timerFlag.innerHTML = "Temps restant: 00 : 0"+secondesFlag+"s"
  }
  startChrono()
  timerFlag.style.display = "block"
  startChronoFlag()
  console.log(tour)
    startRound();
    gameDiv.style.display = "block";
    timerFlag.style.display = "block";
    nextFlag.style.display = "none";
    trueFalse.style.display = "none";
    trueRep.style.display = "none"


})
function verif(btn){
    

      if(btn == flagName.textContent){
        console.log(flagName.textContent)
        console.log("win")
        score++
        scoreTxt.innerHTML = "Score: " + score
        gameDiv.style.display = "none";
        rep = "Vrai"
        trueFalse.style.color = "green"
        flag = ""
        verifNext(tour, rep, flag)
      }
      else if (btn == ""){
        rep = "Tu n'as pas eu le temps"
        trueFalse.style.color = "red"
        console.log("faux")
        gameDiv.style.display = "none";
        flag = ""
        verifNext(tour, rep, flag)
      }
      else{
        rep = "Faux"
        trueFalse.style.color = "red"
        console.log("faux")
        gameDiv.style.display = "none";
        flag = "C'était " + flagName.textContent
        verifNext(tour, rep, flag)

      }
    
  

  
}
function verifNext(tour, rep, flagtrue){
  if(tour <= 8){
    nextFlag.style.display = "block";
    trueFalse.innerHTML = rep
    trueRep.innerHTML = flagtrue
  }
  else{
    stopChrono()
    scoreTxt.style.display = "none"
    trueFalse.innerHTML = rep
    trueRep.innerHTML = flagtrue
    scoreTotal.innerHTML = "Ton score est de " + score 
    if(score < 2){
      com.innerHTML = "C'est vraiment pas terrible 😨"
    }
    if( score >= 2 && score < 5){
      com.innerHTML = "C'est pas terrible 👎"
    }
    if( score >= 5 && score < 7){
      com.innerHTML = "C'est pas mal 👍"
    }
    if( score >= 7 && score < 10){
      com.innerHTML = "Bravo 👏"
    }
    if(score == 10){
      com.innerHTML = "T'es le boss 😎"
    }

    restart.style.display = "block";
      restart.addEventListener('click', e => {
        e.preventDefault();
        document.location.reload();
      })
  }
}

start.addEventListener('click', e => {
  e.preventDefault();
  timer.style.display = "block"
  startRound();
  startChrono();
  
  timerFlag.style.display = "block"
  startChronoFlag()
  start.style.display = "none"
  console.log("valeur"+secondesFlag)
})


function chrono(){
  secondes++
  console.log(secondes)
  if(secondes>59){
    minutes++

    secondes = 0;
  }
 
  if(minutes<10 && secondes<10){
    timer.innerHTML = "0"+minutes+" : 0"+secondes;
  }
  else if(minutes<10 && secondes>=10){
    timer.innerHTML = "0"+minutes+" : "+secondes;
  }
  else if(minutes>=10 && secondes<10){
    timer.innerHTML = minutes+" : 0"+secondes;
  }
  else if(minutes>=10 && secondes>10){
    timer.innerHTML = minutes+" : "+secondes;
  }
}
function chronoFlag(){
  secondesFlag--
  timerFlag.innerHTML = "Temps restant: 00 : 0"+secondesFlag+"s"
  
  
  if(secondesFlag == 0){
    verif(ex)
    stopChronoFlag()
    stopChrono()
    timerFlag.style.display = "none"
    
    
  }
}

function startChrono(){
  if(on===false){
    timerID = setInterval(() => {
      chrono()
    }, 1000);
    on = true;
  }
}
function startChronoFlag(){
  if(onFlag===false){
    timerIDFlag = setInterval(() => {
      chronoFlag()
    }, 1000);
    onFlag = true;
  }
}
function stopChronoFlag(){
  secondesFlag = difNone.textContent
  if(onFlag===true){
    onFlag = false;
    clearTimeout(timerIDFlag);
  }
}
function stopChrono(){
  if(on===true){
    on = false;
    clearTimeout(timerID);
  }
}
