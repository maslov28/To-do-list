Vue.createApp({
  data(){
    return {
      note: '',
      noteList: [],
      noteItem: {},
    }
  },
  methods: {
    addNote() {
      if (this.note) {
        noteItem = {
          note: this.note,
          isDone: false,
          time: new Date().toLocaleString()
        }
        this.noteList.push(noteItem);
        this.saveNotes();
        this.note = '';
      }
    },
    saveNotes() {
      localStorage.setItem('noteList', JSON.stringify(this.noteList));
    },
    removeNote(item) {
      this.noteList = this.noteList.filter(i => i.time !== item.time);
      this.saveNotes();
    },
    changeChecked(i) {
      if (this.noteList[i].isDone == false) {
        this.noteList[i].isDone == true;
      }
      else {
        this.noteList[i].isDone == false;
      }
      this.saveNotes();
    } 
  },
  mounted() {
    if (localStorage.getItem('noteList')){
      this.noteList = JSON.parse(localStorage.getItem('noteList'));
    }
  },
  computed: {
    activeNotes() {
      return this.noteList.filter(item => item.isDone == false);
    },
    finishNotes() {
      return this.noteList.filter(item => item.isDone == true);
    }
  }
}).mount('#app');

console.log(new Date().toLocaleString());