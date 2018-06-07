<template>
  <div id="app">
      <router-link to="one">这是一个</router-link>
      <router-link to="two">这是二个</router-link>
      <Progress :percent="25"></Progress>
    <Switch v-model="switch1" @on-change="change"></Switch>
     <Rate v-model="value"></Rate>
    <Tabs value="name1">
        <TabPane label="标签一" name="name1">标签一的内容</TabPane>
        <TabPane label="标签二" name="name2">标签二的内容</TabPane>
        <TabPane label="标签三" name="name3">标签三的内容</TabPane>
    </Tabs>
    <Switch>
        <span slot="open">开</span>
        <span slot="close">关</span>
    </Switch>
    <Switch>
        <Icon type="android-done" slot="open"></Icon>
        <Icon type="android-close" slot="close"></Icon>
    </Switch>
    <br><br>
    <Switch size="large">
        <span slot="open">开启</span>
        <span slot="close">关闭</span>
    </Switch>
    <router-view/>
  </div>
</template>



<script>
export default {
  name: 'App',
  data () {
            return {
                switch1: false,
                value: 0
            
            }  
        },
        methods: {
            change (status) {
                this.$Message.info('开关状态：' + status);
            }
        }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
