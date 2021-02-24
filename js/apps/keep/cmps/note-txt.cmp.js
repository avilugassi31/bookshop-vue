export default {
    props: ['note'],
    template: ` <section class="notes-txt">    
        <p v-for="text in note"> {{text.info.txt}}<button @click.stop="removeNote(text.id)">X</button> </p>
        
      
    </section>    
    `,
    // data() {
    //     return {};
    // },
    methods: {
        removeNote(id){
            // console.log('id:', id)
            this.$emit('removeTxtNote',id);
        }
    },
    computed: {},
    created() {
        // console.log('this.note', this.note);
    },
};
