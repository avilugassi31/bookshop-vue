export default {
    template: `
   <header class="keep-header">
       <div class="header-buttons">
     
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
