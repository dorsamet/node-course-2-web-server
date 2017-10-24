var newObject = (url) => {
  let newObj = {};
  newObj.pageTitle = getNameForUrl(url);
  if (url == '/') {
    newObj.welcomeMessage = 'Welcome to my website :)';
  }

  return newObj
}

var getNameForUrl = (url) => {
  switch (url) {
    case '/':
      return 'Home Page'
      break;
    case '/about':
      return 'About Page'
    default:
      console.error('Illegal url given');
  }
}

module.exports = {
  newObject
}
