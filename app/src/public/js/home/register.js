const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    name = document.querySelector("#name"),
    confirmPsword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener('click', () => {

    register()

});


const register = () => {

    const req = {
        id: id.value,
        psword: psword.value,
    };

    console.log(req);

    fetch("/register", {
        method: "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(req),
    })
    
    .then ( res => res.json() )
    
    .then  ( res => {

        if (res.success) {
            location.href = "/login";
        } else {
            alert(res.msg);
        }

    })
    
    .catch ( err => {
        console.error(new Error("회원가입 중 에러"))
    });

}