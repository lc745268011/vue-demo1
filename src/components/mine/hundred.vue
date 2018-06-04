<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in sliders"  @click="aaa(index)">
                    <img :src="item.img" alt="" style="width: 100%">
                    <p>{{item.content}}</p>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>

    </div>
</template>
<script>
    export default {
        data () {
            return {
                sliders:[
                    {img:'./static/img/1.png',content:"去吃重庆火锅"},
                    {img:'./static/img/2.png',content:"去爬泰山"},
                    {img:'./static/img/3.png',content:"去海边吹风"}
                ]
            }
        },
        mounted:function () {
            var swiper = new Swiper('.swiper-container', {
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows : true,
                },
                pagination: {
                    el: '.swiper-pagination',
                },

            });
        },
        methods:{
            aaa:function (index) {
                console.log(index)
            }
        }
    }
</script>
<style>
    body {
        background: #fff;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        font-size: 14px;
        color:#000;
        margin: 0;
        padding: 0;
    }
    .swiper-container {
        width: 100%;
        padding-top: 50px;
        padding-bottom: 50px;
    }
    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 300px;
        height: 300px;

    }
</style>
