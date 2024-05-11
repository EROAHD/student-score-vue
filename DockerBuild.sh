sudo apt install npm -y && \
npm install && \
npm run build && \
cp -r ./dist DockerBuild/ && \
cd DockerBuild && \
# 尝试删除已有的同名镜像
sudo docker rmi -f student_score_vue
# 构建Docker镜像
sudo docker build -t student_score_vue .
# 尝试删除已存在的运行中的同名容器
sudo docker rm -f student_score_vue
# 运行容器
sudo docker run -d -p 80:80 --name student_score_vue student_score_vue