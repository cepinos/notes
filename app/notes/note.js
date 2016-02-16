function idGenerator(){
  return 'note_' + new Date().getTime();
}

function Note(text){
  this.id = idGenerator();
  this.text = text || '';
  this.createdAt = new Date();
  this.updatedAt = this.createdAt;
}

export default Note;