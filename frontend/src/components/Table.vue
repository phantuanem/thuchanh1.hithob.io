<template>
  <div>
    <ul>
      <li @click="getList()">All</li>
      <li @click="getFavoeitr()">All favorite</li>
      <li @click="deleteAll()">Delete all</li>
      <li>
        <input type="text" placeholder=" Name" v-model="search">
        <button @click="onSearch()">Tìm kiếm</button>
      </li>
    </ul>
  <table>
    <thead>
      <tr>
        <th>STT</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Address</th>
        <th>Favorite</th>
        <th></th>
      </tr>
    </thead>
    <Item v-for="(item, index) in list" :item="item" :index="index" :key="index" :update="update" :onUpdate="onUpdate"/>
  </table>
  </div>
</template>

<script>
import axios from 'axios'
import Item from './Item'

export default {
  name: 'From',
  props: ['update', 'onUpdate'],
  data(){
    return {
      list: [],
      search: ''
    }
  },
  components: {
    Item
  },
  methods: {
    // Lay danh sach tu mongoedb
    async getList(){
      await axios.get('http://localhost:3000/api/all').then((res) => {
        this.list = [...res.data]
      })
      this.search =''
    },

    // Lay danh sach theo favorite = true
    async getFavoeitr(){
      await await axios.get('http://localhost:3000/api/favorite').then((res) => {
        this.list = [...res.data]
      })
      this.search =''
    },

    // Tim kiem theo name
    async onSearch(){
      await axios.get('http://localhost:3000/search', { params: {name: this.search}}).then((res) => {
        this.list = [...res.data]
      })
    },

    // Xoa tat ca
    async deleteAll(){
      await axios.delete('http://localhost:3000/daleteall').then((res) => {
        this.list = [...res.data]
      })    }
  },
  mounted(){
    this.getList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
    width: 90%;
    margin: 10px 5%;
    text-align: center;
}
table>thead>tr {
    background: #b2ff32;
}
th {
    padding: 5px;
}
ul {
    width: 90%;
    margin: 5px 5%;
    list-style: none;
    font-size: 18px;
}

li {
    float: left;
    padding: 5px 10px;
    margin-right: 5px;
    border: 1px solid #00000045;
    cursor: pointer;
    background: #ebf3ff;
}
li:hover {
    background: #9f9fdb;
}
input[type="text"] {
    padding: 5px;
}
button {
    padding: 5px 10px;
    background: #ceff7d;
    cursor: pointer;
}
</style>
