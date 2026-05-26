// exception

// try {
// const a = null;
// a.a =1;
// TypeError: Cannot set properties of null (setting 'a')
//  console.log("여기는 올 수 있르가?)");
// } catch(e) {
//     console.log(e);
//     console.error(e);
// }

try {
    const r = Math.random();
    if (r >=0.5){
        r= 100;
    } else {
        console.log(a);
    }
} catch(e) {
    console.log(e);
    if ( e instanceof TypeError) {
        console.log("TypeError");
    } else if (e instanceof ReferenceError) {
        console.log("ReferenceError")
    } else {
        console.log("I Don't know lol")
    }
}