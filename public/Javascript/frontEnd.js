// ---all artists page---
// loop through artist database
// create card with artist, picture, and genre
// append card to page

//---individual artist page---
// create card with pic and all artist info
// loop through comment database of corresponding artist and create a card with title, content, author and rating
//

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
    let updating = false;



    $('#commentSubmit').on("click", function handleFormSubmit(event) {
          const newPost = {
            author: author.val().trim(),
            rating: rating.val().trim(),
            venue: venue.val().trim(),
            date: date.val().trim(),
            comment: comment.val().trim()
          };

            submitPost(newPost);
 
        });

    function submitPost(Post) {
        $.ajax({
            method: "GET",
            url: "/api/artist/" + Post
        }).then(res => {
            console.log(res);
        });
    };

    function updatePost(post) {
        $.ajax({
          method: "PUT",
          url: "/api/posts",
          data: post
        })
          .then(function(res) {
            window.location.href = "/blog";
          });
      };
    });


//     function deletePost(id) {
//         $.ajax({
//             method: "DELETE",
//             url: "/api/comment/" + id
//         }).then(res => {
//             return;
//         });
//     }
//     $(".deleteButton").on("click", idClick => {
//         idClick = event.target.id;
//         console.log(idClick);
//         deletePost(idClick);
//     });
// });



    // // Performing our AJAX GET request

    //   // After the data comes back from the API
    //   






