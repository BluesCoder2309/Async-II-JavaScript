const divEle = document.querySelector(".card-container");

function getDetails(id) {
   const request = fetch(`https://dummyjson.com/users/${id}`);

   const response = request.then((response) => {
      return response.json();
   });
   // because response.json also returns a promise, we can again catch the value using then method
   response.then((user) => {
      console.log(user);
   });
}
// But the above used method is still long, to shorten which, you can use promise chaining.
function getDetails(id) {
   fetch(`https://dummyjson.com/users/${id}`)
      .then((response) => {
         return response.json();
      })
      .then((user) => console.log(user));
}
getDetails(1);
