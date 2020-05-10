//make connection to the backend
//var socket = io();

let status = document.getElementById('status');

    /*if ( 'Accelerometer' in window ) {
      let sensor = new Accelerometer();
      sensor.addEventListener('reading', function(e) {
        status.innerHTML = 'x: ' + e.target.x + '<br> y: ' + e.target.y + '<br> z: ' + e.target.z;
        console.log(e.target);
      });
      sensor.start();
    }
    else status.innerHTML = 'Accelerometer not supported';*/

let sensor = new Accelerometer({frequency: 30});
sensor.start();

sensor.onreading = () => {
    status.innerHTML = 'x: ' + sensor.x + '<br> y: ' + sensor.y + '<br> z: ' + sensor.z;
    console.log("Acceleration along X-axis: " + sensor.x);
    console.log("Acceleration along Y-axis: " + sensor.y);
    console.log("Acceleration along Z-axis: " + sensor.z);
}

sensor.onerror = event => console.log(event.error.name, event.error.message);


    //simulation

    //Emit message
    /*setInterval(messageSender, 5000);

    function messageSender(){
      var x = 36,
          y = 25,
          z = 56;

      socket.emit('accelerometer', {
        accx: x,
        accy: y, 
        accz: z
      })
    }*/