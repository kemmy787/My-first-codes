let userName1="John Mwangi"
let userName2=""

let activeUserName=userName1 || userName2
 
console.log(`Active username :${activeUserName}`)
let bothUserNameOk=userName1 && userName2
console.log(`Both username ok: ${bothUserNameOk}`)