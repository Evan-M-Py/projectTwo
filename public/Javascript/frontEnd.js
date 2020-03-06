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
    function displayAllBands(){
        $.get("/api/artists", function(data) {
            console.log(data);
    }



    // COMMENTS / COMMENT MANIPULATION
    $(document).on("click", "deleteButton", deletePost);

    // appends comments to the artists page
    function getComments() {}
    // api call to delete the posts
    function deletePost(id) {
        $.ajax({
            method: "DELETE",
            url: "/api/posts/" + id
        }).then(function() {
            getPosts(searchedBand.val());
        });
    }
    
});
