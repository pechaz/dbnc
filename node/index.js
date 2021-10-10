const fs = require('fs');

fs.readFile('./sample_file.txt', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }

    const dataArray = data.split("\r\n");
    const arraySize = dataArray.length;
    let sum = 0;
    for(let i =0; i<arraySize;i++){
        const lineData = dataArray[i].split(',');
        const item = parseInt(lineData[2]);
        if(item){
            sum+= item;
        }
    }

    console.log('sum: ',sum);
});
