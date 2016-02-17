import Notes from './notes';
import Note from './note';


describe('notes', function() {
  beforeEach(function(){
    this.notes = new Notes();
  })
  it('Should create notes', function() {
    expect(this.notes).toEqual(jasmine.any(Notes));
    expect(this.notes.count()).toBe(0);
  });

  it('Should add note and delete', function() {
    var note = new Note();
    this.notes.add(note);
    expect(this.notes.count()).toBe(1);

    this.notes.delete(note.id);

    expect(this.notes.count()).toBe(0);
  });

  it('Should not raise error if there is no notes', function() {
    expect(function(){
      this.notes.delete(0)
    }.bind(this)).not.toThrow();
  });

  xit('Should get notes', function() {

  });

  xit('Should sort', function() {

  });

});

