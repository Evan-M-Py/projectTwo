$(document).ready(function() {
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
    //function for displaying all comments associated with a band
    function renderArtistPage(id) {
        $.ajax({
            method: "GET",
            url: "/api/artist/" + id
        }).then(res => {
            return;
        });
    }
    $(".reviewLink").on("click", idClick => {
        idClick = event.target.id;
        console.log(idClick);
        renderArtistPage(idClick);
    });

    // COMMENTS / COMMENT MANIPULATION
    function createPost() {
        $.ajax({
            method: "POST",
            url: "/api/comments"
        }).then(res => {
            console.log(res);
        });
    }
    $("#commentSubmit").on("click", (id) => {
        event.preventDefault();
        console.log("comment submitted")
        createPost();
    })
    function deletePost(id) {
        $.ajax({
            method: "DELETE",
            url: "/api/comment/" + id
        }).then(res => {
            return;
        });
    }
    $(".deleteButton").on("click", idClick => {
        idClick = event.target.id;
        console.log(idClick);
        deletePost(idClick);
    });
});
