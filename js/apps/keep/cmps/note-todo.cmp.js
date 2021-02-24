export default {
    props: ['noteTodo'],
    template: ` <section class="notes-todo">    
      <ul><h2 v-for="title in noteTodo">{{title.info.label}}</h2>
    <li v-for="list in listTodos">{{list.txt}}</li>
    
    
    </ul>

      
    </section>    
    `,
    data() {
        return {
            listTodos: this.noteTodo[0].info.todos,
           
        };
    },
    methods: {},
    computed: {},
    created() {
        console.log('this.listodos', this.listTodos);
    },
};
