# 学生成绩查询系统 vue前端

## Docker 容器构建

- 通过在Linux上运行项目根目录的DockerBuild 脚本构建docker镜像
- 测试环境：wsl2 : Debian GNU/Linux 12 (bookworm) on Windows 10 x86_64
- 需要在Linux中安装npm用于构建项目

### 项目默认地址：http://localhost:80

### 后端请求默认地址：http://localhost:8080

- 修改后端地址：修改 `src/request/index.ts` 中的`baseURL`参数