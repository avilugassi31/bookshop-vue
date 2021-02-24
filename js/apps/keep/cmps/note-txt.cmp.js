export default {
    props: ['note'],
    template: ` <section class="notes-txt">   
        <p v-bind:style="bgc" v-for="text in note"> {{text.info.txt}}<button @click.stop="removeNote(text.id)">X</button> <input  @input="bgc.backgroundColor=$event.target.value" type="color"> </p>
    </section>    
    `,
    data() {
        return {
            bgc: {
                backgroundColor: ''
            }
        };
    },
    methods: {
        removeNote(id){
            // console.log('id:', id)
            this.$emit('removeTxtNote',id);
        },

    },
    computed: {},
    created() {
        // console.log('this.note', this.note);
    },
};

