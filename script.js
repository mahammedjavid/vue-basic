const { createApp, ref } = Vue

createApp({
    data() {
        return {
            listOfData: [],
            inputValue: ''
        }
    },
    methods: {
        addGoal() {
            this.listOfData.push(this.inputValue)
            this.inputValue = ''
        }
    }
}).mount('#app')
