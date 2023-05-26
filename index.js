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
    const name = []
    let carName = document.getElementById("carname").value;
    name.push(carName);

    const model = []
    let carModel = document.getElementById("carmodel").value;
    model.push(carModel);

    const price = []
    let carPrice = document.getElementById("carprice").value;
    price.push(carPrice);

    

    // let table = document.getElementById("myTable");
    // let row = table.insertRow(0);
    // let cell1 = row.insertCell(0);
    // let cell2 = row.insertCell(1);
    // for(let i=0;i<cars.length;i++){
        
    //     cell2.innerHTML = cars[i];
    // }

    let table = document.getElementById("myTable");
    let row = table.insertRow(-1);
    let rowCount = table.rows.length;
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3); 

    
    cell1.innerHTML = rowCount - 1;

   

    for(let i=0;i<name.length;i++){
        cell2.innerHTML = name[i];
       
    }
    for(let i=0;i<model.length;i++){
        cell3.innerHTML = model[i];
    }
    for(let i=0;i<price.length;i++){
        cell4.innerHTML = price[i];
    }
}
