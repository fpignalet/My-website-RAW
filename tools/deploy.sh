#!/usr/bin/env bash

local_update() {
    sudo rm -r /var/www/html
    sudo mkdir /cygdrive/c/dev/wamp64/www/html
    sudo rsync -r -v --exclude=node_modules /home/fpi/dev/wspace/my-website-raw/* /var/www/html
    sudo chmod -R 777 /var/www

    sudo rm -r /home/fpi/dev/wspace/canvas-game-bootstrap/css
    sudo rm -r /home/fpi/dev/wspace/canvas-game-bootstrap/js
    sudo rsync -r -v /home/fpi/dev/wspace/my-website-raw/clientside/game/* /home/fpi/dev/wspace/canvas-game-bootstrap
}

local_update
