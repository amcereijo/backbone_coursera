var appointment = new Appointment({id: 1});
appointment.on('change', function () {
  alert('eyy change!!');
} );