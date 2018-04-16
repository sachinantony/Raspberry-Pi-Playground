//include onoff to interact with the GPIO
var Gpio = require('onoff').Gpio; 

//use GPIO pin 4, and specify that it is output
var LED1 = new Gpio(24, 'out');
var LED2 = new Gpio(23, 'out');
var LED3 = new Gpio(4, 'out'); 
var LED4 = new Gpio(17, 'out');
var LED5 = new Gpio(27, 'out');
var LED6 = new Gpio(22, 'out');

LED1.writeSync(1);
LED2.writeSync(1);


//run the blinkLED function every 250ms
var chase1Interval = setInterval(chaser1, 100); 
var chase2Interval;
 

function chaser1(){
L1=LED1.readSync();
L2=LED2.readSync();
L3=LED3.readSync();
L4=LED4.readSync();
L5=LED5.readSync();
L6=LED6.readSync();

if(L1==1 && L2 ==1){
  LED1.writeSync(0);
  LED3.writeSync(1);
}
else if(L2==1 && L3 ==1){
  LED2.writeSync(0);
  LED4.writeSync(1);
} 
else if(L4==1 && L3 ==1){
  LED3.writeSync(0);
  LED5.writeSync(1);
}
else if(L4==1 && L5 ==1){
  LED4.writeSync(0);
  LED6.writeSync(1);
}
else if(L5==1 && L6 ==1){
  LED5.writeSync(0);
  LED6.writeSync(0);
  LED1.writeSync(1);
  LED2.writeSync(1);
}
}

function chaser2(){
L1=LED1.writeSync(LED1.readSync()^1);
L2=LED2.writeSync(LED2.readSync()^1);
L3=LED3.writeSync(LED3.readSync()^1);
L4=LED4.writeSync(LED4.readSync()^1);
L5=LED5.writeSync(LED5.readSync()^1);
L6=LED6.writeSync(LED6.readSync()^1);
}

/*
function blinkLED() { //function to start blinking
  if (LED.readSync() === 0) { //check the pin state, if the state is 0 (or off)
    LED.writeSync(1); //set pin state to 1 (turn LED on)
  } else {
    LED.writeSync(0); //set pin state to 0 (turn LED off)
  }
}
 */

function endChaser1(){
clearInterval(chase1Interval); // Stop blink intervals
LED1.writeSync(1);
LED2.writeSync(0);
LED3.writeSync(1);
LED4.writeSync(0);
LED5.writeSync(1);
LED6.writeSync(0);
chase2Interval = setInterval(chaser2, 250); 
}

function endCode() { //function to stop blinking  
  clearInterval(chase2Interval);
  LED1.writeSync(0); // Turn LED off
  LED1.unexport(); // Unexport GPIO to free resources
  LED2.writeSync(0); // Turn LED off
  LED2.unexport();
  LED3.writeSync(0); // Turn LED off
  LED3.unexport();
  LED4.writeSync(0); // Turn LED off
  LED4.unexport();
  LED5.writeSync(0); // Turn LED off
  LED5.unexport();
  LED6.writeSync(0); // Turn LED off
  LED6.unexport();
}

setTimeout(endChaser1, 3000); //stop blinking after 5 seconds
setTimeout(endCode, 6000); //stop blinking after 5 seconds