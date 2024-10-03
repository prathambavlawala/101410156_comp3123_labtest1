const fs = require('fs');
const path = require('path');


const removeLogs = () => {
    const logDir = path.join(__dirname, 'Logs');

    if (fs.existsSync(logDir)) {
        const files = fs.readdirSync(logDir);
        files.forEach(file => {
            const filePath = path.join(logDir, file);
            console.log(`Deleting file: ${file}`);
            fs.unlinkSync(filePath); 
        });
        fs.rmdirSync(logDir);
        console.log('Logs directory removed.');
    } else {
        console.log('No Logs directory to remove.');
    }
};

removeLogs();
