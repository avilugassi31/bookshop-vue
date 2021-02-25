import { keepService } from '../services/keep-app.service.js';
import { utilService } from '../services/util.service.js';
import keepHeader from '../cmps/keep-header.cmp.js';
import noteTxt from '../cmps/note-txt.cmp.js';
import noteImg from '../cmps/note-img.cmp.js';
import noteVideo from '../cmps/note-video.cmp.js';
import noteTodo from '../cmps/note-todo.cmp.js';
import addNote from '../pages/add-note.cmp.js';
import { eventBus } from '../../../services/event-bus-service.js';

export default {
    template: `
        <section class="keep-app">
            <div class="edit-tools">
            <input type="text" @keyup.enter="addNote" v-model="newNoteTxt.info.txt" placeholder="Add Text Note"/>
            <input type="text" @keyup.enter="addNoteImg" v-model="newNoteImg.info.url" placeholder="Add Image Url"/>
            <input type="text" @keyup.enter="addNoteTodo" v-model="newNoteTodo.info.todos[0].txt" placeholder="Add Todo"/>
            <!-- <input type="text" @keyup.enter="addNoteVideo" v-model="newNoteVideo.info.url" placeholder="Add Video Url"/> --> 
             <input style="display:none" ref="fileInput" type="file" @change="onFileImgSelected"/>
          <button @click="$refs.fileInput.click()">Choose File</button>
          <button @click="onUploadImg">upload</button> 
           
        </div>
    <!-- <keep-header @filtered="setFilter"/> -->
     <note-txt  v-if="notes" :note="notesTextToShow" @removeTxtNote="removeTextNote" @setColor="setColor"/>
    <note-todo v-if="notes" :noteTodo="notesTodoToShow" @removeTodo="removeTodoNote"/>
    <note-img  v-if="notes" :noteImg="notesImgToShow" @removeImgNote="removeImgNote" />
     <!-- <note-video :noteVideo="notesVideoToShow"/>  -->
        </section>
    `,
    data() {
        return {
            filterBy: null,
            notes: null,
            selectedImg: null,
            newNoteTxt: {
                type: 'NoteTxt',
                id: utilService.makeId(),
                color: '',
                info: {
                    isPinned: true,
                    txt: '',
                    color: '',
                },
            },
            newNoteTodo: {
                type: 'NoteTodos',
                info: {
                    label: 'What To Do:',
                    todos: [
                        { txt: '', doneAt: null, id: utilService.makeId() },
                    ],
                },
            },
            newNoteImg: {
                type: 'NoteImg',
                id: utilService.makeId(),
                info: {
                    url: '',
                    title: 'Me playing Mi',
                },
                style: {
                    backgroundColor: '#00d',
                },
            },
            newNoteVideo: {
                type: 'NoteVideo',
                id: utilService.makeId(),
                info: {
                    url: '',
                },
            },
        };
    },
    methods: {
        onFileImgSelected(event) {
            this.selectedImg = event.target.files[0];
        },
        onUploadImg() {
            const fd = new FormData();
            console.log('fd:', fd);
            fd.append('image', this.selectedImg, this.selectedImg.name);
            console.log('fd:', fd);
            keepService.save(fd).then((res) => {
                res = this.newNoteImg;
                this.notes.push(res);
            });
        },

        loadKeeps() {
            console.log('notes lodeKeeps',this.notes)
            keepService.query().then((notes) => {
                this.notes = notes;
                console.log('notes:', this.notes)
            });
        },
        addNote() {
            const newNote = JSON.parse(JSON.stringify(this.newNoteTxt));
            keepService
                .save(newNote)
                .then((note) => {
                    this.notes.push(note);
                })
                .then(() => {
                    const msg = {
                        txt: 'Note Added succesfully',
                        type: 'success',
                    };
                    eventBus.$emit('show-msg', msg);
                })
                .catch((err) => {
                    console.log(err);
                    const msg = {
                        txt: err.message,
                        type: 'error',
                    };
                    eventBus.$emit('show-msg', msg);
                });
            // this.$router.push('/');
        },
        addNoteImg() {
            this.notes.push(this.newNoteImg);
        },
        addNoteTodo() {
            this.notes.push(this.newNoteTodo);
            keepService.save(this.newNoteTodo);
        },
        addNoteVideo() {
            this.notes.push(this.newNoteVideo);
        },
        removeTextNote(id) {
            // console.log('id:', id);
            keepService.remove(id).then(this.loadKeeps);
        },
        removeImgNote(id) {
            // console.log('id:', id);
            keepService.remove(id).then(this.loadKeeps);
        },
        removeTodoNote(id) {
            console.log(this.notes);
            keepService.remove(id).then(this.loadKeeps);
            console.log('after', this.notes);
        },
        setColor(id, color) {
            console.log('color', color, id);
            keepService.getById(id)
            .then(note=>{
                note.color = color;
                keepService.save(note)
                console.log('note:', this.notes)
            })
            // this.newNoteTxt.info.color = color;
        },
    },
    computed: {
        // setFilter(filterBy) {
        //     this.filterBy = filterBy;
        //     console.log(' this.filterBy:', this.filterBy);
        // },
        notesTextToShow() {
            // this.notes = keepService.getNotes();
            // console.log('this.notes:', this.notes);
            const noteTxt = this.notes.filter((note) => {
                return note.type === 'NoteTxt';
            });
            return noteTxt;
        },
        notesImgToShow() {
            const noteImg = this.notes.filter((note) => {
                return note.type === 'NoteImg';
            });
            return noteImg;
        },
        notesVideoToShow() {
            const noteVideo = this.notes.filter((note) => {
                return note.type === 'NoteVideo';
            });
            return noteVideo;
        },
        notesTodoToShow() {
            const noteTodo = this.notes.filter((note) => {
                return note.type === 'NoteTodos';
            });
            return noteTodo[0].info.todos;
        },
    },
    components: {
        keepHeader,
        noteTxt,
        noteImg,
        noteVideo,
        noteTodo,
        addNote,
    },
    created() {
        this.loadKeeps();
        
    },
};
