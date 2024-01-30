const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      slides: [
        {
          name: "Jagrid",
          src: "Jagrid.png",
        },
        {
          name: "Jaquaman",
          src: "Jaquaman.png",
        },
        {
          name: "Jhanos",
          src: "Jhanos.png",
        },
        {
          name: "Jhon Of Thrones",
          src: "Jhon-of-thrones.png",
        },
        {
          name: "Jhon Of War",
          src: "Jhon-of-War.png",
        },
        {
          name: "Jimli",
          src: "Jimli.png",
        },
        {
          name: "Jonnavacciuolo",
          src: "Jonnavacciuolo.png",
        },
        {
          name: "Jonathus Silente",
          src: "Jonathus.png",
        },
      ],

      activeIndex: 0,
      sliderHeight: 0,
    };
  },

  computed: {
    slidesPosition() {
      return -1 * this.sliderHeight * this.activeIndex;
    },
  },

  methods: {
    changeSliderHeight() {
      const element = this.$refs.slidesContainer;
      const height = element.offsetHeight;
      this.sliderHeight = height;
    },

    goToNext() {
      if (this.activeIndex < this.slides.length - 1) {
        this.activeIndex++;
      } else {
        this.activeIndex = 0;
      }
    },

    goToPrev() {
      if (this.activeIndex > 0) {
        this.activeIndex--;
      } else {
        this.activeIndex = this.slides.length - 1;
      }
    },

    goToSlide(n) {
      this.activeIndex = n;
    },

    scrollThumb() {
      const element = this.$refs.thumb[this.activeIndex];
      element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    },
  },

  beforeUpdate() {
    const element = this.$refs.slidesContainer;
    element.style.transition = "var(--sliding-trans)";
    element.style.top = `${this.slidesPosition}px`;
    this.scrollThumb();
  },

  updated() {
    const element = this.$refs.slidesContainer;
    element.style.transition = "0s";
  },

  mounted() {
    const element = this.$refs.slidesContainer;
    window.addEventListener("resize", () => {
      this.changeSliderHeight();
      element.style.top = `${this.slidesPosition}px`;
    });

    this.changeSliderHeight();
    console.log(this.sliderHeight);
    element.style.top = `${this.slidesPosition}px`;

    this.scrollThumb();
  },
});

app.mount("#external-wrapper");
