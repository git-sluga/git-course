console.log("Hallo");





// bitte implementieren
function add(a,b) {
    console.time("for");
    let array = [];
    for(x = 0; x < 10000; x++){
        array[x] = x;
    }
    console.timeEnd("for");
}

add(1,2);