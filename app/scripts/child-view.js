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
  renderEdit: function(model){
    this.$el.html("\
      <input class='edit-modal-name' value="+model.name +">\
      <input class='edit-modal-desc' value="+model.description +">\
      <button class='update-model'>Update Model</button>\
      ")
  },
  fetchModel: function(id){
    var that = this
    this.idea = new Idea()
    this.idea.url = 'http://localhost:3000/api/ideas/'+this.id
    this.idea.set("id", this.id)
    this.idea.fetch({
      success: function(response, model) {
        console.log("response in edit is: "+response, model)
        that.renderEdit(model)
      }

    })
  },

  updateModel: function(){
    var updatedModel = new Idea()
    var newHotness = {
      name: $(".edit-modal-name").val(),
      description: $(".edit-modal-desc").val()
    }
    updatedModel.set(newHotness)
    updatedModel.url = 'http://localhost:3000/api/ideas/'+this.id
    updatedModel.save({
      success: function(response){
        console.log("holy shit it worked. response: "+response)
        CoolRouter.navigate('/show/'+response.id, {trigger: true})
      }
    })
  },
})