const renderingObjectFactory = require('./renderingObjectFactory');

var innerRender = (res, name, url) => {
  res.render(name, renderingObjectFactory.newObject(url));
}

module.exports = {
  innerRender
}
