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

      this.search = '';
      this.edit(0);
    },
    remove: function (id) {
      notes.delete(id);

      this.currentNote = {};
      this.edit(0);
    },
    edit: function(index){
      if( notes.count() <= 0 ) return;

      this.currentNote = this.list[index];

      // Focus text area
      Vue.nextTick(function(){
        this.$els.editNote.focus();
      }.bind(this));
    },
    save: function(index){
      notes.save();
    },
    current: function(id){
      if(!this.currentNote) return '';

      return this.currentNote.id === id ? 'notes__note--selected' : '';
    }
  },
  ready: function() {
    this.edit(0);
  }
});