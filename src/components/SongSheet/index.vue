<template>
    <div class="Recommend_body" ref="Recommend_body">
        <Loading v-if="isLoading"/>
        <Scroller v-else :handleToScroll="handleToScroll" :handleToTouchEnd="handleToTouchEnd">
        <h1><span>|</span>推荐歌单</h1>
        <ul>
                <div class="pic_show">
            <li v-for="item in result" :key="item.id">
                <div class="pic_img">
                    <img :src="item.picUrl" @tap="handleToDetail()">
                    <span class="u-earp"><img src="@/assets/er.png">75.9万</span>
                    <h1>{{item.name}}</h1>
                </div>
            </li>
                </div>
        </ul>
        <h1><i>|</i></h1>
        <h1><span>|</span>最新音乐</h1>
        <ul>
            <div class="pic_hot">
                <li v-for="item in Results" :key="item.id">
                    <div class="pic-mi">
                    <div class="hot_mi">
                        <h3>{{item.name}}</h3>
                        <p><img src="@/assets/new.png"><span>{{item.song.name}}</span></p>
                    </div>
                    <div class="hot_vb">
                        <img src="@/assets/pof.png" alt="">
                    </div>
                    </div>
                </li>
            </div>
        </ul>
        </Scroller>
    </div>
</template>

<script>
export default {
    name:'SongSheet',
    data(){
        return{
            result:[],
            Results:[],
            isLoading:true
        };
    },
    activated() {
        this.axios.get('/personalized').then((res)=>{
            var code=res.data.code;
            if(code==200){
                this.isLoading=false;
                this.result=res.data.result;
            }
        });
        this.axios.get('/personalized/newsong').then((res)=>{
            var code=res.data.code;
            if(code==200){
                this.isLoading=false;
                this.Results=res.data.result;
            }
        });
    },
    methods: {
    handleToDetail() {
    //   console.log(movieId);
      this.$router.push('/ListDetails');
      console.log("123");
    },
    handleToScroll(pos){

    },
    handleToTouchEnd(pos){

    }
    }
}
</script>

<style scoped>
.Recommend_body{width: 100%;}
.Recommend_body h1{font-size: 18px;font-family: 'Courier New', Courier, monospace;margin: 12px 0px;}
.Recommend_body h1 i{color: white;}
.Recommend_body h1 span{color: #d33a31;}
.Recommend_body .pic_show{width: 100%;}
.Recommend_body .pic_show li{float: left;}
.Recommend_body .pic_show .pic_img{width: 125px;height: 161px;}
.Recommend_body .pic_show .pic_img img{width: 122px;height: 122;}
.Recommend_body .pic_show .pic_img .u-earp{position: absolute;margin-left: -58px;font-size: 10px;color: white;}
.Recommend_body .pic_show .pic_img .u-earp img{width: 15px;height: 15px;top: 4px;position: relative;}
.Recommend_body .pic_show .pic_img h1{font-size: 10px;margin: 0px;}
.Recommend_body .pic_hot{width: 100%;}
.Recommend_body .pic-mi{width: 100%;height: 46px;}
.Recommend_body .pic_hot .hot_mi{width: 90%;height: 100%;float:left;}
.Recommend_body .pic_hot .hot_mi h3{font-size: 16px;font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;}
.Recommend_body .pic_hot .hot_mi p{font-size: 12px;font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;margin-top: 2px;}
.Recommend_body .pic_hot .hot_mi p img{width: 20px;height: 20px;align-items: center;position: absolute;margin-top: -3px;}
.Recommend_body .pic_hot .hot_mi p span{margin-left: 24px;}
.Recommend_body .pic_hot .hot_vb{width: 10%;height: 100%;float:left;}
.Recommend_body .pic_hot .hot_vb img{width:35px;height: 40px;}
</style>