
import { myRouter } from './routes.js';
import appHeader from './cmps/header.cmp.js';
const options = {
    el: '#app',
    router: myRouter,
    template: `<section> 
        <app-header></app-header>
        <router-view/>
        
         </section>`,

    components: {
        appHeader,
    },
};

new Vue(options);
