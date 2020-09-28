const app = Vue.createApp({
  data() {
    return {
      name: "Delia",
      age: 28,
      imageUrl: "https://pics.filmaffinity.com/Wonder_Woman-552748603-mmed.jpg",
    }
  },
  methods: {
    ageIn5Years() {
      return this.age + 5
    },
    favoriteNumber() {
      const favoriteNumber = Math.random()
      return favoriteNumber
    },
  },
})

app.mount("#assignment")
