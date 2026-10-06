// real-world application of high-order functions

//Flatbook needs a flexible system that enable users to create posts, store them, and later update them without changing the core logic of the posting system.

const posts = [ "My cat is so cute!", "I'm enjoying a lovely vacation at the Bahamas!", "FlatBook is the best website ever!"];


function makePost(){
    const postText = prompt("Enter the text for your post:");
    posts.push(postText)
    const postIndex = posts.length - 1;
    alert(`Your post has been successfully created! Here is the post that you made:\n\n${postText}`);

    return function (){
        const updatedPostText = prompt("Enter your updated text for your post:");
        posts[postIndex] = updatedPostText;
        alert(`Your post has been successfully updated to:\n\n${updatedPostText}`);
    }
}

const editPost = makePost();