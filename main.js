// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

let app = new Vue({
  el: "#app",

  data() {
    return {
      index: 0,
      image: null,
      message: "Malenia, Blade of Miquella",
      images: [
        {
          id: 1,
          src: "https://cdna.artstation.com/p/assets/images/images/046/303/870/4k/caio-santos-dfgdfg.jpg?1644798826",
          alt: "M1",
        },
        {
          id: 2,
          src: "https://cdna.artstation.com/p/assets/images/images/047/618/420/large/kittichai-rueangchaichan-razaras-malenia-elden-ring-fanart-p.jpg?1648030350",
          alt: "M2",
        },
        {
          id: 3,
          src: "https://cdnb.artstation.com/p/assets/images/images/045/755/379/large/alessandro-ferrario-malenia-2.jpg?1643460528",
          alt: "M3",
        },
      ],
    };
  },
  mounted() {
    this.switchImage();
  },
  methods: {
    switchImage() {
      this.image = this.images[this.index];
      this.index = (this.index + 1) % this.images.length;
    },
  },
});
