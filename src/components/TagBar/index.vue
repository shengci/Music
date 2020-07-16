<template>
    <div class="pw">
    <footer id="footer">
        <ul>
            <router-link tag="li" to="/recommend">
                <img src="@/assets/index.png">
                <p>乐库</p>
            </router-link> 
            <router-link tag="li" to="">
                <img src="@/assets/RadioStation.png">
                <p>电台</p>
            </router-link>
            <router-link tag="li" to="">
                <img src="@/assets/MV.png">
                <p>MV</p>
            </router-link>
            <router-link tag="li" to="">
                <img src="@/assets/logon.png">
                <p>登录</p>
            </router-link>
        </ul>
    </footer>
    </div>
</template>

<script>
export default {
    name:'TagBar'
}
</script>

<style scoped>
.pw{
    width: 100%;
    height: 60px;
    left: 0px;
    bottom: 0px;
}
#footer{
    width: 100%;
    height: 60px;
    background: white;
    position: fixed;
    left: 0px;
    bottom: 0px;
}
#footer ul{display: flex;text-align: center;height: 50px;align-items: center;list-style-type: none;}
#footer ul li{flex: 1;height: 40px;}
#footer ul li img{width: 27px;height: 27px;}
#footer ul li .router-link-active{color: red;}
#footer ul li p{font-size: 13px;}
</style>