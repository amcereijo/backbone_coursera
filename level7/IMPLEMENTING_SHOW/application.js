var AppRouter = Backbone.Router.extend({
  routes: { "appointments/:id": "show" },
  show: function(id){
    var appointment = new Appointment({id: id});
    var appView = new AppointmentView({model: appointment});
    
    appointment.fetch();
    $('#app').append(appView.render().$el);
  }
});
