export default {
    template: `
    <section class="about app-main">
        <h1 ref="header">About page</h1>
        <button @click="callBus">Call the bus!</button>
    </section>
    `,
    methods: {
        callBus() {
            console.log('emitting puk!');
            eventBus.$emit('puk', 'abc');
            eventBus.$emit('puk2');
        },
    },
};