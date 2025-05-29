const divEle = document.querySelector(".card-container");

function getDetails(id) {
   fetch(`https://dummyjson.com/users/${id}`)
      .then((response) => {
         //check if the response.ok value is true or not, true means that request is fulfilled represented by 200 and 404 meand error
         if (!response.ok) {
            throw new Error("Id does not match any data!");           //this is caught by the catch function
         }
         return response.json();
      })
      .then((user) => console.log(user))
      .catch((err) => {
         console.error(err); //to show as an error on console
         console.log(err); //to normally display on the console
      });
}
getDetails(0);
