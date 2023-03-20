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
                    { name: 'Julie', age: 20, color: 'red', img: 'assets/img/1.jpg', isFav: true },
                    { name: 'Karl', age: 26, color: 'blue', img: 'assets/img/2.jpg', isFav: false },
                    { name: 'Zayne', age: 24, color: 'green', img: 'assets/img/3.jpg', isFav: true },
                    { name: 'Ann', age: 25, color: 'green', img: 'assets/img/3.jpg', isFav: false }
                ]
            }
        },
        methods: {
            toggleShowDiv() {
                this.showCounter = !this.showCounter;
            },
            toggleFav(person) {
                person.isFav = !person.isFav;
            },
            handleEvent(event, data) {
                console.log(event, event.type)
                if (data) {
                    console.log(data)
                }
            },
            // On index2.html
            // handleMousemove(event) {
            //     this.x = event.offsetX;
            //     this.y = event.offsetY;
            // },
        },
        computed: {
            filteredPeople() {
                return this.people.filter((person) => person.isFav)
            }
        },
    }
)


app.mount('#app')