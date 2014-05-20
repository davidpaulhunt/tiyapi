ChildView = Support.CompositeView.extend({
  events: {
    'click .appendChildExample'   : 'appendChildExample'
  },
  initialize: function(){
    console.log("ChildView init")
  },
  render: function(){
    this.$el.append("<h2>ChildView rendered!</h2><br/><button class='btn btn-info appendChildExample'>Go Ahead and append a child now!</button> ")
  },
  appendChildExample: function(){
    console.log('appendChildExample called')
    this.appendChild( new AppendChildView())
  }
})