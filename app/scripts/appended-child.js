AppendChildView = Support.CompositeView.extend({
  events: {
    'click .appendChildExample'   : 'appendChildExample'
  },
  initialize: function(){
    console.log("ChildView init")
  },
  render: function(){
    this.$el.append("<h2>You just appended a child view!</h2><br/><h2>How about you go ahead and <button class='btn btn-info appendChildExample'>appendChildInto!</button> </h2>")
  },
  appendChildExample: function(){
    console.log('appendChildInto called')
    this.appendChildTo( new AppendChildView(), ".childstage")
  }
})