// Here is the starting point for your application code.
// All stuff below is just to show you how it works. You can delete all of it.

import Vue from 'vue';

import Notes from './notes/notes';
import Note from './notes/note';

Vue.config.debug = true;

var notes = new Notes();


new Vue({
  el: '#app',
  data: {
    list: notes.list,
    currentNote: notes.currentNote
  },
  methods: {
    add: function () {
      var note = new Note();
      notes.add(note);
    },
    remove: function (id) {
      notes.delete(id);
    },
    edit: function(index){
      this.currentNote = this.list[index];
    },
    save: function(index){
      notes.save();
    }
  }
});
