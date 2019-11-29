<template>
        <div>
            <div class="recommend-title">周末去哪儿</div>
            <ul>
                <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                    <div class="item-img-wrapper">
                        <img class="item-img" :src="item.imgUrl">
                    </div>
                    <div class="item-info">
                        <p class="item-title">{{item.title}}</p>
                        <p class="item-desc">{{item.desc}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </template>
    
    <script>
        export default{
            name:'HomeWeekend',
            data () {
                return {
                    recommendList: [{
                        id:'0001',
                        imgUrl:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/b59b8db9f72eb8f54df5bf2155672e9c.jpg',
                        title:'游乐嘉年华',
                        desc:'木兰花乡休闲畅玩一日游【含25个游玩项目】'
                    },{
                        id:'0002',
                        imgUrl:'https://imgs.qunarzz.com/vc/aa/9e/82/14bf523635542806a671763e98.jpg_92.jpg',
                        title:'游乐嘉年华',
                        desc:'木兰花乡休闲畅玩一日游【含25个游玩项目】'
                    },{
                        id:'0003',
                        imgUrl:'https://imgs.qunarzz.com/vc/aa/9e/82/14bf523635542806a671763e98.jpg_92.jpg',
                        title:'游乐嘉年华',
                        desc:'木兰花乡休闲畅玩一日游【含25个游玩项目】'
                    },{
                        id:'0004',
                        imgUrl:'https://imgs.qunarzz.com/vc/aa/9e/82/14bf523635542806a671763e98.jpg_92.jpg',
                        title:'游乐嘉年华',
                        desc:'木兰花乡休闲畅玩一日游【含25个游玩项目】'
                    },{
                        id:'0005',
                        imgUrl:'https://imgs.qunarzz.com/vc/aa/9e/82/14bf523635542806a671763e98.jpg_92.jpg',
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

        .item-img-wrapper{
            overflow: hidden;
            height: 0;
            padding-bottom: 31%;
        }
        .item-img{
            width: 100%;
        }
        .item-info{
            padding: .1rem;
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
    </style>