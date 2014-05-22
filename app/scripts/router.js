CoolRouter = Support.SwappingRouter.extend({
  routes: {
    ''                : 'index',
    'firstview'   : 'firstView',
    'show/:id'   : 'showCoolModel',
    'edit/:id'   : 'editCoolModel',
    'delete/:id'   : 'deleteCoolModel',
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

  editCoolModel: function(id){
    var that = this
    // super ugly way of doing this, but whatever
    $.ajax({
      url: 'http://localhost:3000/api/cool-model/'+id,
      type: 'DELETE',
      success: function(response){
        console.log("model deleted! response:"+response)
        that.firstView()
      },
      error: function(err,res){
        console.log("something went horribly wrong! err:" + err)
      }
    })
  },

})

$(function(){
  window.CoolRouter = new CoolRouter()
  Backbone.history.start()
})
