const form = document.querySelector("form");
function sendEmail(){
    Email.send ({
        Host: "smtp.elasticeemail.com",
        Username: "username",
        Password: "password",
        To: 'them@website.com',
        From: "you@isp.com",
        Subject: "this is the subject",
        Body: "And this is the body",
    }).then(
        message => alert(message)
    );
    
}