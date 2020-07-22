
// Make a webpage that will ask the name of the user. Then will display a welcome message on the webpage.
// get the name from the user and put his Name on the title.
 const name = prompt("Enter your name","type your name");

 title.innerText += `Welcome to our webpage ${name}`;



// Also the webpage should also have a clock.

 const ctime = document.getElementById('time');


 function clock(){
     let date = new Date();
     let time = date.toLocaleTimeString();
     ctime.innerText = time;
 }
 
 setInterval(clock,1000);


 
 // Using the toggle method of classList add a dark mode feature to the website.

const dmode = document.getElementById('dark');

dmode.onclick = function changeColor(){

    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.body.style.fontFamily = 'Helvetica';

}

