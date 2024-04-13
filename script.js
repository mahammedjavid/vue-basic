const { createApp, ref } = Vue

createApp({
    data() {
        return {
            todoForm : {
                title : '',
                desc : ''
            },
            listOfData: [],
        }
    },
    methods: {
        addTodo() {
            this.listOfData.push(JSON.parse(JSON.stringify(this.todoForm)))
            this.todoForm.title = ''
            this.todoForm.desc = ''
        }
    }
}).mount('#app')
