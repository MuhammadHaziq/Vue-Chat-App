<template>
  <div class="container" style="margin-bottom:30px">
    <form @submit.prevent="createMessage">
      <div class="form-group">
        <input
          type="text"
          name="message"
          class="form-control"
          v-model="newMessage"
          placeholder="Enter Message"
        />
        <p class="text-danger" v-if="errorText">{{ errorText }}</p>
      </div>
      <button class="btn btn-primary" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import fb from "@/firebase/firebaseConnection";
export default {
  name: "CreateMessage",
  props: ["name"],
  data() {
    return {
      newMessage: null,
      errorText: null
    };
  },
  methods: {
    createMessage() {
      if (this.newMessage) {
        fb.collection("messages")
          .add({
            message: this.newMessage,
            name: this.name,
            date: Date.now()
          })
          .catch(err => {
            console.log(err.message);
          });
        this.newMessage = null;
        this.errorText = null;
      } else {
        this.errorText = "Please Insert Message First";
      }
    }
  }
};
</script>
