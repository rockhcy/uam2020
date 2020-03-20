<template>
    <div class="role-main">
        <div class="all-title"><i class="icon icon-shebeiguanli"></i>设备信息 | <a>设备组管理</a></div>
        <div class="main-top">
        <el-form :inline="true" :model="formGroup" class="demo-form-inline">
            <div class="top-left">
            <el-form-item label="组织名">
                <el-input v-model="formGroup.name" ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查找</el-button>
            </el-form-item>
            </div>
            <div class="top-right">
            <el-form-item>
                <el-button type="primary" @click="handleAdd">增加设备组</el-button>
            </el-form-item>
            </div>
        </el-form>
        </div>
        <div class="main-center">
            <div class="table-title"><i class="icon icon-biaoge"></i>设备组管理</div>
        <el-table :data="item"
                  height="calc(100% - 62px)"
                  row-key="id">
            <el-table-column type="index" width="50" label="序号" >
            </el-table-column>
            <el-table-column prop="groupName" label="设备组名">
            </el-table-column>
            <el-table-column prop="groupPrincipal" label="负责人">
            </el-table-column>
            <el-table-column prop="contactWay" label="联系方式">
            </el-table-column>
            <el-table-column prop="numberOfManagement" label="管辖设备数">
            </el-table-column>
            <el-table-column :show-overflow-tooltip="true" prop="groupDescribe" label="备注">
            </el-table-column>
            <el-table-column
                    label="操作" width="250">
                <template slot-scope="{ row }">
                    <el-button
                            size="mini"
                            class="shanchu"
                            icon="icon icon-shanchu"
                            @click="handleDelete(row)">删除
                    </el-button>
                    <el-button
                            size="mini"
                            class="bianji"
                            icon="icon icon-bianji"
                            @click="handleEdit(row)">编辑
                    </el-button>

                </template>
            </el-table-column>
        </el-table>
        </div>
        <Popup ref="Popup"></Popup>
        <DelUp ref="DelUp"></DelUp>
    </div>
</template>
<script>
    import Popup from './components/Popup';
    import DelUp from './components/DelUp';
    export default {
        name: "Group",
        components:{
            Popup,
            DelUp,
        },
        data(){
            return{
                item:[],
                token:'',
                formGroup:{
                    name:''
                },
                group:{
                    groupName:'',
                    pageNum:1,
                    pageSize:10,
                },
                admin:{
                    imei:'',
                    recipient:'',
                    groupId:'',
                    pageNum:1,
                    pageSize:10,
                },
            }
        },
        created() {
           this.getItem();
        },
        methods:{
            getItem(){
                this.$http.post( 'equiment/selectAllGroupDetailsInfo',this.group).then(res => {
                    if(res!==undefined){
                        this.item=res.data.data.list;
                    }
                })
            },
            //查找
            onSubmit(){
                this.group.groupName=this.formGroup.name;
                this.getItem();
            },
            //编辑
            handleEdit(row){
                this.$refs.Popup.form=row;
                this.$refs.Popup.dialogVisible = true;
                this.$refs.Popup.isEdit = true;
                console.log('1',row.mappingEquipmentId);
                var aaa = row.mappingEquipmentId;
                for ( var d in aaa){
                    this.$refs.Popup.value.push(aaa[d].toString());
                }
                console.log(this.$refs.Popup.value);
                this.getUpList();

            },
            //穿梭框的值
            getUpList(){
                this.$http.post( 'equiment/selectEquip',this.admin).then(res => {
                    if(res!==undefined){
                        console.log(res)
                        this.$refs.Popup.data = res.data.data.list;
                        this.$refs.Popup.data.forEach((el) => {
                            this.$set(el, 'label', `${el.equiomentName}：${el.imei}`);
                            this.$set(el, 'key', el.id);
                        });
                        console.log(this.$refs.Popup.data);
                    }
                })},
            //新增
            handleAdd(){
                this.$refs.Popup.dialogVisible = true;
                this.$refs.Popup.isEdit = false;
                this.getUpList();
            },
            //删除
            handleDelete(row){
                this.$refs.DelUp.form=row;
                this.$refs.DelUp.dialogDelUp = true;
            },
        },
    }
</script>

