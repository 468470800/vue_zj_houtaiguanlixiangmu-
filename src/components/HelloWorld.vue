<template>
  <div class="hello">
    <ul>
      <li v-for="(item,index) in list" :key="index">{{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
  // import request from '../utils/request'
import testApi from "../api/test"
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: function(){
    return {
      list:[]
    }
  },
  created(){
    testApi.getBanner().then(res=>{
      console.log(res);
      this.list = res.data;
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
