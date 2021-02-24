export default {
    props: ['noteImg'],
    template: ` <section class="notes-img">    
        <img v-for="img in noteImg" :src ="img.info.url"  />
      
    </section>    
    `,
    // data() {
    //     return {};
    // },
    methods: {},
    computed: {},
    created() {
        // console.log('this.note', this.noteImg[0].info.url);
    },
};
