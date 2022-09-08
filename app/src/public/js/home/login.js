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

    // fetch();

    console.log(req);
}