FirstView = Support.CompositeView.extend({
  events: {
    'click .newIdea' :   'saveNewIdea'
  },
  initialize: function(){
    console.log("firstView init")
  },
  render: function(){
    this.$el.html(
      "<h2>Create a new Idea</h2>\
      <input type='text' class='model-name' placeholder='name'>\
      <br/>\
      <input type='text' class='model-desc' placeholder='description'>\
      <br/>\
      <button class='btn-lg btn-primary newIdea'>Save New Idea</button>"
      )
    return this
  },
  saveNewIdea: function(){
    new Idea({name: $(".model-name").val(), desc: $(".model-desc").val()}).save({},{
      success: function(model, response){
        console.log('model has done been fetched. response: '+response)
        console.log("navigate meow")
        CoolRouter.navigate('/show/'+response.id, {trigger: true})
      },
      error: function(err, data){
        console.log("error saving model: ", err)
      }
    }, {
      headers:{
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Methods" : "*",
        "Access-Control-Allow-Headers" : "*"
      }
    })
  }

})