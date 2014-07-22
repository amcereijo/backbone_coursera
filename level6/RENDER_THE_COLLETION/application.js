var AppointmentListView = Backbone.View.extend({
  render: function(){
    this.collection.forEach(this.addOne, this);
  },
  addOne: function(model){
    var appointmentView = new AppointmentView({model:model});
    this.$el.append(appointmentView.render().el);
  }
});
