Idea = Backbone.Model.extend({

  url: 'http://localhost:3000/api/ideas',
  parse: function(response){
    console.log("model returned, response is: "+ response)
  },


})

IdeaCollection = Backbone.Collection.extend({
    url: 'http://localhost:3000/api/ideas',
    parse: function(response){
      console.log("model returned, response is: "+ response)
    },
})