import fs = require('fs')
//Create Item
export default (path: string, structure: any) => {
    fs.writeFileSync(`${path}`, /*value*/ structure, 'utf8')
}