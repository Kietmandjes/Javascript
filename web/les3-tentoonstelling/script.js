const myImage = document.getElementById('myImage')
const myTitle = document.getElementById('myTitle')
const myText = document.getElementById('myText')

let paintings = ["img/painting0.jpg","img/painting1.jpg","img/painting2.jpg","img/painting3.jpg","img/painting4.jpg","img/painting5.jpg"];

let titles = [
    "De schilderijen van van Gogh",
    "De rode wijngaard",
    "De sterrennacht",
    "Sterrennacht boven de Rhone",
    "Zonnebloemen",
    "Boerderij in de Provence"
];

let text = [
    "Van Gogh <br>Schilderijen <br>Over de hele wereld",
    "november 1888 <br>Pesjkinmuseum <br>Moskouw",
    "juni 1889 <br>Museum of Modern Art <br>New York",
    "september 1888<br>Musue d'Orsay <br>Parijs",
    "januari 1889 <br>Neue Pinakothek <br>Munchen",
    "september 1888 <br>National Gallery of Art <br>Washington D.C.",
    
]

function changeImage(index){
    myTitle.innerHTML = titles[index];
    myImage.src = paintings[index];
    myText.innerHTML = text[index];
}






