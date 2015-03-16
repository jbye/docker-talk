#!/bin/bash

docker run -d -p 8080:80 -v $(pwd)/www:/var/www 03-serve-static-volume