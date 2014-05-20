CoolRouter = Support.SwappingRouter.extend({
  routes: {
    ''                : 'index',
    'firstview'   : 'firstView',
    'secondview'   : 'secondView',
  },
  initialize: function(){
    this.el = $(".stage");
    return this
  },

  firstView: function(){
    var view = new FirstView()
    this.swap(view)
  },

  secondView: function(){
    var view = new SecondView()
    this.swap(view)
  },

})

$(function(){
  var coolRouter = new CoolRouter()
  Backbone.history.start()
})
