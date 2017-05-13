#!/bin/bash
source ./dev-stack.source
docker stack up -c dev-stack-swarm.yml ${STACK_NAME}
