

let students = {
   js: [{
    name: 'Jonh',
    progress: 100
   }, {
    name: 'Ivan',
    progress: 60
   }],

   html: {
    basic: [{
        name: 'Peter',
        progress: 20
    }, {
        name: 'Ann',
        progress: 18
    }],

    pro: [{
        name: 'Same',
        progress: 10
    }]

   }

};

function getTotalProgress(data){
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)){
        if(Array.isArray(course)){
            students += course.length;
            for (let i = 0; i < course.length; i++){
                total += course[i].progress;
            }
        } else {
            for (let Subcourse of Object.values(course)){
                students += Subcourse.length;
                for (let i = 0; i < Subcourse.length; i++){
                    total += Subcourse[i].progress;
                }

            }

        }
    }



    return total/students
}
console.log(getTotalProgress(students))