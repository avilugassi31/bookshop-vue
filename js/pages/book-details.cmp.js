import longText from '../cmps/long-text.cmp.js';

export default {
    props: ['book'],
    template: ` <section class="modal-details">
        <h2> {{book.authors[0]}} </h2>
        <h3 :class="toggleColor" >Price: {{book.listPrice.amount}}{{book.listPrice.currencyCode}} </h3>
        <h4>Page Count: {{pageCount}}</h4>
        <h5>Publish Date: {{publishDate}}</h5>
        <h6 v-if="isOnSale">For Sale: You Can Buy It!!!</h6>
        <long-text  :description="book.description"/>
        <button @click="$emit('close')" class="modal-btn">X</button>
    </section>    
    `,
    data() {
        return {
            currYear: new Date().getFullYear(),
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
    },
};
