const fs = require("fs").promises;

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

    static getUsers (...keys) {
        // const users = this.#users;
        const newUsers = keys.reduce( (filteredUsers, key) => {

            if (users.hasOwnProperty(key)) {
                filteredUsers[key] = users[key];
            }

            return filteredUsers;

        }, {} 
        );

        return newUsers;
    }

    static getUserInfo( id ) {

        // const users = this.#users;

        const promise = fs
                        .readFile('./src/db/muriel/users.json')
                        .then( data => {
                            return this.#getUserInfo(data, id);
                        })
                        .catch(console.error);        

        return promise
    }

    

    static save (userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        console.log(users);
    }

}

module.exports = UserStorage