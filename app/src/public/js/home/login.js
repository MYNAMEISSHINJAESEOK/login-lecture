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

    fetch("/login", {
        method: "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(req),
    })
    
    .then ( res => {

        console.log(res);
        
        return res.json();

    }
    )
    
    .then  ( res => {

        console.log(res)

    });

}