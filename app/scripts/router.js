CoolRouter = Support.SwappingRouter.extend({
  routes: {
    ''                : 'index',
    'firstview'   : 'firstView',
    'show/:id'   : 'showIdea',
    'edit/:id'   : 'editIdea',
    'delete/:id'   : 'deleteIdea',
  },
  initialize: function(){
    this.el = $(".stage");
    return this
  },

  firstView: function(){
    var view = new FirstView()
    this.swap(view)
  },

  showIdea: function(id){
    console.log("id is:", id)
    var view = new SecondView({id:id})
    this.swap(view)
  },
  editIdea: function(id){
    var view = new ThirdView({id:id})
    this.swap(view)
  },

  deleteIdea: function(id){
    var that = this
    // super ugly way of doing this, but whatever
    $.ajax({
      url: 'http://localhost:3000/api/ideas/'+id,
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
