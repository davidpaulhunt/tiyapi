ThirdView = Support.CompositeView.extend({
  initialize: function(){
    console.log("thirdView init")
  },
  render: function(){
    this.$el.html("<h1>ThirdView</h1>")
    return this
  }
})