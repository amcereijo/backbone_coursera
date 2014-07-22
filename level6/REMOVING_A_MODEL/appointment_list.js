var AppointmentList = Backbone.Collection.extend({
  model: Appointment,
  initialize: function(){
    this.on('remove', this.hide);
  },
  hide: function(model){
  	model.trigger('hide');
	}
});
