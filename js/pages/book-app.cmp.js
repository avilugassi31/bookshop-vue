import { bookService } from '../services/book-service.js';
import bookFilter from '../cmps/book-filter.cmp.js';
import bookList from '../cmps/book-list.cmp.js';
import bookDetails from '../pages/book-details.cmp.js';

export default {
    template: `
        <section class="book-app">
       
            <book-filter @filtered="setFilter"/>
            <book-list @selected="selectBook" @removeBook="removeBook" :books="booksToShow"/> 
            <book-details v-if="selectedBook" :book="selectedBook" @close="selectedBook = null" /> 
        </section>
    `,
    data() {
        return {
            books: bookService.getBooks(),
            filterBy: null,
            selectedBook: null,
        };
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        removeBook(id) {
            bookService.remove(id);
        },
        selectBook(book) {
            this.selectedBook = book;
            console.log(book);
        },
    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books;
            const searchStr = this.filterBy.byTitle.toLowerCase();
            const searchByPrice = this.filterBy.byPrice;
            if (!searchByPrice && !searchStr) return this.books;
            const booksToDisplay = this.books.filter((book) => {
                if (
                    book.title.toLowerCase().includes(searchStr) &&
                    searchByPrice === ''
                ) {
                    console.log('hello');
                    return this.books;
                }

                return (
                    book.title.toLowerCase().includes(searchStr) &&
                    book.listPrice.amount <= searchByPrice
                );
            });
            this.filterBy = null;
            return booksToDisplay;
        },
    },
    components: {
        bookFilter,
        bookList,
        bookDetails,
    },
    created() {},
};
