const testimonials = [
    {
        text: "“Let your plans be dark and impenetrable as night, and when you move, fall like a thunderbolt.”",
        photoUrl: "imagens/suntzu2.jpg",
    },
    {
        text: "“To know your Enemy, you must become your Enemy.”",
        photoUrl: "imagens/suntzu1.jpg",

    },
    {
        text: "“If you wait by the river long enough, the bodies of your enemies will float by.”",
        photoUrl: "imagens/suntzu3.jpg",

    },
]

const imgEl = document.getElementById('imagem');
const textEl = document.getElementById('frase');

let idx = 0;

updateTestimonial();

function updateTestimonial() {
    const { text, photoUrl } = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    idx++;
    if (idx === testimonials.length) {
        idx = 0;
    }
    setTimeout(() => {
        updateTestimonial();

    }, 6000);
}










