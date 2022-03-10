var fs = require('fs');

const folder = (process.argv);
const arrayArgs = folder.slice(2, folder.length);

try {
    arrayArgs.map((el) => {
        if(!fs.existsSync('test/' + el)) {
            fs.mkdirSync('test/'+el)
            console.log('Lord Avocado has created your folder !')
        } else {
            console.log('Lord Avocado has find your stupid folder !');
        }
    })
} catch (error) {
    console.log(error)
}

