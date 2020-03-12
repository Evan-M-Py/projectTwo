// ---all artists page---
// loop through artist database
// create card with artist, picture, and genre
// append card to page

//---individual artist page---
// create card with pic and all artist info
// loop through comment database of corresponding artist and create a card with title, content, author and rating
//

$(document).ready(function() {
    // --all artists page--
    function displayAllBands() {
        $.ajax({
            method: "GET",
            url: "/api/artists/"
        }).then(res => {
            // console.log(res);
        });
    }
    $("#showAllArtists").on("click", displayAllBands());

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
    $(document).on("click", "deleteButton", deletePost);

    // appends comments to the artists page

    // appends posts to the artists page
});

// });
