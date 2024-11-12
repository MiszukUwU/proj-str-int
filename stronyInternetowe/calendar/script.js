const monthsName = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
const weekDayNames = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
let currentDate = new Date(2026, 10, 25);
let month = currentDate.getMonth();
let day = currentDate.getDate();
let weekDay = currentDate.getDay();
let year = currentDate.getFullYear();
let birthdayDate = new Date(year, 9, 23);
if (currentDate > birthdayDate){
    birthdayDate.setFullYear(year+1);
}
let leftToBday = Math.ceil((Date.parse(birthdayDate)-Date.parse(currentDate))/1000/60/60/24);

let bannerElement = document.getElementById("banner");
let dayElement = document.getElementById("day");
let weekDayElement = document.getElementById("week-day");
let footerElement = document.getElementById("footer");

bannerElement.innerHTML = monthsName[month] + " " +year;
dayElement.innerHTML = day;
weekDayElement.innerHTML = weekDayNames[weekDay];

footerElement.innerHTML = "Urodziny mam za: "+ leftToBday;
if (leftToBday>1){
    footerElement.innerHTML += " dni";
} else if (leftToBday==1) {
    footerElement.innerHTML += " dzień";
}
if (weekDay == 0){
    dayElement.className += "red";
    weekDayElement.className += "red";
}

let mainElement = document.querySelector("main");
switch (month+1){
    case 12:
    case 1:
    case 2:
        mainElement.style.backgroundImage = "url(media/winter.jpg)";
        break;
    case 3:
    case 4:
    case 5:
        mainElement.style.backgroundImage = "url(media/spring.jpg";
        break;
    case 6:
    case 7:
    case 8:
        mainElement.style.backgroundImage = "url(media/summer.jpg)";
        break;
    case 9:
    case 10:
    case 11:
        mainElement.style.backgroundImage = "url(media/autumn.jfif)";
        break;
}
if (leftToBday == 0){
    mainElement.style.backgroundImage = "url(media/birthday.jpg)";
    footerElement.innerHTML = "Dziś są moje Urodziny!"
}