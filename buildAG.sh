#! /bin/sh
docker stop twiddit_ag
docker rm twiddit_ag
docker build -t twiddit_ag .
docker run -d --name twiddit_ag -p 5000:5000 twiddit_ag
clear 
docker ps 