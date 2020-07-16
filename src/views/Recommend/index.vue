<template>
  <div id="main">
    <Header />
    <div id="content">
      <div class="pw">
      <div class="recommend_menu">
        <div class="hot_swtich">
          <router-link tag="div" to="/recommend/songSheet" class="hot_item">推荐音乐</router-link>
          <router-link tag="div" to="/recommend/Header" class="hot_item">热敷榜单</router-link>
          <router-link tag="div" to="/recommend/Header" class="hot_item">搜索</router-link>
        </div>
      </div>
      </div>
          <keep-alive>
            <router-view />
          </keep-alive>
    </div>    
    <TagBar />
  </div>
</template>

<script>
import Header from "@/components/Header";
import TagBar from "@/components/TagBar";
export default {
  name: "Recommend",
  components: {
    Header,
    TagBar
  }
};
</script>

<style scoped>
#content .pw{
  width: 100%;
  height: 40px;
}
#content .recommend_menu {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  z-index: 10;
  position: fixed;
  top: 64px;
}
.recommend_menu .hot_swtich{display: flex;width: 100%;height: 100%;line-height: 40px;}
.recommend_menu .hot_item{font-size: 15px;width: 100%;text-align: center;font-weight: 0;}
.recommend_menu .hot_item.active{color: #dd001b;border-bottom: 2px solid #dd001b;}
.recommend_menu .hot_item.router-link-active{color: #dd001b;border-bottom: 2px solid #dd001b;}
</style>