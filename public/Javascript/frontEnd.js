// ---all artists page---
// loop through artist database
// create card with artist, picture, and genre
// append card to page

//---individual artist page---
// create card with pic and all artist info
// loop through comment database of corresponding artist and create a card with title, content, author and rating
//

$(document).ready(function() {
    //enter the site from landing page
    // function enterSite() {
    //     $.ajax({
    //         method: "GET",
    //         url: "/artists"
    //     }).then(data => {
    //         console.log("redirected to artists");
    //     });
    // }
    // $("#enterBtn").on("click", enterSite());

    //back to home
    function backHome() {
        $.ajax({
            method: "GET",
            url: "/"
        }).then(data => {
            // console.log("back to homepage");
        });
    }
    $("#home").on("click", backHome());

    // displays all artists in the DB on this page
    function displayAllBands() {
        $.ajax({
            method: "GET",
            url: "/artists"
        }).then(res => {
            // console.log("display all the artists");
        });
    }
    $("#showAllArtists").on("click", displayAllBands());

    //display artists of a certain genre
    function displayBandsOfGenre(genre) {
        $.ajax({
            method: "GET",
            url: "/api/artists/" + genre
        }).then(res => {
            var newDoc = document.open("text/html", "replace");
            newDoc.write(res);
            newDoc.close();
        });
    }
    $("#genre").on("change", () => {
        let selectedGenre = $("#genre")
            .children("option:selected")
            .val();
        displayBandsOfGenre(selectedGenre);
    });
    // COMMENTS / COMMENT MANIPULATION
    // $(document).on("click", "#deleteButton", deletePost);
});
