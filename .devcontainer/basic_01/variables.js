const accountID = 12345
let accountEmail = "ansarisuh00@gmail.com"
var accountPassword = "54321"
accountCity = "zirakpur"
let accountstate;

// accountID = 2 // not allowed

accountEmail = "ansari00@gmail.com"
accountPassword = "12345"
accountCity = "baltana"

console.log(accountID);

/*
prefer not to use var
because of issue in block scope and function scope.
*/


console.table([accountID, accountEmail, accountCity, accountPassword, accountstate]);