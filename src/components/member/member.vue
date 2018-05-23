<template>
  <div>
    <inline-calendar
      ref="calendar"
      @on-change="onChange"
      @on-view-change="onViewChange"
      class="inline-calendar-demo"
      :show.sync="show"
      v-model="value"
      :range="range"
      :show-last-month="showLastMonth"
      :show-next-month="showNextMonth"
      :highlight-weekend="highlightWeekend"
      :return-six-rows="return6Rows"
      :hide-header="hideHeader"
      :hide-week-list="hideWeekList"
      :replace-text-list="replaceTextList"
      :weeks-list="weeksList"
      :render-function="buildSlotFn"
      :disable-past="disablePast"
      :disable-future="disableFuture"
      :disable-weekend="disableWeekend"
      :disable-date-function="disableDateFunction">
    </inline-calendar>
  </div>
</template>


<script>
  import { InlineCalendar, Group, XSwitch, Radio, XButton, Cell, Divider } from 'vux'

  export default {
    methods: {
      onChange (val) {
        // console.log('on-change', val)
      },
      onViewChange (val, count) {
        // console.log('on view change', val, count)
      }
    },
    data () {
      return {
        show: true,
        value: '',
        listValue: '',
        range: false,
        showLastMonth: true,
        showNextMonth: true,
        highlightWeekend: false,
        return6Rows: true,
        hideHeader: false,
        hideWeekList: false,
        replaceTextList: {},
        replace: false,
        changeWeeksList: false,
        weeksList: [],
        useCustomFn: false,
        buildSlotFn: () => '',
        disablePast: false,
        disableFuture: false,
        disableWeekend: false,
        disableDateFunction (date) {
          if (date.formatedDate === '2017-10-16') {
            return true
          }
        },

      }
    },
    watch: {
      replace (val) {
        this.replaceTextList = val ? {
          'TODAY': '今'
        } : {}
      },
      useCustomFn (val) {
        this.buildSlotFn = val ? (line, index, data) => {
          return /8/.test(data.date) ? '<div style="font-size:12px;text-align:center;"><span style="display:inline-block;width:5px;height:5px;background-color:red;border-radius:50%;"></span></div>' : '<div style="height:19px;"></div>'
        } : () => ''
      },
      changeWeeksList (val) {
        this.weeksList = val ? ['日', '一', '二', '三', '四', '五', '六 '] : ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
      }
    },
    components: {
      InlineCalendar,
      Group,
      XSwitch,
      Radio,
      XButton,
      Cell,
      Divider
    }
  }
</script>

<style lang="less">
  .inline-calendar-demo {
    background: rgba(255,255,255,0.9);
    padding:0 20px;
    box-sizing: border-box;
  }
  .calendar-title{font-size: 20px;}
  .inline-calendar-demo table th{font-size: 20px;}
  .inline-calendar-demo table td,.inline-calendar-demo table th{padding: 10px 0}
</style>
