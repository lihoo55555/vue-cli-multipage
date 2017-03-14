const path = require('path');
const glob = require('glob');

const projectJs = path.resolve(__dirname,'../src/modules/');
const globalPath = projectJs+'/**/*.js';

let entries = ((globalPath)=>{

  let entries = {},
    entryName;

  glob.sync(globalPath).forEach((entryPath)=>{
    entryName = path.basename(entryPath, path.extname(entryPath));
    tmp = entryPath.split('/').splice(-3);
    pathname = tmp.splice(0, 1) + '/' + entryName; // 正确输出js和html的路径
    entries[pathname] = entryPath;
  });

  return entries;

})(globalPath);

module.exports = entries;
