import fs = require('fs')
//Add Item
export default (path: string, structure: any) => {
    fs.appendFile(`${path}`, /*value*/ structure, function (err) {
        if (err) {
            throw err;
        }
    })
}