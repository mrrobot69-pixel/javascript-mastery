const accountId = 6953
let accountEmail = "abc@gmail.com"
var pass = "12345"
accountCity = "Jaipur"

//accountId = 133 //not allowed

accountEmail = "hemant@gmail.com"
pass = "hemant123"
accountCity="Navi Mumbai"

console.log(accountEmail);

/*prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,pass,accountCity])


