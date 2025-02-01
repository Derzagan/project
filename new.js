const options = {
    name: "test",
    wight: 1024,
    height: 1024,
    colors: {
        border: 'Black ',
        bg: 'red'

    },
    makeTest: function(){
        console.log("test");
    }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border)

// console.log(Object.keys(options).length);


// console.log(options["colors"]["border"]);
// delete options.name;
// console.log(options);





// console.log(options["colors"]["border"]);
// delete options.name;
// console.log(options);


// let counter = 0;
// for (let key in options){
//     if (typeof(options[key]) == 'object'){
//         for( let i in options[key]){
//             console.log("свойство ", i, "имеет значение ", options[key][i]);
//             counter++;

//         }
//     } else{
//         console.log("свойство ", key, "имеет значение ", options[key])
//         counter++;

//     }
// }
// console.log(counter)




