

import bookApp from './pages/book-app.cmp.js'

const options = {
    el: '#app',
    template: `<section> 
        <book-app />
         </section>`,
         
    components: {bookApp}
    
}

new Vue(options)





























