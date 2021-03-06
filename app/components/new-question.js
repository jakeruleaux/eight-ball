import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestoin: false,
 actions: {
   questionFormShow() {
     this.set('addNewQuestion', true);
   },

   saveQuestion() {
     var params = {
       grasshopper: this.get('grasshopper'),
       qtitle: this.get('qtitle'),
       qbody: this.get('qbody'),
       qnotes: this.get('qnotes')
     };
     this.set('addNewQuestion', false);
     this.sendAction('saveQuestion', params);
   }
 }
});
