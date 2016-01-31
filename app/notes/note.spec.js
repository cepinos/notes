import Note from './note';

describe('note', function() {
  beforeEach(function(){
    this.note = new Note('buy an unicorn');
  });
  it('Should create a note', function() {
    expect(this.note).toEqual(jasmine.any(Note));
  });

  it('Should set the created at, id and updated at  fields', function() {
    expect(this.note.createdAt).toEqual(jasmine.any(Date));
    expect(this.note.updatedAt).toEqual(jasmine.any(Date));
    expect(this.note.id).toEqual(jasmine.any(String));
    expect(this.note.text).toEqual(jasmine.any(String));
  });

  it('Should read note text', function() {
    expect(this.note.text).toBe('buy an unicorn');
  });

  it('Should edit note', function() {
    this.note.text = 'testing edit';
    expect(this.note.text).toBe('testing edit');
  });

  xit('Should save and get notes', function() {
    var obj = Note.save(this.note);
    var obj2 = Note.get(obj.id);
    expect(obj2.id).toEqual(obj.id);
    expect(obj2.text).toEqual(obj.text);
  });

});