import Note from './note';

function Notes(){
  this.list = [];
  this.currentNote = {};
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
  var note;

  if (this.count() === 0) return;

  note = this.list.find(function(note){
    return note.id === id;
  });

  if(note) this.list.$remove(note);

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