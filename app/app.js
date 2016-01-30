// Here is the starting point for your application code.
// All stuff below is just to show you how it works. You can delete all of it.

// Use new ES6 modules syntax for everything.
import os from 'os'; // native node.js module
import { remote } from 'electron'; // native electron module
import jetpack from 'fs-jetpack'; // module loaded from npm
import { notes } from './notes/notes'; // code authored by you in this project
import env from './env';
import Notes from './notes/notes';
import Note from './notes/note';
import Vue from 'vue';

Vue.config.debug = true;

var notes = new Notes();

new Vue({
  el: '#app',
  data: {
    list: notes.list,
    currentNote: notes.currentNote
  },
  methods: {
    addTodo: function () {
      var note = new Note('buy un unicorn');
      notes.add(note);
      this.$set(note.id, note);
    },
    removeTodo: function (index, id) {
      this.$delete(id);
      notes.delete(id);
    },
    edit: function(id){
      debugger;
      this.$set('currentNote', this.$get(id));
    }
  }
});

/*
$(document).on('ready',function(){
  var notes = new Notes();

  var render = function(){
    $('#notesList').html('');
    Object.keys(notes.list).forEach(function(key){
      var li = $('#notesList').append('<li id="'+notes.list[key].id+'">' + notes.list[key].text + '<button id="'+notes.list[key].id+'" class="delete">x</button>' + '</li>');
    });

    $('.delete').on('click', function(e){
      var id = $(this).attr('id');
      notes.delete(id);
      $(this).parent().remove();
    });
  }
  render();

  $('#add').on('click',function(e){
    var note = new Note('buy un unicorn');
    notes.add(note);
    render();
  });

});

*/