function walkDog() {



    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogwalked = true;

            if (dogwalked) {
                resolve("You walk the dog 🐕");
            }
            else {
                reject("You DIDN'T walk the dog")
            }


        }, 1500);
    });
}

function cleanKitchen() {



    return new Promise((resolve, reject) => {
        setTimeout(() => {


            const kitchenCleaned = true;

            if (kitchenCleaned) {
                resolve("You clean the kitchen 🧹");
            }
            else {
                reject("You DIDN'T clean the kitchen")
            }





        }, 2500);
    })

}

function takeOutTrash(callback) {



    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trashTaked = true;

            if (trashTaked) {
                resolve("You take out the trash! 🗑️");
            }
            else {
                reject("You DIDN'T take the trash")
            }


        }, 500);
    })

}

walkDog().then(value => { console.log(value); return cleanKitchen() })
    .then(value => { console.log(value); return takeOutTrash() })
    .then(value => { console.log(value); console.log("You finished all the chores") });
    .catch (error => console.error(error) );