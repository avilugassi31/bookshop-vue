export default {
    props: ['noteImg'],
    template: ` <section class="notes-img"> 
        <div class="img-container" v-for="img in noteImg"> 
        <img :src ="img.info.url"  />
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
        // console.log('this.note', this.noteImg[0].info.url);
    },
};
{/* <ul class="book-list-container">
<li v-for="book in books" :key="book.id" class="book-list">
    <book-preview :book="book" @click.native="selectBook(book.id)"/>
<button @click.stop="removeBook(book.id)" class="list-btn">x</button>
</li>

</ul> */}