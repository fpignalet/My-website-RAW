#!/usr/bin/env bash
local_update() {
    rm -r /cygdrive/c/dev/wamp64/www
    mkdir /cygdrive/c/dev/wamp64/www

    rsync -r -v --exclude=node_modules /cygdrive/c/dev/wspace/canvas-game-bootstrap/* /cygdrive/c/dev/wspace/My-website-RAW/clientside/game
    rsync -r -v --exclude=node_modules /cygdrive/c/dev/wspace/My-website-RAW/* /cygdrive/c/dev/wamp64/www

    chmod -R 777 /cygdrive/c/dev/wamp64/www
}

local_update