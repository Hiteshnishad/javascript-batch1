let marks = prompt("Enter the marks of student");

//One using Conditonal loop:

if(marks >= 35 && marks < 40){
    console.log("Marks are " +marks+ " and grade is: D");
}
else if(marks >= 40 && marks < 50){
    console.log("Marks are " +marks+ " and grade is: C");

}else if(marks >= 50 && marks < 75){
    console.log("Marks are " +marks+ " and grade is: B");

}else if(marks >= 75){
    console.log("Marks are " +marks+ " and grade is: A");

}else{
    console.log("Marks are " +marks+ " and grade is: fail");
}

// Switch Case:
switch (true) {
    case marks >=35 && marks < 40:
        console.log("Marks are " +marks+ " and grade is D");
        break;

    case marks >= 40 && marks < 50:
        console.log("Marks are " +marks+ " and grade is C");
        break;

    case marks >= 50 && marks < 75:
        console.log("Marks are " +marks+ " and grade is B");
        break;

    case marks >= 75:
        console.log("Marks are " +marks+ " and grade is A");
        break;

    default:
        console.log("Marks are " +marks+ " and grade is E");
        break;
}