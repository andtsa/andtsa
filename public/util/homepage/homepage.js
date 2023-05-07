
const searchbar = document.getElementById("searchbar");
const bg = document.getElementById("htmlBackground");

function googleSearchURL(query) {
    const formattedQuery = query.replace(/ /g, '+');
    const res = `https://www.google.com/search?q=` + formattedQuery;
    console.log(res);
    return res;
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/*  comment this out for developing to prevent 
        focus shifting away from code */
searchbar.focus();


searchbar.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        // Enter is pressed
        const searchString = searchbar.value;
        const searchURL = googleSearchURL(searchString);
        // window.alert(searchURL);
        window.location.href = searchURL;
    }
});

/// on load:
const options = ["blue", "white", "pink", "orange"];
var choice = options[getRandomInt(options.length)];
bg.style.backgroundImage = `url("../../assets/images/${choice}-butterfly-unsplash.jpg")`;
