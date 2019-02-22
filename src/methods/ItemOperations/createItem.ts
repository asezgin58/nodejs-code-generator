import fs = require('fs')
//Create Item
export default (path: string, structure: any) => {
    fs.writeFile(`${path}`, /*value*/ structure, function (err) {
        if (err) {
            throw err;
        }
    })
}