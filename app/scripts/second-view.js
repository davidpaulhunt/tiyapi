SecondView = Support.CompositeView.extend({
  events: {
    'click .edit-model' :  'editModel', 
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
  fetchModel: function(){
    this.idea = new Idea()
    this.idea.url = 'http://localhost:3000/api/ideas/'+this.id
    this.idea.fetch({
      success: function(response){
        console.log("model fetched, response: "+response)
        this.renderIdea()
      }
    })
  },
  renderIdea: function(){
    this.$el.append(
      "<ul>\
        <li>name: "+this.idea.name+"\
        <li>desc: "+this.idea.desc+"\
      </ul>\
      <button class='edit-model'>Edit Idea</button>\
      "

    )
  },

  editIdea: function(){
    console.log("navigate meow")
    CoolRouter.navigate('/edit/'+this.id, {trigger: true})

  }

})