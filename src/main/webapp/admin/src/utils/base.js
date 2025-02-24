const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmxm4f1/",
            name: "ssmxm4f1",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmxm4f1/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "学生二手书籍交易平台"
        } 
    }
}
export default base
