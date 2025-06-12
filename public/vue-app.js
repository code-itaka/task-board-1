const { createApp } = Vue;

createApp({
  data() {
    return {
      tasks: [
        { title: "Task 1", description: "", reward: "" },
        { title: "Task 2", description: "Read 10 pages", reward: "Tea & calm" },
        { title: "Task 3", description: "No phone until 12", reward: "Mental clarity" },
      ]
    };
  }
}).mount('#app');