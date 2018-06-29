<template>
    <div class="content">
        <Calendar ref="Calendar" v-on:isToday="clickToday" v-on:choseDay="clickDay" v-on:changeMonth="changeDate"></Calendar>
        <!--弹框-->
        <x-dialog v-model="showHideOnBlur" class="dialog-demo" hide-on-blur>
            <div class="img-box">
              <!--  <img src="https://ws1.sinaimg.cn/large/663d3650gy1fq6824ur1dj20ia0pydlm.jpg" style="max-width:100%">-->
                <div class="vCenter">
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div @click="showHideOnBlur=false">
                <button class="submit dialogbtn">提交</button>
            </div>
            <div @click="showHideOnBlur=false">
                <button class="close dialogbtn">取消</button>
            </div>

        </x-dialog>
    </div>
</template>

<script>
    import { XDialog } from 'vux'
    import Calendar from 'vue-calendar-component';
    export default {
        data() {
            return {
                showHideOnBlur: false,
            };
        },
        components: {
            Calendar,
            XDialog
        },
        methods: {
            clickDay(data) {
                console.log('选中了', data); //选中某天
                // this.$toast('选中了' + data);
                this.showHideOnBlur=true
            },
            clickToday(data) {
                console.log('跳到了本月今天', data); //跳到了本月
            },
            changeDate(data) {
                this.$toast('切换到的月份为' + data);
                console.log('左右点击切换月份', data); //左右点击切换月份
            },
            demo() {
                this.$refs.Calendar.ChoseMonth('2018-12-12'); //跳到12月12日选中12月12日
            }
        },
        created() {
        }
    };
</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style lang="scss">
    textarea{width: 90%;margin: auto;height: 90%;padding: 0.2rem}
    textarea:focus{outline: none}
    .dialogbtn{width: 50%;float: left;border: 0;background: none;height: 0.8rem;line-height: 0.8rem;font-size: 0.28rem}
    .dialogbtn.submit{background: $tonal;color: #fff}
    .dialogbtn.close{background: #999;color: #fff}
    .dialog-demo .weui-dialog{
        border-radius: 8px;
    }
    .dialog-demo .dialog-title {
        line-height: 30px;
        color: #666;
    }
    .dialog-demo .img-box {
        height: 250px;
        overflow: hidden;
    }
    .dialog-demo .img-box>div{height: 100%}
    .dialog-demo .vux-close {
        margin-top: 8px;
        margin-bottom: 8px;
    }
    .content {
        padding: 0;
    }
    h3 {
        text-align: center;
        width: 90%;
        margin: auto;
    }
    .div {
        margin: auto;
        width: 220px;
        height: 44px;
        line-height: 44px;
        background: #f885b7;
        color: #fff;
        font-size: 17px;
        text-align: center;
        margin-top: 20px;
    }
   /* .mark1 {
        background-color: red;
    }
    .mark2 {
        background-color: blue;
    }
    .wh_content_item > .wh_isMark {
        background: orange;
    }*/
    .wh_content_item .wh_chose_day {
        background: #acacac;
        color: #eee;
    }
    .wh_content_item .wh_isToday{
        background: #f885b7;
        color: #fff;
    }
    .wh_content_all{background: transparent;}
    .wh_jiantou2,.wh_jiantou1{border-color: #f885b7}
    .wh_top_changge li,.wh_content_item, wh_content_item_tag{color: #f885b7}
</style>