function idGenerator(){
  return new Date().getTime();
}

function Note(text){
  this.id = idGenerator();
  this.text = text || '';
  this.createdAt = new Date();
  this.updatedAt = this.createdAt;
}

Note.save = function(note){
  const string = JSON.stringify(note);
  localStorage.setItem('Note.' + note.id, string);
  return note;
}


Note.get = function(id){
  const string = localStorage.getItem('Note.' + id);
  const obj = JSON.parse(string);
  return obj;
}

export default Note;