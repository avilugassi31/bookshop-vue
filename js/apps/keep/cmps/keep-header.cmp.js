export default {
    template: `
   <header class="keep-header">
       <div class="header-buttons">
       <button class="header-btn">a</button>
       <button class="header-btn">b</button>
       <button class="header-btn">c</button>
    </div>
    <input type="text" @change="setFilter" v-model="filterBy" placeholder="Search By Name"/>
       
    </header>
    `,
    data() {
        return {
            filterBy:'',
        };
    },
    methods: {
        setFilter() {
            this.$emit('filtered', this.filterBy);
        },
    },
};
