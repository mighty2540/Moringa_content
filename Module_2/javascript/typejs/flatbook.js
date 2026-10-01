// flatbook is a social network that allows users to connect and share posts easily. To handle post creation, FlatBook uses anonymous functions and arrow functions to keep code modular and maintainable

const posts = ["My cat is so cute!", "I'm enjoying a lovely vacation at the Bahamas!", "FlatBook is the best website ever!"];

function makePost(addAndReturnNewPost, getSuccessMessage){
    const postText = addAndReturnNewPost();
    const successMessage = getSuccessMessage(postText);
    console.log(successMessage);
}

makePost(function () {
    const postText = prompt("Enter the text for your post:");
    posts.push(postText);
    return postText;
}, (postText) => `Your post has been successfully created! Here is the post that you made:\n\n${postText}`);
