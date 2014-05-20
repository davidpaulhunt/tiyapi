CoolModel = Backbone.Model.extend({

  url: 'http://localhost:3000/api/schools',
  parse: function(response){
    console.log("model returned, response is: "+ response)
  },


})