import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.title',
    'model.body',
    function() {
      return !Ember.isEmpty(this.get('model.title')) &&
        !Ember.isEmpty(this.get('model.body'));
    }
  ),
  actions: {
    save: function() {
      var title = this.get('title');
      var body = this.get('body');
      var post = this.store.createRecord("post", {title: title, body: body});
      post.save().then(function () {
        this.transitionToRoute('posts');
      }.bind(this));
    },
    cancel: function() {
      this.transitionToRoute('posts');
      return false;
    }
  }
});
