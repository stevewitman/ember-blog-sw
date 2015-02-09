import Ember from 'ember';

export default Ember.ObjectController.extend({

  actions: {
    updatePost: function(post) {
      post.save();
    },

    searchPosts: function(search) {
      console.log(search);
    }
  }
});
