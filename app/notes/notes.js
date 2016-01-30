import Note from './note';

function Notes(){
  this.list = [];
  this.currentNote = new Note('insert note');
  this.load();
}

Notes.prototype.add = function(note){
    this.list = note[note.id];
    this.save();
  }

Notes.prototype.save = function(){
  const string = JSON.stringify(this.list);
  localStorage.setItem('Notes', string);
}

Notes.prototype.delete = function(id){
  if (this.count() === 0) return;
  delete this.list[id];
  this.save();
}

Notes.prototype.load = function(){
  const string = localStorage.getItem('Notes');
  this.list = JSON.parse(string) || {};
}

Notes.prototype.count = function(){
  return Object.keys(this.list).length;
}
export default Notes;