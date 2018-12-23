// Dependecies.
const shelljs = require('shelljs');
const path = require("path");
const colorConsole = require("../../NodeHelpers/colorConsole");

/**
 * Build the folder with Gulp.
 */
function buildBabylonJSAndDependencies() {
    colorConsole.log("Running gulp compilation");
    let exec = shelljs.exec("gulp typescript-libraries typescript-es6", {
        cwd: path.resolve(__dirname, "../../Gulp/")
    });
    if (exec.code) {
        colorConsole.error("Error during compilation, aborting");
        process.exit(1);
    }
}

/**
 * Main function driving the publication.
 */
module.exports = buildBabylonJSAndDependencies;