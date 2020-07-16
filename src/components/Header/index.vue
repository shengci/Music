<template>
    <div class="pw">
    <div id="header">
        <h1>网易云音乐</h1>
    </div>
    </div>
</template>
    
<script>
export default {
    name:'Header'
}
</script>

<style scoped>
.pw{
    width: 100%;
    height:64px;
}
#header{
    width: 100%;
    height:64px;
    background: #d43c33;
    position: relative;
    position: fixed;
    z-index: 10;
}
h1 {
    color: #ffffff;
    font-family: 'Courier New', Courier, monospace;
    font-size: 22px;
    padding: 20px;
}
</style>