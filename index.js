const { default: axios } = require("axios");
const http = require("http");
axio = require("axios");

http.createServer((req,res)=>{
    //function getNames that returns users
    res.write(users.join(", "));

    res.write("\n" + emails.join(", "));
    res.end();
}).listen(8000);

let users = [];
let emails = [];

(async function getNames(){
    try{
        const{data} = await axios.get
        ("https://jsonplaceholder.typicode.com/users");
        users = data.map(user => user.name);
        emails = data.map(email => email.email);//por queee? daonde vem o user e o email

        if(emails.indexOf("Shanna@melissa.tv") > -1){
            console.log("found");
        } else {
            console.log ("not found");
        }




    } catch (error){
        console.log(error);
    }
    
})();
