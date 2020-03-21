<template>
<div>
    test 
</div>
</template>
<script>
    export default {
        name: 'Role',
        data() {
            return {

            }
        },
        created() {

        },
        methods: {
        },

    }
</script>
//下拉框样式
<style lang="scss" scoped>
    .el-select-dropdown {
        background-color: #d1d5e5 !important;
        color: #000000;
        border: none;
        .el-scrollbar {
            .el-scrollbar__view {
                padding: 0 5px;
                .el-select-dropdown__item {
                    color: #000000;
                    border-bottom: 1px solid rgba(0,0,0,0.5);
                    &:hover {
                        background-color: rgba(0, 0, 0, 0.2);
                        color: #000000;
                    }
                    &:last-child {
                        border: none;
                    }
                }
                .hover {
                    background-color: rgba(0, 0, 0, 0.2);
                    color: #ffffff;

                    &:hover {
                        background-color: rgba(0, 0, 0, 0.2);
                        color: #ffffff;
                    }
                }
            }
        }
    }
    .main-center {
        .el-tree {
            background-color: rgba(0, 0, 0, 0.4);
            color: #ffffff;
            overflow: auto;
            &::-webkit-scrollbar{
                display: none;
            }
            .el-tree-node {
                &:focus > .el-tree-node__content {
                    background-color: rgba(0, 0, 0, 0.5);
                }
                .el-tree-node__content {
                    height: 40px;
                    line-height: 40px;
                    &:hover {
                        background-color: rgba(0, 0, 0, 0.5);
                    }
                    .el-tree-node__label {
                        letter-spacing: 2px;
                        font-size: 16px;
                    }
                }
            }
        }

        .table-bot {
            .el-button {
                margin-left: 50px;
                width: 120px;
                background-color:#1c7dfa;
                border: none;
            }
        }
    }
</style>
<style scoped>
    .table-bot {
        height: 62px;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        line-height: 62px;
        color: #ffffff;
        font-size: 24px;
        text-align: left;
    }
</style>
