var AppointmentView = Backbone.View.extend({
  template: _.template('<span><%=title%></span>'),
  render: function(){
  	var values = this.model.toJSON();
    this.$el.html(this.template(values));
  }
});
