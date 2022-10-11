const dogPlace = (place) => {
    let dogPlaces = []
    let i = 1;
    for (;i <= 100; i++) {
        if (i == place) {
            //boo
         }
         else if (i % 10 == 1){
            if (i == 11){
                dogPlaces.push(`${i}th`);
            }
            else {
                dogPlaces.push(`${i}st`);
            }
         }
         else if (i % 10 == 2) {
            if (i == 12){
                dogPlaces.push(`${i}th`);
            }
            else {
                dogPlaces.push(`${i}nd`);
            }
         }
         else if (i % 10 == 3) {

            if (i == 13){
                dogPlaces.push(`${i}th`);
            }
            else {
                dogPlaces.push(`${i}rd`);
            }
         }
         else {
             dogPlaces.push(`${i}th`);
         }

     }
     return dogPlaces.join(", ");
};

console.log(dogPlace(20));