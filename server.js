var exec = require('child_process').exec;
//需要执行的命令字符串
var cli = 'npm install -g peerflix-server';
exec(cli,{encoding:'utf8'},function (err,stdout,stderr){
    if (err){
        console.log(err);
        return;
    }
    console.log('stdout'+stdout);
    console.log('stderr'+stderr);
})
cli = 'PORT=8080 peerflix-server';
exec(cli,{encoding:'utf8'},function (err,stdout,stderr){
    if (err){
        console.log(err);
        return;
    }
    console.log('stdout'+stdout);
    console.log('stderr'+stderr);
})
