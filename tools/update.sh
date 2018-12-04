#!/usr/bin/env bash

local_update() {
    rm -r /cygdrive/c/dev/wamp64/www
    mkdir /cygdrive/c/dev/wamp64/www
    cp -r /cygdrive/c/dev/wspace/fpiweb/* /cygdrive/c/dev/wamp64/www
    chmod -R 777 /cygdrive/c/dev/wamp64/www
}

remote_exec() {
    cd ~/development/wspace/fpiweb
    svn update
    sudo cp -r ~/development/wspace/fpiweb/* /var/www/html
}

remote_update() {
    cd /cygdrive/c/dev/wspace/fpiweb/
    svn commit
    ssh fpi@192.168.2.111 'remote_exec()'
}

local_update
#remote_update
