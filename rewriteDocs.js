fs = require('fs');
var allDocs = fs.readFileSync('out/docs/api.md', 'utf8');

var wxTilesDocs = "## wxTiles" + allDocs.split(/[^#]## wxTiles/g, 2).pop();

fs.writeFileSync('./out/docs/wxTiles.md', wxTilesDocs, 'utf8');