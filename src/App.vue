<template>
  <div id="app">
    <div class="div-margin">
      <div class="div-title">echarts图表</div>
      <Echart
        :id="Id"
        :eStyle="columnOne.style"
        :titleText="columnOne.title"
        :legend="columnOne.barName"
        :seriesData="columnOne.data"
        :xA="columnOne.barX"
        :yA="columnOne.barY" />

      <Echart
        :id="Ids"
        :eStyle="columnOne.style"
        :titleText="columnOne.title"
        :legend="columnOne.barName"
        :seriesData="columnOne.data"
        :xA="columnOne.barX"
        :yA="columnOne.barY" />
    </div>

    <div class="div-margin">
      <div class="div-title">父子组件</div>
      <button @click="getChildrenFun">
        点击触发子组件的toast
      </button>
      <test-panel ref="panel">
        <span>hello</span>
        <span>hello wold</span>
      </test-panel>
      <test-toast ref="toast"></test-toast>
    </div>

    <div class="div-margin">
      <div class="div-title">常用util函数</div>
      <util></util>
    </div>

    <Video></Video>
  </div>
</template>

<script>
import Echart from "./components/Echart";
import TestPanel from "./components/panel";
import TestToast from "./components/toast";
import Video from './components/Video'
import util from "./components/util";

export default {
  name: 'App',
  components: {
    util,
    TestToast,
    TestPanel,
    Echart,
    Video
  },
  data () {
    return {
        // 数据源
        columnData: {
            title: '动态统计one',
            min: '0',
            max: '3000',
            interval: 500,
            barName: 'right',
            barXName: '年',
            barXMeasure: 'y',
            barYName: '升',
            barYMeasure: 'ml',
            list: [
                {
                  name: '直接访问',
                  type: 'bar',
                  stack: '总量',
                  xAxis: '2019/03/01',
                  data: [320, 302, 301, 334, 390, 330, 320]
                },
                {
                  name: '邮件营销',
                  type: 'bar',
                  stack: '总量',
                  xAxis: '2019/03/02',
                  data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                  name: '联盟广告',
                  type: 'bar',
                  stack: '总量',
                  xAxis: '2019/03/03',
                  data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                  name: '视频广告',
                  type: 'bar',
                  stack: '总量',
                  xAxis: '2019/03/04',
                  data: [150, 212, 201, 154, 190, 330, 410]
                },
                {
                  name: '搜索引擎',
                  type: 'bar',
                  stack: '总量',
                  xAxis: '2019/03/05',
                  itemStyle: {
                      normal: {
                          color: '#1f8dfc'
                      }
                  },
                  data: [820, 832, 901, 934, 1290, 1330, 1320]
                }
            ]
        },
        // 图表定义参数
        columnOne: {
            // 样式
            style: {
                height: ''
            },
            // 标题
            title: '',
            // legend
            barName: {
                left: '',
                data: []
            },
            // X轴
            barX: {
                name: '',
                measure: '',
                data: []
            },
            // Y轴
            barY: {
                name: '', // 单位
                min: '', // 最小值
                max: '', // 最大值
                interval: '', // 等比例
                measure: '' // 值单位
            },
            // 数据源
            data: [],
        },
        // 图表ID
        Id: 'one',
        Ids: 'two',

        testArr: [1, 2, 6]
    }
  },
  created () {
      this.columnOne.style.height = 320 + 'px'
      this.init()
  },
  methods: {
    init () {
      this.columnOne.title = this.columnData.title
      this.columnOne.barName.left = this.columnData.barName
      this.columnOne.barX.name = this.columnData.barXName
      this.columnOne.barX.measure = this.columnData.barXMeasure
      this.columnOne.barY.min = this.columnData.min
      this.columnOne.barY.max = this.columnData.max
      this.columnOne.barY.interval = this.columnData.interval
      this.columnOne.barY.name = this.columnData.barYName
      this.columnOne.barY.measure = this.columnData.barYMeasure
      this.columnData.list.forEach((v) => {
          this.columnOne.barName.data.push(v.name)
          this.columnOne.barX.data.push(v.xAxis)
      })
      this.columnOne.data = this.columnData.list
    },
    getChildrenFun () {
      this.$nextTick(() => {
          this.$refs.toast.toastPlugin('在父组件里触发调用toast111', 2500)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.div-margin {
  margin: 20px 0;
  border: 1px solid #c3c3c3;
}
.div-title {
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  padding: 0 10px;
}
</style>
