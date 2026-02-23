// var count;
// document.write("starting Loop" + "<br>");

// for (count=1; count<=10; count++) {
//     document.write("currentcount : " + count );
//     document.write("<br>");
// }

// document.write("Loop Ended");

const person = {
    first_name : "John",
    last_name : "Doe",
    age : 25
};

for (let x in person){
    console.log("person details : " + x + " : " + person[x]);
}