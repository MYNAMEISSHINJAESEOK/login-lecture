const db = require("../config/db.js");

class UserStorage {    

    static getUserInfo( id ) {
        const QUERY = "SELECT * FROM users WHERE id = ?";

        return new Promise( (resolve, reject) => {
            db.query(QUERY, [id], (err,data) => {
                if(err) reject(err);
                resolve(data[0])
            })
        })
    }
    
    static async save (userInfo) {
        const QUERY = "INSERT INTO users(id, name, psword) VALUES(?, ?, ?);";

        return new Promise( (resolve, reject) => {
            db.query(QUERY, [userInfo.id, userInfo.name, userInfo.psword], (err, data) => {

                if(err) reject(`${err}`);

                resolve({success: true});

            })
        })
    }

}

module.exports = UserStorage