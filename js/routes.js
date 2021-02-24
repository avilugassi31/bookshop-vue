
import homePage from './pages/home-page.cmp.js';
import bookApp from './apps/Books/pages/book-app.cmp.js';
import bookDetails from './apps/Books/pages/book-details.cmp.js';

import keepApp from './apps/keep/pages/keep-app.cmp.js';
import emailApp from './apps/email/pages/email-app.cmp.js';
import about from './pages/about.cmp.js';

const aboutTeam = {
    template: `
        <section>
            <h2 class="about-title">Our Team is Amazing!</h2>
            <p class="about-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, porro odit minima vitae aspernatur, dolore explicabo eius ut ducimus numquam laborum repudiandae assumenda suscipit non perferendis obcaecati inventore vel est!</p>
        </section>
    `,
};
const aboutServices = {
    template: `
        <section>
            <h2 class="about-title">Our Services are Awesome</h2>
            <p class="about-description">Services are Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, porro odit minima vitae aspernatur, dolore explicabo eius ut ducimus numquam laborum repudiandae assumenda suscipit non perferendis obcaecati inventore vel est!</p>
            <!-- <h4>We are everywhere</h4>
            <input type="text" ref="loc" placeholder="Your location" /> -->
        </section>
    `,
    mounted() {
        // const el = this.$refs.loc;
        // el.focus();
        // el.scrollIntoView();
    },
};

const routes = [
    {
        path: '/',
        component: homePage,
    },
    {
        path: '/book',
        component: bookApp,
    },
    {
        path: '/about',
        component: about,
        children: [
            {
                path: 'team',
                component: aboutTeam,
            },
            {
                path: 'services',
                component: aboutServices,
            },
        ],
    },
    {
        path: '/book/:bookId',
        component: bookDetails,
    },
    {
        path:'/keep',
        component:keepApp
    },
    {
        path:'/email',
        component:emailApp
    },
];

export const myRouter = new VueRouter({ routes });
