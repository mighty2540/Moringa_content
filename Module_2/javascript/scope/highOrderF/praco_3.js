// high order functions by returning another function


function login(retrieveUserData){
    const user = retrieveUserData();

    function greetUser(user){
        return `Welcome ${user.name}!`;
    }

    return greetUser
}