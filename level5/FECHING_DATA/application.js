var AppointmentList = Backbone.Collection.extend({
  model: Appointment,
  url: '/appointments'
  
});
var appointments = new AppointmentList();
appointments.fetch();