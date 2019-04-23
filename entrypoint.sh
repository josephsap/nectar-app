#!/bin/bash
set -e

# This is necessary for managing environment variables in AWS
eval $(/usr/local/sbin/aws-env)

exec "$@"