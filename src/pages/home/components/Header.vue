<template>
    <div>
        <div class="header">
            <div class="header-left">
                <div class="iconfont back-icon">&#xe624;</div>
            </div>
            <div class="header-input">
                <span class="iconfont">&#xe632;</span>
                输入城市/景点/游玩主题
            </div>
            <div class="header-right">   
                {{this.city}}
                <span class="iconfont">&#xe6aa;</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeHeader',
    props: {
        city:String
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.header{
    line-height: .86rem;
    display: flex;
    background: $bgColor;
    color:#fff ;
}
.header-left{
    width: .64rem;
    float: left;
}
.back-icon{
    text-align:center;
    font-size:.4rem
}
.header-input{
    flex: 1;
    background: #fff;
    border-radius: .1rem;
    margin-top: .12rem;
    height: .64rem;
    line-height: .64rem;
    margin-left: .2rem;
    color: #ccc;
    padding-left: .2rem;
}
.header-right{
    width: 1.24rem;
    float: right;
    text-align: center;
}

</style>