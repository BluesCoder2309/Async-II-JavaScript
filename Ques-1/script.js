function trackFitness(exercise, duration) {
    //Implement your promise here
    return new Promise((resolve, reject) => {
        if (duration > 0) {
            console.log(`You performed ${exercise} exercise for a total of ${duration} time`);
            setTimeout(() => {
                resolve(duration)
            }, 5000);
        } else {
            console.log('Invalid duration. Please provide a positive number.');
        }


    })
}
trackFitness("Running", 30)
    .then((duration) => {
        console.log(`Total duration: ${duration} minutes.`);
    })
    .catch((error) => {
        console.log(`Failed to track fitness: ${error}`);
    });