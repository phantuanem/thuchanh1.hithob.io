<template>
  <form class="from" @submit.prevent="onSubmit">
    <h4>Create Contact</h4>
    <div class="group">
      <label>Name</label>
      <input type="text" class="form-control" placeholder="Name" v-model="name" autocomplete="off" required>
    </div>

    <div class="group">
      <label>Email</label>
      <input type="text" class="form-control" placeholder=" abc@email.com" v-model="email" autocomplete="off" required>
    </div>

    <div class="group">
      <label>Phone</label>
      <input type="text" class="form-control" placeholder="Phone" v-model="phone" autocomplete="off" required>
    </div>

    <div class="group">
      <label>Address</label>
      <input type="text" class="form-control" placeholder="Address" v-model="address" autocomplete="off" required>
    </div>

    <div class="group">
      <label>Favorite</label>
      <input type="text" class="form-control" placeholder="Fevorite" v-model="favorite" autocomplete="off" required>
    </div>

    <button>Save</button>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  name: 'From',
  data(){
    return {
      name: '',
      email: '',
      phone: '',
      address: '',
      favorite: ''
    }
  },
  methods: {
    //Tao contact moi
    async onSubmit(){
      await axios.post('http://localhost:3000/api/post',{
        name: this.name,
        email: this.email,
        phone: this.phone,
        address: this.address,
        favorite: this.favorite
      }).then((res) => {
        console.log(res.data)
      })
      window.location.reload()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.from {
    width: 30%;
    padding: 20px;
    background: #adc0ff;
    border-radius: 10px;
        margin: 0 auto;
}
input.form-control {
    display: block;
    font-size: 16px;
    padding: 3%px;
    outline: none;
    width: 94%;
}
button {
    padding: 5px 10px;
    border-radius: 5px;
    margin-top: 10px;
    background: #57ff57;
    cursor: pointer;
}
h4 {
    text-align: center;
    margin: 0;
    color: black;
    margin-bottom: 10px;
}
</style>
