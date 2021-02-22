import {bookService} from '../services/book-service.js'


export default {
    props: ['book'],
    template: ` <section>
     <form @submit.prevent="addReview"  class="book-review">
<label >Enter Yor Name</label>
<input ref="nameInput" type="text" placeholder="Books Reader" v-model="review.bookReader"/>
<label >Review Rate</label>
<input type="range" min="0" max="5" step="1" v-model="review.rate"/>
<span v-text="rate"></span>
<input type="date" v-model="review.readAt" value="2021-02-22" placeholder="2021-02-22"> 
<textarea placeholder="Write What You Think" maxlength="50" v-model="review.comment"></textarea>
<button>Submit</button>







     </form>
    </section>    
    `,
    data() {
        return {
            review: {
                bookReader: '',
                rate: 5,
                readAt: null,
                comment: '',
            },
        };
    },
    methods: {
        addReview() {
            bookService.addReview(this.book.id, this.review);
        },
    },
    computed: {
        rate: function () {
            return this.value;
        },
    },
    mounted() {
        // console.log('mounted');
        this.$refs.nameInput.focus();
    },
   

};
