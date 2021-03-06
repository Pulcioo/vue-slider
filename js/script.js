const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

console.log(slides);

// 1.Partendo dal template fornito renderizzare lo slider con Vue
const app = new Vue(
    {
        el: '#app',
        data: {
            slides,
            activeSlidesIndex: 0,
        },
        methods: {
            // funzione per visualizzare al click l'immagine precedente
            showPrev() {
                if (this.activeSlidesIndex > 0) {
                    this.activeSlidesIndex--
                } else {
                    this.activeSlidesIndex = 4
                }
            },
            // funzione per visualizzare al click l'immagine successiva
            showNext() {
                if (this.activeSlidesIndex < 4) {
                    this.activeSlidesIndex++
                } else {
                    this.activeSlidesIndex = 0
                }
            }
        }
    }
);