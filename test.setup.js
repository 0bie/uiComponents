//ignore file extenstions:
const noop = () => null;
require.extensions['.css'] = noop;
require.extensions['.svg'] = noop;
require.extensions['.jpg'] = noop;

// teaches node.js to load css files
// uses external config cmrh.conf.js
require('css-modules-require-hook/preset');