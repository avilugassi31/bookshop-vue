import longText from '../cmps/long-text.cmp.js';
import bookReview from '../cmps/book-review.cmp.js';
import { bookService } from '../services/book-service.js';

export default {
    template: ` <section v-if="book" class="modal-details">
        <div class="book-details">
        <h2> {{book.authors[0]}} </h2>
        <h3 :class="toggleColor" >Price: {{book.listPrice.amount}}{{book.listPrice.currencyCode}} </h3>
        <h4>Page Count: {{pageCount}}</h4>
        <h5>Publish Date: {{publishDate}}</h5>
        <h6 v-if="isOnSale">For Sale: You Can Buy It!!!</h6>
        <long-text  :description="book.description"/>
        </div>
        <book-review :book="book"/>
        <router-link to="/book">Back To Book List</router-link>
    </section>    
    `,
    data() {
        return {
            currYear: new Date().getFullYear(),
            book: null,
        };
    },
    methods: {},
    computed: {
        pageCount() {
            if (this.book.pageCount > 500) return 'Long';
            else if (this.book.pageCount > 200) return 'Decent';
            else return 'Short';
        },
        publishDate() {
            if (this.currYear - this.book.publishedDate > 10) {
                return ' Veteran Book';
            } else return 'New Book';
        },
        toggleColor() {
            return {
                red: this.book.listPrice.amount > 150,
                green: this.book.listPrice.amount < 100,
            };
        },
        isOnSale() {
            return this.book.listPrice.isOnSale;
        },
    },
    components: {
        longText,
        bookReview,
    },
    created() {
        const id = this.$route.params.bookId;
        console.log('id:', id);
        bookService.getById(id).then((book) => (this.book = book));
    },
};
