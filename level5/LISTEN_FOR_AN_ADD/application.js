var appointments = new AppointmentList();
appointments.on('add', function(appointment){
  console.log(appointment.get('title'));
});
