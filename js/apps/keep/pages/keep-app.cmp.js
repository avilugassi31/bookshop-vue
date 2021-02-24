import { keepService } from '../services/keep-app.service.js';
import { utilService } from '../services/util.service.js';
import keepHeader from '../cmps/keep-header.cmp.js';
import noteTxt from '../cmps/note-txt.cmp.js';
import noteImg from '../cmps/note-img.cmp.js';
import noteVideo from '../cmps/note-video.cmp.js';
import noteTodo from '../cmps/note-todo.cmp.js';
import addNote from '../pages/add-note.cmp.js';
import { storageService } from '../services/async-storage-service.js';

export default {
    template: `
        <section class="keep-app">
            <div class="edit-tools">
            <input type="text" @keyup.enter="addNote" v-model="newNoteTxt.info.txt" placeholder="Add Text Note"/>
            <input type="text" @keyup.enter="addNoteImg" v-model="newNoteImg.info.url" placeholder="Add Image Url"/>
            <input type="text" @keyup.enter="addNoteTodo" v-model="newNoteTodo.info.todos[0].txt" placeholder="Add Todo"/>
            <input type="text" @keyup.enter="addNoteVideo" v-model="newNoteVideo.info.url" placeholder="Add Video Url"/>
          
           
        </div>
    <!-- <keep-header @filtered="setFilter"/> -->
    <!-- <add-note @noteAdd="addNote" :noteAdd="noteAdd"/> -->
     <note-txt  v-if="notes" :note="notesTextToShow" @removeTxtNote="removeTextNote" @color="setColor"/> 
    <note-todo v-if="notes" :noteTodo="notesTodoToShow" @removeTodo="removeTodoNote"/>
    <note-img  v-if="notes" :noteImg="notesImgToShow" @removeImgNote="removeImgNote" />
    <!-- <note-video :noteVideo="notesVideoToShow"/>        -->
        </section>
    `,
    data() {
        return {
            filterBy: null,
            notes: null,
            newNoteTxt: {
                type: 'NoteTxt',
                id: utilService.makeId(),
                isPinned: true,
                info: {
                    txt: '',
                    color: '',
                },
            },
            newNoteTodo: {
                type: 'NoteTodos',
                info: {
                    label: 'What To Do:',
                    todos: [{ txt:'', doneAt: null, id: utilService.makeId() }],
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
        loadKeeps() {
            keepService.getNotes().then((notes) => {
                // console.log('notes:', notes)
                this.notes = notes;
                

            });
        },
        addNote() {
            const newNote = JSON.parse(JSON.stringify(this.newNoteTxt));
            this.notes.push(newNote);

        },
        addNoteImg() {
            this.notes.push(this.newNoteImg);
        },
        addNoteTodo() {
            this.notes.push(this.newNoteTodo);
            keepService.save(this.newNoteTodo)
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
            console.log(this.notes)
            keepService.remove(id).then(this.loadKeeps);
            console.log('after',this.notes)
        },
        setColor(color) {
            console.log('color',color)
            this.newNoteTxt.info.color = color
        }
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
