/*
    <div class="container">
            
         <header>
            <img class="logo" src="images/logo.png">
             <img class="avatar" src="images/user-avatar.png" alt="picture of poster">
         </header>
            
         <section class="main-body">
             <div class="main-body-container">
                 <img class="avatar" src="images/avatar-vangogh.jpg" alt="picture of vangogh">
                 <div class="main-body-text">
                     <h1>Vincent Van Gogh</h1>
                     <p>Zundert, Netherlands</p>
                 </div>
             </div>
                 <img class="post-img" src="images/post-vangogh.jpg" alt="drawing of vangogh">
         </section>

           

         <section class="btm-sec">
                  <img class="icon-heart" src="images/icon-heart.png">
                  <img class="icon-comment" src="images/icon-comment.png">
                  <img class="icon-dm" src="images/icon-dm.png">
                  <p><span>21,492 likes</span></p>
                   <p><span>Vincey1853</span>&nbsp just took a few mushrooms</p>
           </section>
        
     </div>
*/

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21211,
        liked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 43111,
        liked: false
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152921,
        liked: false
    }
]

const feed = document.getElementById("feed")

function likePost(index) {
    if (posts[index].liked) {
        posts[index].likes--
        posts[index].liked = false
    } else {
        posts[index].likes++
        posts[index].liked = true
    }

    renderPosts()
}

function renderPosts() {
    let html = ""

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i]

        html += `
            <section class="main-body">
                <div class="main-body-container">
                    <img class="avatar" src="${post.avatar}" alt="${post.name}">
                    <div class="main-body-text">
                        <h1>${post.name}</h1>
                        <p>${post.location}</p>
                    </div>
                </div>

                <img
                    class="post-img"
                    src="${post.post}"
                    data-index="${i}"
                    alt="post image"
                >
            </section>

            <section class="btm-body">
                <div class="btm-body-container">

                    <img
                        class="icon-heart"
                        src="${post.liked ? "images/icon-heart.png" : "images/icon-heart.png"}"
                        data-index="${i}"
                    >

                    <img class="icon-comment" src="images/icon-comment.png">
                    <img class="icon-dm" src="images/icon-dm.png">

                    <p><span>${post.likes.toLocaleString()} likes</span></p>

                    <p>
                        <span>${post.username}</span>
                        ${post.comment}
                    </p>

                </div>
            </section>
        `
    }

    feed.innerHTML = html

    const postImages = document.querySelectorAll(".post-img")

    postImages.forEach(function(image) {
        image.addEventListener("dblclick", function() {
            likePost(image.dataset.index)
        })
    })

    const hearts = document.querySelectorAll(".icon-heart")

    hearts.forEach(function(heart) {
        heart.addEventListener("click", function() {
            likePost(heart.dataset.index)
        })
    })
}

renderPosts()