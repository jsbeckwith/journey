import axios from "axios";
import handleError from './handleError';

/* this file contains functions that are used universally
that are NOT related to the Context (user, date) */

// correctly/nicely format any date as a string (originally: unix epoch format)
export function createDateString(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];
    // create a string with the full day of the week, month, day of the month, and year
    let dateString = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate()
                    + ", " + date.getFullYear();
    return dateString;
}

// get a stringified version of a post or user id
// for use in express queries
export function getStringID(id) {
    let jsonString = JSON.stringify(id);
    // extract id from JSON string
    let shortString = jsonString.slice(7, 31);
    return shortString;
}

// get specific post using string id
// returns Promise, NOT post object!
export function getPostByID(id) {
    let idString = getStringID(id);
    return new Promise((resolve, reject) => {
        axios.get("http://localhost:4000/posts/" + idString)
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(handleError(error))
            });
    });
}

// get specific user using string id
// returns Promise, NOT user object!
export function getUserByID(id) {
    let idString = getStringID(id);
    return new Promise((resolve, reject) => {
        axios.get("http://localhost:4000/users/" + idString)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(handleError(error));
            });
    });
}

// post info only includes user id,
// so we need to retrieve other user info (username etc)
export function getUserByPostID(id) {
    return new Promise((resolve, reject) => {
        getPostByID(id)
            .then(response => {
                return getUserByID(response.data.author);
            })
            .catch(error => {
                reject(handleError(error));
            });
    });
    // let idString = getStringID(id);
    // await axios.get("http://localhost:4000/posts/" + idString)
    //     .then((response) => {
    //         let post = response.data;
    //         let userId = post.author;
    //         axios.get("http://localhost:4000/users/" + userId)
    //             .then((response) => {
    //                 return response.data;
    //             })
    //             .catch( (error) => {
    //                 reject(handleError(error));
    //             });
    //     })
    //     .catch( (error) => {
    //         reject(handleError(error));
    //     });
}