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

        const promise = fs
                        .readFile('./src/db/muriel/users.json')
                        .then( data => {
                            return this.#getUsers(data, isAll, keys);
                        })
                        .catch(console.error);        

        return promise
        
    }

    static getUserInfo( id ) {

        const promise = fs
                        .readFile('./src/db/muriel/users.json')
                        .then( data => {
                            return this.#getUserInfo(data, id);
                        })
                        .catch(console.error);        

        return promise
    }
    
    static async save (userInfo) {

        const users = await this.getUsers(true);

        //데이터 추가

        if (users.id.includes(userInfo.id)) {

            throw "이미 존재하는 아이디입니다."

        }
        
        else {

            users.id.push(userInfo.id);
            users.name.push(userInfo.name);
            users.psword.push(userInfo.psword);
    
            fs.writeFile("./src/db/muriel/users.json", JSON.stringify(users));

            return {success : true}
        
        }

    }

}

module.exports = UserStorage