const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    name = document.querySelector("#name"),
    confirmPsword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener('click', () => {

    register()

});


const register = () => {
    
    if (!id.value) return alert("아이디를 입력하여 주십시오.");
    if (psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다.");

    const req = {
        id: id.value,
        psword: psword.value,
        name: name.value,
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

        console.log(err);

    });

}