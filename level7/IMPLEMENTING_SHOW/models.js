var Appointment = Backbone.Model.extend({
  defaults: function() { 
    return {
      'date': new Date(), 
      'cancelled': false, 
      'title': 'Checkup'
    }
  }
});
