var AppointmentView = Backbone.View.extend({
  template: _.template('<span><a href="#"><%= title %></a></span>'),
  events: {
    'click a': 'cancel'
  },
  cancel: function (e){
    this.model.set({cancelled: true});
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }
});
