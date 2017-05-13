#!/bin/bash
source ./prod-stack.source
docker stack up -c prod-stack-swarm.yml ${STACK_NAME}
