<template>
  <form class="from" @submit.prevent="onSubmit(item)">
    <h4>Update Contact</h4>
    <div class="group">
      <label>Name</label>
      <input type="text" class="form-control" placeholder="Name" v-model="item.name" autocomplete="off" required>
    </div>

    <div class="group">
      <label>Email</label>
      <input type="text" class="form-control" placeholder=" abc@email.com" v-model="item.email" autocomplete="off" required>
    </div>

    <div class="group">
      <label>Phone</label>
      <input type="text" class="form-control" placeholder="Phone" v-model="item.phone" autocomplete="off" required>
    </div>

    <div class="group">
      <label>Address</label>
      <input type="text" class="form-control" placeholder="Address" v-model="item.address" autocomplete="off" required>
    </div>

    <div class="group">
      <label>Favorite</label>
      <input type="text" class="form-control" placeholder="Fevorite" v-model="item.favorite" autocomplete="off" required>
    </div>

    <button>Update</button>
    <a href="/">Close</a>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  name: 'From',
  props: ['item'],
  methods: {
    async onSubmit(item){
      await axios.put('http://localhost:3000/api/update',{
        id: item._id,
        name: item.name,
        email: item.email,
        phone: item.phone,
        address: item.address,
        favorite: item.favorite
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
a {
    text-decoration: none;
    margin-left: 10px;
    padding: 5px 10px;
    border: 1px solid black;
    background: white;
    border-radius: 5px;
    color: black;
}
</style>
