// console.log('Hello World');


const app = Vue.createApp(
    {
        data() {
            return {
                url: 'http://www.charleswahome.me',
                showCounter: false,
                count: 0,
                x: 0,
                y: 0,
                people: [
                    { name: 'Max', age: 30, color: 'red', img: 'assets/img/1.jpg' },
                    { name: 'Manu', age: 29, color: 'blue', img: 'assets/img/2.jpg' },
                    { name: 'Julie', age: 28, color: 'green', img: 'assets/img/3.jpg' }
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