#!/usr/bin/env bash

testserver_update() {
    cd ..
    svn update
    sudo cp -r * /var/www/html

    cd ../canvas
    svn update
    sudo cp -r * /var/www/html/clientside/game
}

testserver_update