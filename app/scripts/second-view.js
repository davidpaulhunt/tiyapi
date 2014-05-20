SecondView = Support.CompositeView.extend({
  initialize: function(){
    console.log("secondView init")
  },
  render: function(){
    this.$el.html("<h1>SecondView</h1>")
    return this
  }

})