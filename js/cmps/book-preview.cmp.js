

export default {
    props:['book'],
    template: ` <section>
        <h2> {{book.title}} </h2>
        <h3> {{book.listPrice.amount}} {{book.listPrice.currencyCode}} </h3>
    </section>    
    `,
    data() {
        return {
            
        }
        
    },
    methods: {
        
    },
    computed: {

    },

}
