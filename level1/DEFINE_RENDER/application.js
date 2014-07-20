var AppointmentView = Backbone.View.extend({
  render: function() {
    var html = '<li>'+this.model.get('title')+'</li>';
    $(this.el).html(html);
  }
});
