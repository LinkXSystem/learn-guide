FROM gitlab/gitlab-runner:latest

RUN apt-get update -y
RUN apt-get install -y curl git python3 python3-pip
RUN curl -sL https://deb.nodesource.com/setup_8.x
RUN apt-get install -y nodejs npm
RUN npm install -g npm@latest

CMD ["/bin/bash"]