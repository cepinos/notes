import Note from './note';

function Notes(){
  this.list = [];
  this.currentNote;
  this.load();
}

Notes.prototype.add = function(note){
    this.list.unshift(note);
    this.save();
  }

Notes.prototype.save = function(){
  const string = JSON.stringify(this.list);
  localStorage.setItem('Notes', string);
}

Notes.prototype.delete = function(id){
  var noteIndex;

  if (this.count() === 0) return;

  noteIndex = this.list.findIndex(function(note){
    return note.id === id;
  });

  if(noteIndex !== -1){
    this.list.splice(noteIndex, 1);
  }

  this.save();
}

Notes.prototype.load = function(){
  const string = localStorage.getItem('Notes');
  this.list = JSON.parse(string) || [];
}

Notes.prototype.count = function(){
  return Object.keys(this.list).length;
}

export default Notes;