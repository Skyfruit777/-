new Vue({
    el: '#app',
    data() {
        return {
            userInfo: {  //添加用户信息
                name: '',
                gender: '',
                phoneNum: '',
                birthday: ''
            },
            tableData: [{ //表格数据
                name: '刘天果',
                gender: '男',
                phoneNum: '15955295550',
                birthday: '1995-11-10'
            }],

            dialogVisible: false,  //弹框的显示

            editObj: {
                name: '',
                gender: '',
                phoneNum: '',
                birthday: ''
            },
            userIndex: 0,
        }
    },
    methods: {
        // 添加用户信息
        addUser() {
            if (!this.userInfo.name) {
                this.$message({
                    message: '请输入姓名!',
                    type: 'warning'
                });
                return;
            }

            if (!this.userInfo.gender) {
                this.$message({
                    message: '请输入性别!',
                    type: 'warning'
                });
                return;
            }

            if (!this.userInfo.phoneNum) {
                this.$message({
                    message: '请输入手机号码!',
                    type: 'warning'
                });
                return;
            }

            if (!/0?(13|14|15|18|17)[0-9]{9}/.test(this.userInfo.phoneNum)) {
                this.$message({
                    message: '请输入正确的手机号码!',
                    type: 'warning'
                });
                return;
            }



            if (!this.userInfo.birthday) {
                this.$message({
                    message: '请输入出生日期!',
                    type: 'warning'
                });
                return;
            }
            this.tableData.push(this.userInfo)
            this.userInfo = {  //添加用户信息
                name: '',
                gender: '',
                phoneNum: '',
                birthday: ''
            }
        },
        delUser(idx) {  // 删除一组数据
            // console.log(idx);
            this.$confirm('确认删除？')
                .then(_ => {
                    this.tableData.splice(idx, 1)
                })
                .catch(_ => { });

        },
        //编辑用户数据
        editUser(item, idx) {
            this.userIndex = idx
            this.editObj = {
                name: item.name,
                gender: item.gender,
                phoneNum: item.phoneNum,
                birthday: item.birthday
            }
            this.dialogVisible = true
        },
        handleClose() {
            this.dialogVisible = false
        },
        confirm() {
            this.dialogVisible = false
            Vue.set(this.tableData, this.userIndex, this.editObj)
            // this.tableData[this.userIndex] = this.editObj

        }
    }
})