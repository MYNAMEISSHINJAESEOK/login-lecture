const id = document.querySelector("#id"),
    psword = document.querySelector("#password"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener('click', () => {
    login()
});

const login = () => {

    const req = {
        id: id.value,
        psword: psword.value,
    };

    console.log(req);
    console.log(JSON.stringify(req));
    fetch("/login", {
        method: "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(req),
    });

}