const { createApp } = Vue;

createApp({
  data() {
    return {
      tasks: [
        { title: "Task 1", description: "", reward: "" },
        { title: "Task 2", description: "Read 10 pages", reward: "Tea & calm" },
        { title: "Task 3", description: "No phone until 12", reward: "Mental clarity" },
        { title: "Task 3", description: "No phone until 12", reward: "Mental clarity" },
        { title: "Task 3", description: "No phone until 12", reward: "Mental clarity" },
        { title: "Task 3", description: "No phone until 12", reward: "Mental clarity" },
        { title: "Task 3", description: "No phone until 12", reward: "Mental clarity" },
        
      ],
      showModal: false,
      newTask: {
        title: '',
        description: '',
        reward: ''
      }
    };
  },
  methods: {
    openModal(){
      this.showModal = true;
    },
    closeModal(){
      this.showModal = false;
      this.newTask = { title: '', description: '', reward: '' };
    },
    addTask() {
      if (this.newTask.title && this.newTask.description && this.newTask.reward) {
        this.tasks.push({ ...this.newTask });
        this.closeModal();
      }
    }
  }
}).mount('#app');