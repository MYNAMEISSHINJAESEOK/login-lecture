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


}

module.exports = UserStorage