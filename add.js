const fs = require('fs');
const path = require('path');


const createLogs = () => {
    const logDir = path.join(__dirname, 'Logs');

    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir); 
    }

    process.chdir(logDir); 

    for (let i = 0; i < 10; i++) {
        const fileName = `log${i + 1}.txt`;
        fs.writeFileSync(fileName, `This is log file ${i + 1}`); 
        console.log(`Created file: ${fileName}`);
    }
};

createLogs();
