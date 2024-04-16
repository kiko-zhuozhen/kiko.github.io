function greetUser(){
    const now = new Date();
    const hour = now.getHours();

    let greeting;

    if (hour >= 5 && hour < 12){
        greeting = "Good Morning";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Good Afternoon";
    } else if (hour >= 18 || hour < 4) {
        greeting = "Good Evening";
    }

    alert(greeting);
}

function changeButtonText() {
    let button = document.getElementById("button2");
    console.log("Before: ", button.textContent, button.className);

    button.textContent = "Done";
    button.className = "btn btn-success";
    console.log("After", button.textContent, button.className);
}

document.getElementById("button1").addEventListener('click',greetUser);
document.getElementById("button2").addEventListener('click',changeButtonText);