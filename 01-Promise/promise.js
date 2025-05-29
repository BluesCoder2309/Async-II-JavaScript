const request = new Promise((resolve, reject) => {
   setTimeout(() => {
      console.log("Promise initiated");
      resolve("Promise fulfilled");
   }, 1000);
});

// if the promise is fulfilled, use the then function. If the promise is resolved, value is the data received in resolve. Basically then method catches the value which is returned in the resolve
request.then((value) => {
   console.log(value);
});

// console.log(request);

const request2 = new Promise((resolve, reject) => {
   setTimeout(() => {
      console.log("2nd promise initiated");
      resolve({ firstName: "Utkarsh", lastName: "Singh" });
   }, 2000);
});
request2.then((jawab) => {
   console.log(jawab);
});

//suppose that whatever we've requested, it isnt resolved, it comes under the state of rejected which can be handled by adding catch method at the end of then

const request3 = new Promise((resolve, reject) => {
   setTimeout(() => {
      console.log("3rd promise initiated");
      reject("Promise was rejected");
   }, 3000);
});
// There must be some things that need to happen regardless of whether the promise gets reolved or rejected. which is handled by adding the finally method at the end.
request3
   .then((jawab) => {
      console.log(jawab);
   })
   .catch((err) => console.log(err))
   .finally(() => console.log("request completed"));
// console.log(request3);
