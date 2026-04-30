// Q1) Write a function getUsers() that uses fetch and async/await to call: https://jsonplaceholder.typicode.com/users Display only the names of the first 5 users in the console. Handle any error using try...catch



async function getUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    users.slice(0, 5).forEach(user => console.log(user.name));
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

getUsers();




























































