export default {
    props: ['noteImg'],
    template: ` <section class="notes-img"> 
        <div class="img-container" v-for="img in noteImg"> 
        <img :src ="img.info.url"  />
        <button @click.stop="removeImage(img.id)">X</button>
</div>
        
    </section>    
    `,
    // data() {
    //     return {};
    // },
    methods: {
        removeImage(id){
            console.log(id);
            this.$emit('removeImgNote',id);
        }
    },
    computed: {},
    created() {
        // console.log('this.note', this.noteImg[0].info.url);
    },
};
