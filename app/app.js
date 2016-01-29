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

console.log('Loaded environment variables:', env);

var app = remote.app;
var appDir = jetpack.cwd(app.getAppPath());

// Holy crap! This is browser window with HTML and stuff, but I can read
// here files like it is node.js! Welcome to Electron world :)
console.log('The author of this app is:', appDir.read('package.json', 'json').author);

/*
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('greet').innerHTML = greet();
    document.getElementById('platform-info').innerHTML = os.platform();
    document.getElementById('env-name').innerHTML = env.name;
});
*/

$(document).on('ready',function(){
  var notes = new Notes();

  var render = function(){
    $('#notesList').html('');
    Object.keys(notes.list).forEach(function(key){
      $('#notesList').append('<li>').append(notes.list[key].text);
    });
  }
  render();

  $('#add').on('click',function(e){
    var note = new Note('buy un unicorn');
    notes.add(note);
    render();
  })
});