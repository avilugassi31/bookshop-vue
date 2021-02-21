import bookPreview from './book-preview.cmp.js';

export default {
    props: ['books'],
    template: `
    <section>
        <ul class="book-list-container">
            <li v-for="book in books" :key="book.id" @click="select(book)" class="book-list"><img :src="book.thumbnail" />
                <book-preview  :book="book" @click.native="logId(book.id)"/>
            <button @click="removeBook(book.id)" class="list-btn">x</button>
            </li>
            
        </ul>
    </section>
    `,
    data() {
        return {};
    },
    methods: {
        removeBook(bookId) {
            this.$emit('removeBook', bookId);
        },
        logId(id) {
            // console.log(id);
        },
        select(book) {
            this.$emit('selected', book);
        },
    },
    computed: {},
    components: {
        bookPreview,
    },
    created() {
        console.log(this.books);
    },
};
