<template>
  <tbody>
    <tr>
      <td>{{index+1}}</td>
      <td>{{item.name}}</td>
      <td>{{item.email}}</td>
      <td>{{item.phone}}</td>
      <td>{{item.address}}</td>
      <td>{{item.favorite}}</td>
      <td>
        <button @click="onUpdate(item, false)">Update</button>
        <button @click="onDelete(item)">Delete</button>
      </td>
    </tr>
  </tbody>  
</template>

<script>
  import axios from 'axios'

export default {
  name: 'Item',
  props: ['item', 'index', 'onUpdate'],
  methods: {
    // Xoa mot contact
    async onDelete(item){
      await axios.delete('http://localhost:3000/delete',{
        params: {id: item._id}
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
</style>
