import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deletePost: function(post) {
      var _this = this;
      post.destroyRecord().then(function() {
        _this.transitionToRoute('posts');
      });
    },
    alertPost: function(post) {
      alert(post.get("title"));
    }
  }
});
