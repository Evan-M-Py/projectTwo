$(document).ready(function() {
    // SEARCH / ARTISTS
    const bandSearchBar = $("#bandSearchBar");
    let searchedBand = $("#bandSearchBar").val();
    // allows search of the database
    function searchBand(searchedBand) {
        $.ajax({
            method: "GET",
            url: "/api/bands/" + searchedBand
        }).then(function() {
            getComments(searchedBand.val());
        });
    }
    
    function displayBand() {
        let categoryString = category || "";
        if (categoryString) {
            categoryString = "/category/" + categoryString;
        }
        $.get("/api/posts" + categoryString, function(data) {
            console.log("Posts", data);
            posts = data;
            if (!posts || !posts.length) {
                displayEmpty();
            } else {
                initializeRows();
            }
        });
    }



    // COMMENTS / COMMENT MANIPULATION
    $(document).on("click", "deleteButton", deletePost);

    // appends posts to the artists page
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
