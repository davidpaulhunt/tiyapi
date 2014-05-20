SecondView = Support.CompositeView.extend({
  events: {
    'click .edit-model' :  'editModel', 
  }
  initialize: function(options){
    console.log("secondView init")
    this.id = options.id || "well, shit"
  },
  render: function(){
    this.$el.html("<h1>showing the model with id: "+this.id+"</h1>")
    return this

  },
  fetchModel: function(){
    this.coolModel = new CoolModel()
    this.coolModel.url = 'http://localhost:3000/api/cool-model/'+this.id
    this.coolModel.fetch({
      success: function(response){
        console.log("model fetched, response: "+response)
        this.renderModel()
      }
    })
  },
  renderModel: function(){
    this.$el.append(
      "<ul>\
        <li>name: "+this.coolModel.name+"\
        <li>desc: "+this.coolModel.desc+"\
      </ul>\
      <button class='edit-model'>Edit Model</button>\
      "

    )
  },

  editModel: function(){
    CoolRouter.navigate('/edit/'+this.id, {trigger: true})

  }

})