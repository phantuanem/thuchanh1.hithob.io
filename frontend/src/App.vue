<template>
  <div id="app">
    <Form v-show="isActive"/>
    <Update v-show="!isActive" :item="item"/>
    <Table :onUpdate="onUpdate"/>
  </div>
</template>

<script>
import Form from './components/Form'
import Table from './components/Table'
import Update from './components/Update'

export default {
  name: 'App',
  data() {
    return{
      isActive: true,
      item: null,
      search: ''
    }
  },
  methods: {
    // Cap nhat mot contact
    onUpdate(item, isActive){
      this.item=item
      this.isActive = isActive
      console.log(this.item)
    }
  },
  components: {
    Form,
    Table,
    Update
  }
}
</script>

<style>
</style>
