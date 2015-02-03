import Ember from 'ember';

export default Ember.ObjectController.extend({

  actions: {
    updatePost: function(post) {
      post.save();
    }
  }
});
