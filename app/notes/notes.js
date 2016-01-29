import Note from './note';

function Notes(){
  this.list = [];
  this.currentNote = new Note('test');
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
  if (this.count() === 0) return;
  this.list.forEach(function(note){
    if (note.id === id){
      console.log(this.list);
      this.list.$remove(note);
    };
  }.bind(this));
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