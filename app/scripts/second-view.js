SecondView = Support.CompositeView.extend({
  model: new Idea(),
  events: {
    'click .edit-model' :  'editIdea', 
  },
  initialize: function(options){
    console.log("secondView init")
    this.id = options.id || "well, shit"
    this.fetchIdea()
  },
  render: function(){
    this.$el.html("<h1>showing the model with id: "+this.id+"</h1>")
    return this

  },
  fetchIdea: function(){
    var that = this
    // this.idea = new Idea()
    this.model.url = 'http://localhost:3000/api/ideas/'+this.id
    this.model.fetch({
      success: function(response, model){
        console.log("model fetched, response: "+response, model)
        that.renderIdea(model)
      }
    })
  },
  renderIdea: function(model){
    console.log("idea:", this.model)
    this.$el.append(
      "<ul>\
        <li>name: "+model.name+"\
        <li>desc: "+model.description+"\
      </ul>\
      <button class='edit-model'>Edit Idea</button>\
      <a href=\"#/delete\""+model.id+">delete</a>\
      "

    )
  },

  editIdea: function(){
    console.log("navigate meow")
    CoolRouter.navigate('/edit/'+this.id, {trigger: true})

  }

})