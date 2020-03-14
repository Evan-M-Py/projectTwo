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
    let artistsChoice = document.getElementById("artistChoice")
    $('.card-link').on('click', () => {
        renderArtistPage(artistsChoice.val().trim());
    })


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

    // function createPost() {
    //     $.ajax({
    //         method: "POST",
    //         url: "/api/comments"
    //     }).then(res => {
    //         console.log(res);
    //     });
    // }
    // $("#commentSubmit").on("click", (id) => {
    //     event.preventDefault();
    //     console.log("comment submitted")
    //     createPost();
    // })
    // function deletePost(id) {
    //     $.ajax({
    //         method: "DELETE",
    //         url: "/api/comment/" + id
    //     }).then(res => {
    //         return;
// };

    let updating = false;
    let author = $("#screenName");
    let rating = $("#slider");
    let venue = $("#venue");
    let date = $("#datePicker");
    let comment = $("#comment");



    $('#commentSubmit').on("click",
            submitPost());

    function submitPost(Post) {
        $.ajax({
            type: "POST",
            url: "/api/posts/" 
        }).then(res => {
            console.log(res);

        });
    };

    function updatePost(post) {
        $.ajax({
          type: "PUT",
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






