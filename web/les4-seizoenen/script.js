const myTitle = document.getElementById('myTitle');
const myImage = document.getElementById('myImage');

let seizoenen = [
    {
        "titel": "seizoenen",
        "image": "img/seasons.jpg",
        "backround": "gray"
    },
    {
        "titel": "lente",
        "image": "img/spring.jpg",
        "backround": "green"
    },
    {
        "titel": "zomer",
        "image": "img/summer.jpg",
        "backround": "yellow"
    },
    {
        "titel": "herfst",
        "image": "img/autumn.jpg",
        "backround": "brown"
    },
    {
        "titel": "winter",
        "image": "img/winter.jpg",
        "backround": "white"
    }
];

function show(index) {
    myTitle.innerHTML = seizoenen[index].titel;
    myImage.src = seizoenen[index].image;
    document.body.style.backgroundColor = seizoenen[index].backround;
}
