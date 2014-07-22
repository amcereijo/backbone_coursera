var AppointmentView = Backbone.View.extend({
  template: _.template('<span class="<%= if(cancelled) print("cancelled") %>">' +
                        '<%= title %></span>' +
                        '<a href="#">x</a>'),
  
 
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
