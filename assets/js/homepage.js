// var getUserRepos = function() {
//     fetch("https://api.github.com/users/octocat/repos");

//     var response = fetch("https://api.github.com/users/octocat/repos");
//     console.log(response);
// };

// var getUserRepos = function() {
//     fetch("https://api.github.com/users/octocat/repos").then(function(response) {
//         response.json().then(function(data){
//             console.log(data);
//         });
//     });

//     console.log("outside");
// }

var getUserRepos = function(user) {
    // format the github api url
    var apiUrl = "https://api.github.com/users/" + "0xZ3n" + "/repos";

    //make a request to the url
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};

getUserRepos();