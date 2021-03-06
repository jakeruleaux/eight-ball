import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question' , params.question_id);
  },
  actions: {
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      this.transitionTo('question');
    },
    update(answer, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          answer.set(key,params[key]);
        }
      });
      answer.save();
      this.transitionTo('question');
    },
    delete(question) {
      if (confirm('Are you sure you want to delete this answer?')) {
        question.destroyRecord();
        this.transitionTo('question');
      }
    }
  }
});
