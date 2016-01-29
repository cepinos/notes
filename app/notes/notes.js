function Notes(){
  this.list = {};
  this.load();
}

Notes.prototype.add = function(note){
    this.list[note.id] = note;
    this.save();
  }

Notes.prototype.save = function(){
  const string = JSON.stringify(this.list);
  localStorage.setItem('Notes', string);
}

Notes.prototype.delete = function(id){
  if (this.count() === 0) return;
  delete this.list[id];
}

Notes.prototype.load = function(){
  const string = localStorage.getItem('Notes');
  this.list = JSON.parse(string) || {};
}

Notes.prototype.count = function(){
  return Object.keys(this.list).length;
}
export default Notes;