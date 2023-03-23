#! /bin/sh
docker build -t twiddit_ag .
docker run -d -p 5000:5000 twiddit_ag