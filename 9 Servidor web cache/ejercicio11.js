var http = require('http');
var url = require('url');
var fs = require('fs');

var mime = {
    'html':'text/html',
    'css':'text/css',
    'jpg':'image/jpg',
    'ico':'image/x-icon',
    'mp3':'audio/mpeg3',
    'mp4':'video/mp4'
}