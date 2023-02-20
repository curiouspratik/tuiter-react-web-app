/* eslint-env jquery */
const PostItem = (post) => {
    // Mark part of the title text as blue
    let title = post.title;
    let newTitle = title.replace(post.markText, '<span class="text-primary">' + post.markText + '</span>');
    // Hiding post body when there is no post title and post content, and edit post image rounded corner accordingly
    let postImageClass = "rounded-4" ;
    let postBodyClass = "d-none";
    if (post.postTitle || post.postContent) {
        postImageClass = "wd-rounded-top";
        postBodyClass = "border-top border-light px-3 py-3";
    }
    return(`
<!--    Single Post -->
        <div class="list-group-item pt-3 wd-post-list-item">
            <div class="row">
<!--            Left: user avatar -->
                <div class="col-1">
                    <img src="${post.userAvatar}" class="rounded-circle" width="48px" alt="avatar">
                </div>
<!--            Right: post main content -->
<!--            ps-4 pushes the content to the right, creates more spaces between avatar and content -->
                <div class="col-11 ps-4">
<!--                User information -->
                    <div class="row align-items-center">
                        <div class="col-11">
                            ${post.userName}
                            <span><i class="fas fa-check-circle"></i></span>
                            <span class="text-secondary">@${post.userHandle} &#x2022 ${post.time}</span>
                        </div>
                        <div class="col-1"><span><i class="fas fa-ellipsis-h text-secondary float-end"></i></span></div>
                    </div>
<!--                Post Title -->
                    <div>
                        ${newTitle}
                    </div>
<!--                Post -->
                    <div class="border border-light border-2 rounded-4 my-3">
                        <img src="${post.postImage}" class="w-100 ${postImageClass}" alt="Post Image"/>
                        <div class="${postBodyClass}">
                            <h6 class="mb-0">${post.postTitle}</h6>
                            <p class="text-secondary mb-0">${post.postContent}</p>
                            <a href="${post.postLink}" class="text-secondary text-decoration-none">
                                <span><i class="fas fa-link"></i></span>
                                ${post.postLinkName}
                            </a>
                        </div>
                    </div>
<!--                Bottom Icons -->
                    <div class="row mb-2">
                        <a href="#" class="col text-secondary text-decoration-none">
                            <span class="pe-2"><i class="far fa-comment"></i></span>
                            <span>${post.reply}</span>
                        </a>
                        <a href="#" class="col text-secondary text-decoration-none">
                            <span class="pe-2"><i class="fa-solid fa-retweet"></i></span>
                            <span>${post.retweet}</span>
                        </a>
                        <a href="#" class="col text-secondary text-decoration-none">
                            <span class="pe-2"><i class="far fa-heart"></i></span>
                            <span>${post.like}</span>
                        </a>
                        <a href="#" class="col text-secondary text-decoration-none">
<!--                        font awesome 6-->
                            <span class="pe-2"><i class="fa-solid fa-arrow-up-from-bracket"></i></span>
                        </a>
                    </div>
                </div>
            </div>  
        </div>
    `);
}

export default PostItem;