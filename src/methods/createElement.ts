import fs = require('fs')

export default (path: string, structure: any) => {
    fs.writeFile(`${path}`, /*value*/ structure, function (err) {
        if (err) {
            throw err;
        }
    })
}