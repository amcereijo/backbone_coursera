var appointments = new AppointmentList();
appointments.on('reset', function(){
  alert(this.length);
});
appointments.fetch();
