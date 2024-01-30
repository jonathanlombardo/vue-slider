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
      this.changeSliderHeight();
      return `top: ${-1 * this.sliderHeight * this.activeIndex}px`;
    },
  },

  methods: {
    changeSliderHeight() {
      this.$nextTick(() => {
        const element = this.$refs.slidesContainer;
        const height = element.offsetHeight;
        // element.style.transition = "0s";
        console.log(this.$refs.slidesContainer);
        this.sliderHeight = height;
        // element.style.transition = "var(--sliding-trans)";
      });
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
      console.log(element);
      element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    },
  },

  updated() {
    this.scrollThumb();
    // this.$refs.slidesContainer.style.transition = "var(--sliding-trans)";
  },

  mounted() {
    window.addEventListener("resize", this.changeSliderHeight);
    this.scrollThumb();
  },
  unmounted() {
    window.removeEventListener("resize", this.changeSliderHeight);
  },
});

app.mount("#external-wrapper");
