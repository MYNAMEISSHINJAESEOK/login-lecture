const db = require("../config/db.js");

class UserStorage {    

    static #getUserInfo (data, id) {

        const users = JSON.parse(data);

                            const idx = users.id.indexOf(id);

                            const userKeys = Object.keys(users);
                    
                            const userInfo = userKeys.reduce( ( newUser, info) => {
                    
                                newUser[info] = users[info][idx];
                                return newUser;
                    
                            }, {}
                            );
                    
                            return userInfo
                            
    }

    static #getUsers (data, isAll, ...keys) {

        const users = JSON.parse(data);
        
        if (isAll) return users;

        const newUsers = keys.reduce( (filteredUsers, key) => {

            if (users.hasOwnProperty(key)) {
                filteredUsers[key] = users[key];
            }

            return filteredUsers;

        }, {}
        );

        return newUsers;

    }

    static getUsers (isAll, ...keys) {
        
    }

    static getUserInfo( id ) {
        return new Promise( (resolve, reject) => {
            db.query("SELECT * FROM users WHERE id = ?", [id], (err,data) => {
                if(err) reject(err);
                resolve(data[0])
            })
        })
    }
    
    static async save (userInfo) {

    }

}

module.exports = UserStorage