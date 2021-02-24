export default {
    props: ['noteVideo'],
    template: ` <section class="notes-video"> 
        <div class="video-container" v-for="video in noteVideo">   
         <iframe :src="video.info.url" class='iframe' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' width='300' height='200' >
             </iframe> 
             <button>X</button>
</div>
    </section>    
    `,
    // data() {
    //     return {};
    // },
    methods: {},
    computed: {},
    created() {
        console.log('this.note', this.noteVideo[0].info.url);
    },
};
