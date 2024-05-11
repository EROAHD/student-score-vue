sudo apt install npm -y && \
npm run build && \
cp -r ./dist DockerBuild/ && \
cd DockerBuild && \
sudo docker rmi -f student_score_vue
sudo docker build -t student_score_vue .
sudo docker rm -f student_score_vue
sudo docker run -d -p 80:80 --name student_score_vue student_score_vue