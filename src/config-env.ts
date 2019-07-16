require('dotenv').config();
var fs = require('file-system');

const prod_env = process.env.PROD_ENV;
const cloud_name = process.env.CLOUD_NAME;
const upload_preset = process.env.UPLOAD_PRESET;

const targetPath = `./src/environments/environment.dev.ts`;

const envConfigFile = `export const environment = { 
    production: ${prod_env}, 
    cloud_name: "${cloud_name}",
    upload_preset: "${upload_preset}"
};`;

fs.writeFile(targetPath, envConfigFile, function (err) {
    if (err) {
        console.log(err);
    }
});