var Gpio = require('onoff').Gpio; 
var LDR = new Gpio(22, 'in','both');
var LED1 = new Gpio(24, 'out');
var LED2 = new Gpio(23, 'out');
var LED3 = new Gpio(4, 'out'); 
var LED4 = new Gpio(17, 'out');
var LED5 = new Gpio(27, 'out');



LDR.watch(function(err,value){
  LED1.writeSync(value^1);
  LED2.writeSync(value^1);
  LED3.writeSync(value^1);
  LED4.writeSync(value^1);
  LED5.writeSync(value^1);
});


setTimeout(function(){
  LED1.writeSync(0);
  LED2.writeSync(0);
  LED3.writeSync(0);
  LED4.writeSync(0);
  LED5.writeSync(0);
  LDR.unexport();
  LED1.unexport();
  LED2.unexport();
  LED3.unexport();
  LED4.unexport();
  LED5.unexport();
},30000)