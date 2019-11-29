<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        name:'HomeRecommend',
        data () {
            return {
                recommendList: [{
                    id:'0001',
                    imgUrl:'https://imgs.qunarzz.com/p/tts6/1704/b3/9733b2f74b6d0b02.jpg_160x160_7978bd50.jpg',
                    title:'游乐嘉年华',
                    desc:'木兰花乡休闲畅玩一日游【含25个游玩项目】'
                },{
                    id:'0002',
                    imgUrl:'https://imgs.qunarzz.com/p/tts6/1704/b3/9733b2f74b6d0b02.jpg_160x160_7978bd50.jpg',
                    title:'游乐嘉年华',
                    desc:'木兰花乡休闲畅玩一日游【含25个游玩项目】'
                },{
                    id:'0003',
                    imgUrl:'https://imgs.qunarzz.com/p/tts6/1704/b3/9733b2f74b6d0b02.jpg_160x160_7978bd50.jpg',
                    title:'游乐嘉年华',
                    desc:'木兰花乡休闲畅玩一日游【含25个游玩项目】'
                },{
                    id:'0004',
                    imgUrl:'https://imgs.qunarzz.com/p/tts6/1704/b3/9733b2f74b6d0b02.jpg_160x160_7978bd50.jpg',
                    title:'游乐嘉年华',
                    desc:'木兰花乡休闲畅玩一日游【含25个游玩项目】'
                },{
                    id:'0005',
                    imgUrl:'https://imgs.qunarzz.com/p/tts6/1704/b3/9733b2f74b6d0b02.jpg_160x160_7978bd50.jpg',
                    title:'游乐嘉年华',
                    desc:'木兰花乡休闲畅玩一日游【含25个游玩项目】'
                }]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl';
    .recommend-title{
        margin-top:.2rem;
        line-height: .8rem;
        background: #eee;
        text-indent: .2rem;
    }
    .item{
        overflow: hidden;
        display: flex;
        height: 1.9rem;
    }
    .item-img{
        width: 1.7rem;
        height: 1.7rem;
        padding: .1rem;

    }
    .item-info{
        flex: 1;
        padding: .1rem;
        min-width: 0;
    }
    .item-title{
        line-height: .54rem;
        font-size: .32rem;
        ellipsis()
    }
    .item-desc{
        line-height: .4rem;
        color: #ccc;
        ellipsis()
    }
    .item-button{
        background: #ff9300;
        padding: 0 .2rem;
        border-radius: .06rem;
        margin-top: .2rem;
        color: #fff;
    }
</style>