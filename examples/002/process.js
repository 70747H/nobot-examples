process.stdout.write('Enter something then Hit Enter: \n');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', ()=>{
    const chunk = process.stdin.read();
    if(chunk !== null){
        process.stdout.write(`You typed: ${chunk}`);
        process.exit(0);
    }
});