// console.log('Hello World');


const app = Vue.createApp(
    {
        data() {
            return {
                showCounter: false,
                count: 0,
            }

        },
        methods: {
            toggleShowDiv() {
                this.showCounter = !this.showCounter;
            }
        }
    }
)


app.mount('#app')