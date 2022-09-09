class UserStorage {

    static #users = {

        id : ["woorimIT", "나개발", "김팀장"],
        psword : ["1234", "1234", "123456"],
        name: ["우리밋", "나리밋", "김리밋"],
    
    }

    static getUsers (...keys) {
        const users = this.#users;
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

        const users = this.#users;

        const idx = users.id.indexOf(id);

        const userKeys = Object.keys(users)

        const userInfo = userKeys.reduce( ( newUser, info) => {

            newUser[info] = users[info][idx];
            return newUser;

        }, {}
        );

        return userInfo

    }

}

module.exports = UserStorage