npm run build && \
cp -r ./dist DockerBuild/ && \
cd DockerBuild && \
sudo docker rmi -f vue_project
sudo docker build -t vue_project .
sudo docker rm -f student_score_vue
sudo docker run -d -p 80:80 --name student_score_vue vue_project