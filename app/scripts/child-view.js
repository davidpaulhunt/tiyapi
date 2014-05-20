ThirdView = Support.CompositeView.extend({
  events: {
    'click .update-model'   : 'updateModel'
  },
  initialize: function(options){
    this.id = options.id || 'dude, where the hell did the ID go? seriously, this is three levels deep. like a dream within a dream within a rock climbing!'
    this.fetchModel(this.id)
    console.log("editView init")
  },
  render: function(){
    return this
  },
  renderEdit: function(){
    this.$el.html("
      <input class='edit-modal-name' value="+this.coolModel.name +">\
      <input class='edit-modal-desc' value="+this.coolModel.desc +">\
      <button class='update-model'>Update Model</button>\
      ")
  },
  fetchModel: function(id){
    this.coolModel = new coolModel()
    this.coolModel.fetch({
      success: function(response) {
        console.log("response in edit is: "+response)
        this.renderEdit()
      }

    })
  },

  updateModel: function(){
    var newHotness = {
      name: $(".edit-modal-name"),
      desc: $(".edit-modal-desc")
    }
    this.coolModel.set(newHotness)
    this.coolModel.save({
      success: function(response){
        console.log("holy shit it worked. response: "+response)
        CoolRouter.navigate('/show/'+response.id, {trigger: true})
      }
    })
  },
})