const container = document.querySelector(".container");
const allSeats = document.querySelectorAll(".container .seat");
const notOccupiedSeats = document.querySelector(".container .seat:not(.occupied)");
const count = document.getElementById("count");
const film = document.getElementById("film");
const total = document.getElementById("total");
const movieSelectBox = document.getElementById("movie");

movieSelectBox.addEventListener("change", (e) => {
    let ticketPrice =e.target.value;
    let movieIndex =e.target.selectIndex;
    console.log(movieIndex);
})
