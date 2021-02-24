export default {
    props: ['noteTodo'],
    template: ` <section class="notes-todo">    
      <ul>
    <li v-for="note in noteTodo">{{note.txt}}
        <button>X</button>
    </li>
    
    
    </ul>

      
    </section>    
    `,
    data() {
        return {
            // listTodos: this.noteTodo[0].info.todos,
           
        };
    },
    methods: {},
    computed: {},
    created() {
        console.log('this.listodos', this.noteTodo);
    },
};
