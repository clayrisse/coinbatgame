'use strict'
//for this first project we are creating a database from the browser localStorage. Next project we will use a server for this.
class Database {
    //1. we have to recover "the users" - an array
    getAllUsers = ()=> {
        //recovers string
        const usersStr = localStorage.getItem("users"); // cl:throws a str and if empty a null
        //converts str to arr
        const usersArr = JSON.parse( usersStr ); //cl:from array throws an array. if userStr es null gives null
        
        //if there are any users yet, returns an empty array
        if (usersArr === null) {
            return [];
        } else {
            return usersArr;
        }

    }

    saveNewUser = (newUser) => {
        
        //recover array of users from lcalStorage
        const usersArr = this.getAllUsers();

        //update array of users
        usersArr.push(newUser);

        //convert array to string
        const usersStr = JSON.stringify(usersArr);

        //storage the new data
        localStorage.setItem("users", usersStr);
    }
}

const db = new Database();