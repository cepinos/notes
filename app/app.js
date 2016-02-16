// Here is the starting point for your application code.
// All stuff below is just to show you how it works. You can delete all of it.

import Vue from 'vue';

import Notes from './notes/notes';
import Note from './notes/note';

// Debug mode
Vue.config.debug = true;

/**
 * Filter for ellipsis
 */
Vue.filter('ellipsis', function(value){
  return value.length > 20 ? value.slice(0,20) + '...' : value;
});


/**
 * Render notes using Vue
 */
var notes = new Notes();
new Vue({
  el: '#app',
  data: {
    list: notes.list,
    currentNote: notes.currentNote,
    search: ''
  },
  methods: {
    add: function () {
      var note = new Note();
      notes.add(note);
      this.edit(0);
      this.search = '';
    },
    remove: function (id) {
      notes.delete(id);
      this.currentNote = null;
    },
    edit: function(index){
      this.currentNote = this.list[index];
    },
    save: function(index){
      notes.save();
    },
    current: function(id){
      if(!this.currentNote) return '';
      return this.currentNote.id === id ? 'notes__note--selected' : '';
    }
  }
});