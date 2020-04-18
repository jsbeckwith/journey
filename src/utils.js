import axios from "axios";

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
export async function getPostByID(id) {
    let idString = getStringID(id);
    await axios.get("http://localhost:4000/posts/" + idString)
        .then((response) => {
            return response.data;
        })
        .catch( (error) => {
            console.log(error);
        });
}

// get specific user using string id
export async function getUserByID(id) {
    let idString = getStringID(id);
    await axios.get("http://localhost:4000/users/" + idString)
        .then((response) => {
            return response.data;
        })
        .catch( (error) => {
            console.log(error);
        });
}

// post info only includes user id,
// so we need to retrieve other user info (username etc)
export async function getUserByPostID(id) {
    let idString = getStringID(id);
    await axios.get("http://localhost:4000/posts/" + idString)
        .then((response) => {
            let post = response.data;
            let userId = post.author;
            axios.get("http://localhost:4000/users/" + userId)
                .then((response) => {
                    return response.data;
                })
                .catch( (error) => {
                    console.log(error);
                });
        })
        .catch( (error) => {
            console.log(error);
        });
}