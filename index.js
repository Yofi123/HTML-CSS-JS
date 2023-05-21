function myDemo(){
    document.getElementById("demo").innerHTML = "This is my first js";
}
// function myDemo(){
//     document.getElementById("demo").innerHTML = "This is my first js";
// }
    
// 

// function getToday(){
//     let day;
//     switch(new Date().getDay()){
//         case 0:
//             day = "Sunday";
//             break;
//         case 1:
//             day = "Monday";
//             break;
//         case 2:
//             day = "Tuesday";
//             break;
//         case 3:
//             day = "Wednesday";
//             break;
//         case 4:
//             day = "Thursday";
//             break;
//         case 5:
//             day = "Friday";
//             break;
//         case 6:
//             day = "Saturday";
            
//     }
//     document.getElementById("display").innerHTML = "Today is " + day;
// }

// function studentGrade(){
//     let grade = parseInt(document.getElementById("num").value);
//     let display;
//     switch(grade){
//         case grade >=90:
//            display = document.getElementById("display").innerHTML = "A+"
//             break;
//         case (grade >=85 && grade <90):
//             display = document.getElementById("display").innerHTML = "A"
//             break;
//         case (grade >=80 && grade <85):
//             display = document.getElementById("display").innerHTML = "A-"
//             break;
//         case (grade >=75 && grade <80):
//             display = document.getElementById("display").innerHTML = "B+"
//             break;
//         case (grade >=70 && grade <75):
//             display = document.getElementById("display").innerHTML = "B"
//             break;
//         case (grade >=65 && grade <70):
//             display = document.getElementById("display").innerHTML = "B-"
//             break;
//         case (grade >=60 && grade <65):
//             display = document.getElementById("display").innerHTML = "C+"
//             break;
//         case (grade >=55 && grade <60):
//             display = document.getElementById("display").innerHTML = "C"
//             break;
//     }   
//     document.getElementById("display").innerHTML = display
// }

// const cars = ["BMW", "TOYOTA","MAZDA","AUDI","CHIVERLOET","SUBERU"]

// for(let i=0;i<cars.length;i++) {
//     console.log(cars[i]);
// }

function addCars(){
    const cars = []
    let inputCars = document.getElementById("car").value;
    cars.push(inputCars);

    // let table = document.getElementById("myTable");
    // let row = table.insertRow(0);
    // let cell1 = row.insertCell(0);
    // let cell2 = row.insertCell(1);
    // for(let i=0;i<cars.length;i++){
        
    //     cell2.innerHTML = cars[i];
    // }

    let table = document.createElement("table");
    let row = table.insertRow(i);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1); 

    for(let i=0;i<cars.length;i++){
        

        cell1.innerHTML = i;
        cell2.innerHTML = cars[i];
    }
}
