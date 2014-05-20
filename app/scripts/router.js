CoolRouter = Support.SwappingRouter.extend({
  routes: {
    ''                : 'index',
    'firstview'   : 'firstView',
    'show/:id'   : 'showCoolModel',
    'edit/:id'   : 'editCoolModel',
  },
  initialize: function(){
    this.el = $(".stage");
    return this
  },

  firstView: function(){
    var view = new FirstView()
    this.swap(view)
  },

  showCoolModel: function(id){
    var view = new SecondView(id)
    this.swap(view)
  },
  editCoolModel: function(id){
    var view = new ThirdView(id)
    this.swap(view)
  },

})

$(function(){
  window.CoolRouter = new CoolRouter()
  Backbone.history.start()
})
