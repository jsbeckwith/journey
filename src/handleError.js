// for handling query errors

export default (error) => {
    const { status, message } = error;
    switch (status) {
      case 401:
        console.log("unauthenticated");
      case 403:
        console.log("unauthorized to access a resource");
      case 500:
        console.log("server error");
      default:
        console.log("error")
    }
    return message;
}