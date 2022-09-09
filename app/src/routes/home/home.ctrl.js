const UserStorage = require("../../model/UserStorage.js")


const output = {
    
    home : (req, res) => {

        res.render('home/index');
    
    },    

    login : (req, res) => {
    
        res.render("home/login");
    
    } 
}

const process ={

    login : (req, res) => {

        const id = req.body.id,
            psword = req.body.psword;

        console.log(UserStorage.getUsers("id", "psword"));
        
        const response = {};

        // if (UserStorage.users.id.includes(id)) {
        //     const idx = UserStorage.users.id.indexOf(id);
        //     if (UserStorage.users.psword[idx] === psword) {
        //         response.success = true;
        //         return res.json(response);
        //     }
        // }

        response.success = false;
        response.msg = "로그인에 실패하였습니다.";

        return res.json(response)
        
    }

    
    
}


module.exports = {
    output,
    process
}