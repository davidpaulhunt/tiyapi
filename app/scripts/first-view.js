FirstView = Support.CompositeView.extend({
  events: {
    'click .newModel' :   'saveNewModel'
  },
  initialize: function(){
    console.log("firstView init")
  },
  render: function(){
    this.$el.html(
      "<h2>Create a new Model</h1>\
      <input type='text' class='model-name' placeholder='name'>\
      <br/>\
      <input type='text' class='model-desc' placeholder='description'>\
      <br/>\
      <button class='btn-lg btn-primary newModel'>Save New Model</button>"
      )
    return this
  },
  saveNewModel: function(){
    new CoolModel({name: $(".model-name").val(), desc: $(".model-desc").val()}).save({
      success: function(response){
        console.log('model has done been fetched. response: '+response)
        this.renderChildInto(new ChildView(), ".render-child-here")
      }
    })
  }

})