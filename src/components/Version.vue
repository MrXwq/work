<template>
    <div class="content bg-white mt-3 p-3">
        
        <div class="b-head d-flex pt-2">
            <h2 class="fs-ggg px-3">
                {{id==='advanced' ? '高级':'定制'}}版
            </h2>
            <span class="flex-end fs-black-5">
                (适合<span class="fs-red-7">独立摄影师</span>)
            </span>
        </div>

        <div class="b-body mt-4 d-flex flex-wrap mt-5">
            <div class="section1 text-center pb-4" v-for="(data,i) in mes" :key="i">
                
                <!-- 图标 -->
                <router-link tag="i" to="/" 
                    class="icon-style iconfont  fs-red-5 p-3 bg-red-6" 
                    style="font-size:2rem" 
                    :class="[
                        {'ban': flag && data.identity,
                        'no-ban': !flag,
                        'section:hover': !flag
                        },
                        `icon-${data.iconName}`
                    ]"
                ></router-link>

                <!-- 标题 -->
                <div class="font-title fs-s mt-3" 
                    :class="{
                        'ban1': flag && data.identity, 
                        'no-ban1': !flag
                        }"
                >
                    {{data.title}}
                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        // 路由传过来的值
        id: {},
        // 父组件传过来的值
        flag:{required:true}
    },
    data(){
        return {

            // 这个数据到时可以服务端传
            mes: [
                {identity: !this.flag, iconName: 'meh', title: '标题1'},
                {identity: this.flag, iconName: 'meh', title: '标题12'},
                {identity: !this.flag, iconName: 'meh', title: '标题13'},
                {identity: !this.flag, iconName: 'meh', title: '标题14'},
                {identity: this.flag, iconName: 'meh', title: '标题15'},
                {identity: this.flag, iconName: 'meh', title: '标题16'},
                {identity: this.flag, iconName: 'meh', title: '标题17'},
                {identity: !this.flag, iconName: 'meh', title: '标题18'},
                {identity: this.flag, iconName: 'meh', title: '标题19'},
                {identity: !this.flag, iconName: 'meh', title: '标题10'},
            ] 
        }
        
    }
}
</script>
<style lang="scss">
    @import '../assets/scss/_variables.scss';
    .content {
        .section1 {
            width: 20%;
            .icon-style {
                border-radius: 50%;
                cursor: pointer;
            }
        }
    }
</style>
