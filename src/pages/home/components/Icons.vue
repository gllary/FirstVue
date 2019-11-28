<template>
    <div class="icons">
        <swiper >
            <swiper-slide  v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <diV class="icon-img">
                            <img class="icon-imgcontent" :src="item.imgUrl">
                    </diV>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper> 
    </div>
</template>

<script>
    export default{
        name:'HomeIcons',
        data () {
            return {
                iconList: [{
                    id: '0001',
                    imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
                    desc:'测试一'
                },{
                    id: '0002',
                    imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
                    desc:'测试2'
                },{
                    id: '0003',
                    imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
                    desc:'测试3'
                },{
                    id: '0004',
                    imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
                    desc:'测试4'
                },{
                    id: '0005',
                    imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
                    desc:'测试5'
                },{
                    id: '0006',
                    imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
                    desc:'测试6'
                },{
                    id: '0007',
                    imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
                    desc:'测试7'
                },{
                    id: '0008',
                    imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
                    desc:'测试8'
                },{
                    id: '0009',
                    imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
                    desc:'测试9'
                },{
                    id: '00010',
                    imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
                    desc:'测试10'
                }]
            }
        },
        computed: {
            pages () {
                const pages = []
                this.iconList.forEach((item,index) => {
                    const page = Math.floor(index/8)
                    if(!pages[page]){
                        pages[page]= []
                    }
                    pages[page].push(item)
                })
                return pages
            }
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';
@import '~styles/varibles.styl';
.icons >>> .swiper-container{
    height: 0;
    padding-bottom: 50%;
}
.icon{
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
}
.icon-img{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: .44rem;
    box-sizing: border-box;
    padding: .1rem;

}
.icon-imgcontent{
    display: block;
    margin: 0 auto;
    height: 100%;

}
.icon-desc{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: .44rem;
    line-height: .44rem;
    color: $darkTextColor;
    text-align:center;
    ellipse()
}
</style>