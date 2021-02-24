export default {
    props: ['noteAdd'],
    template: ` <section class="add-note">    
        <input type="text" @keyup.enter="addNote" v-model="note.data">
        <button @click="changeNoteType('textNote')">Text</button>
        <button @click="changeNoteType('todoNote')">Todo</button>
        <!-- <p v-for="text in note"> {{text.info.txt}}<button>X</button> </p> -->
        
      
    </section>    
    `,
    data() {
        return {
            note: {
                type: '',
                data: '',
            },
        };
    },
    methods: {
        addNote() {
            this.$emit('noteAdd', this.note);
        },
        changeNoteType(type) {
            this.note.type = type;
            this.note.data = '';
        },
    },
    computed: {},
    created() {
        console.log('this.note', this.noteAdd);
    },
};
