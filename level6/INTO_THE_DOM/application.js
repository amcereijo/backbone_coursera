var appointmentsView = new AppointmentListView({collection: appointmentList});
$('#app').append(appointmentsView.render().el);
