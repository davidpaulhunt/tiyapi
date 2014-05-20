FirstView = Support.CompositeView.extend({
  events: {
    'click .renderchild' :   'renderChildExample'
  },
  initialize: function(){
    console.log("firstView init")
  },
  render: function(){
    this.$el.html("<h1>FirstView</h1><br/><button class='btn-lg btn-primary renderchild'>render child</button>")
    this.$el.append("<div class='render-child-here'></div>")
    return this
  },
  renderChildExample: function(){
    this.renderChildInto(new ChildView(), ".render-child-here")
  }

})