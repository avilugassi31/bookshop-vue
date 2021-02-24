export default {
    props: ['note'],
    template: ` <section class="notes-txt">    
        <p v-for="text in note"> {{text.info.txt}}<button>X</button> </p>
        
      
    </section>    
    `,
    // data() {
    //     return {};
    // },
    methods: {},
    computed: {},
    created() {
        // console.log('this.note', this.note);
    },
};
