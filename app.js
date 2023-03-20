// console.log('Hello World');


const app = Vue.createApp(
    {
        data() {
            return {
                showCounter: false,
                count: 0,
                x: 0,
                y: 0,
                people: [
                    { name: 'Max', age: 30, color: 'red' },
                    { name: 'Manu', age: 29, color: 'blue' },
                    { name: 'Julie', age: 28, color: 'green' }
                ]
            }

        },
        methods: {
            toggleShowDiv() {
                this.showCounter = !this.showCounter;
            },
            handleEvent(event, data) {
                console.log(event, event.type)
                if (data) {
                    console.log(data)
                }
            },
            handleMousemove(event) {
                this.x = event.offsetX;
                this.y = event.offsetY;
            }
        }
    }
)


app.mount('#app')