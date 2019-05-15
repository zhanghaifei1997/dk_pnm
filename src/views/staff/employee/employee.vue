<template>
  <section>
    <!-- 表单区域 start -->
    <div class="dk-card-area">
      <div class="dk-card-header">
        <div class="dk-card-title">
          搜索区域
        </div>
        <!-- 按钮区域 -->
        <div class="dk-card-others">

        </div>
      </div>
      <!-- 表单区域 -->
      <div class="dk-card-content">

      </div>
    </div>
    <!-- 表单区域 end  -->
    <!-- 表格区域 start -->
    <div class="dk-card-area">
      <div class="dk-card-header">
        <div class="dk-card-title">
          员工列表
        </div>
        <!-- 按钮区域 -->
        <div class="dk-card-others">

        </div>
      </div>
      <!-- 列表区域 -->
      <div class="dk-card-content">
        <a-table :columns="columns" :dataSource="data" bordered rowKey="employeeId">

        </a-table>
      </div>
    </div>
    <!-- 表格区域 end -->
  </section>
</template>

<script>
    export default {
        name: "employee",
        data() {
          return {
            columns: [
              {
                title: "员工编号",
                dataIndex: "employeeId"
              },
              {
                title: "员工名字",
                dataIndex: "name"
              },
              {
                title: "自我介绍",
                dataIndex: "intr"
              },
              {
                title: "员工职责",
                dataIndex: "skills"
              },
              {
                title: "标签",
                dataIndex: "tags"
              },
              {
                title: "操作",
                dataIndex: "operations"
              }
            ],
            data: []
          }
        },
        methods: {
          getList() {
            let count = 0;
            this.data = []
            for(; count <= 10; count ++) {
              this.data.push({
                employeeId: 1021 * count,
                name: "员工"  + count,
                intr: "我是一个coder",
                skills: "Javascript、java",
                tags: ['coder']
              })
            }
          }
        },
        mounted() {
          this.getList()
        }
    }
</script>

<style lang="less" scoped>

</style>
