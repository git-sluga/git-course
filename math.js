function data(){
    let array = []; // 1000;
    // to be done
    console.time("messung");
    for(x = 0; x < 1000; x++){
        array[x] = x;
    }
    console.timeEnd("messung");
}
data();

console.log("math.js");