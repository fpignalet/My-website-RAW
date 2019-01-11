#!/usr/bin/env bash

local_update() {
    rm -r /cygdrive/c/dev/wamp64/www
    mkdir /cygdrive/c/dev/wamp64/www

    cp -r /cygdrive/c/dev/wspace/My-website-RAW/* /cygdrive/c/dev/wamp64/www
    cp -r /cygdrive/c/dev/wspace/My-website-RAW/clientside/game/* /cygdrive/c/dev/wspace/canvas-game-bootstrap

    chmod -R 777 /cygdrive/c/dev/wamp64/www
}

local_update
