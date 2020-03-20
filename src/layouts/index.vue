<template>
    <div class="quanbu">
        <layout-header/>
        <layout-sidebar/>
        <main ref="main" class="g-main">
            <transition name="fade-move" mode="out-in">
                    <router-view></router-view>
            </transition>
        </main>
    </div>
</template>
<script>
    import LayoutHeader from "./components/Header";
    import LayoutSidebar from "./components/Sidebar";
    export default {
        name: "Layout",
        components: {
            LayoutHeader,
            LayoutSidebar,
        },
        data() {
            return {};
        },
        created(){

        },
        computed: {}
    };
</script>
<style lang="scss">
    .quanbu{
        width: 100%;
        height: 100%;
        /*min-width:1260px;*/
    }
    .fade-move-leave-active,
    .fade-move-enter-active {
        transition: all 0.15s;
    }
    .fade-move-enter {
        opacity: 0;
        transform: translateX(-10px);
    }
    .fade-move-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }
    .g-main{
        width: calc(100% - 200px);
        height: calc(100% - 63px);
        display: block;
        float: left;
        position: relative;
        background: #ffffff;
        /*text-align: center;*/
    }
</style>
