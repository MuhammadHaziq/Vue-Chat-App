<template lang="html">
  <div class="container chat">
    <h2 class="text-primary text-center">Real Time Chat</h2>
    <h5 class="text-secondary text-center">Powerd By Vue.js & Firebase</h5>
    <div class="card">
      <div class="card-body">
        <p class="text-secondary nomessages" v-if="messages.length == 0">
          [No messages yet!]
        </p>
        <div class="messages" v-chat-scroll="{ always: false, smooth: true }">
          <div v-for="message in messages" :key="message.id">
            <span class="text-info"> [{{ message.name }}] :</span>
            <span>{{ message.message }} </span>
            <span class="text-secondary time"> {{ message.timestemp }} </span>
          </div>
        </div>
        <div class="card-action">
          <CreateMessage :name="name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CreateMessage from "@/components/CreateMessage";
import fb from "@/firebase/firebaseConnection";
import moment from "moment";
export default {
  name: "Chat",
  props: ["name"],
  components: {
    CreateMessage
  },
  data() {
    return {
      messages: []
    };
  },
  created() {
    // var docRef = fb.collection("messages").doc("HIQhFKgZT7BFUlo3XKAc");
    //
    // docRef
    //   .get()
    //   .then(function(doc) {
    //     if (doc.exists) {
    //       console.log("Document data:", doc.data());
    //     } else {
    //       // doc.data() will be undefined in this case
    //       console.log("No such document!");
    //     }
    //   })
    //   .catch(function(error) {
    //     console.log("Error getting document:", error);
    //   });
    //.orderBy("timestemp")
    let ref = fb.collection("messages");
    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;
          this.messages.push({
            id: doc.data().id,
            name: doc.data().name,
            message: doc.data().message,
            timestemp: moment(doc.data().timestemp).format("LTS")
          });
        }
      });
    });
  }
};
</script>

<style lang="css" scoped>
.chat h2 {
  font-size: 2.6em;
  margin-left: 0px;
}
.chat h5 {
  margin-top: 0px;
  margin-bottom: 40px;
}
.chat span {
  font-size: 1.2em;
}
.chat .time {
  display: block;
  font-size: 0.7em;
}
.messages {
  max-height: 300px;
  overflow: auto;
}
</style>
