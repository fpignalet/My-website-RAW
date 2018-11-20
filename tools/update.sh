#!/usr/bin/env bash

local_update() {
    cp -r /cygdrive/c/dev/wspace/fpiweb/* /cygdrive/c/dev/wamp64/www
}

remote_update() {
    cp -r /cygdrive/c/dev/wspace/fpiweb/* /cygdrive/z/development/wspace/fpiweb

    ssh fpi@192.168.2.111 -t "
        sudo cp -r ~/development/wspace/fpiweb/* /var/www/html
    "
}

local_update
#remote_update
