import { keepService } from '../services/keep-app.service.js';
import keepHeader from '../cmps/keep-header.cmp.js';
import noteTxt from '../cmps/note-txt.cmp.js';
import noteImg from '../cmps/note-img.cmp.js';
import noteVideo from '../cmps/note-video.cmp.js';
import noteTodo from '../cmps/note-todo.cmp.js';

export default {
    template: `
        <section class="keep-app">
            <div class="edit-tools">
            <input type="text" v-model="newNoteTxt.info.txt" placeholder="Add Text Note">
            <button @click.prevent="addNote">Add Text Note</button>
            <button>Add img</button>
            <button>Add video</button>
            <button>Add todo</button>
        </div>
    <!-- <keep-header @filtered="setFilter"/> -->
    <note-txt :note="notesTextToShow" />
    <note-todo :noteTodo="notesTodoToShow"/>
    <note-img :noteImg="notesImgToShow" />
    <note-video :noteVideo="notesVideoToShow"/>


            
           
        </section>
    `,
    data() {
        return {
            filterBy: null,
            notes: null,
            newNoteTxt: {
                type: 'NoteTxt',
                isPinned: true,
                info: {
                    txt: '',
                },
            },
        };
    },
    methods: {
        addNote() {
            this.notes.push(this.newNoteTxt)

        },
    },
    computed: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
            console.log(' this.filterBy:', this.filterBy);
        },
        notesTextToShow() {
            // this.notes = keepService.getNotes();
            console.log('this.notes:', this.notes);
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
            return noteTodo;
        },
    },
    components: {
        keepHeader,
        noteTxt,
        noteImg,
        noteVideo,
        noteTodo,
    },
    created() {
        this.notes = keepService.getNotes();
    },
};
