export default {
    props: ['note'],
    template: ` <section class="notes-txt">  
        <template  v-for="text in note">
            <section v-bind:style="bgc">
            <!-- <input  @input=" bgc.backgroundColor = $event.target.value;" type="color"> </p> -->


                <p>
                    {{text.info.txt}}
                <button @click.stop="removeNote(text.id)">X</button>
                <input  @input="changeColor(text.id)" value="text.color" type="color"> </p> 
            </section>
        </template> 
    </section>    
    `,
    data() {
        return {
            bgc: {
                backgroundColor: this.note.color,
            },
        };
    },
    methods: {
        removeNote(id) {
            // console.log('id:', id)
            this.$emit('removeTxtNote', id);
        },
        changeColor(id) {
           
            this.$emit('setColor', id, this.bgc);
            this.bgc = '';
        },
    },
    computed: {},
    created() {
        // console.log('this.note', this.note);
    },
};
