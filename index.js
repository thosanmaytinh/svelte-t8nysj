import App from './components/App.html';

const AppComponent = new App({
  target: document.querySelector('#root'),
  data: { name: 'svelte' }
});

const Aigle = require('aigle');

let api = [
  {
    name: 'openload.co',
    urlUpload: 'https://api.openload.co/1/file/ul?login=7cf46c19eaac9aee&key=iEwhiOuX',
    maxFileSize: 10
  },
  {
    name: 'test.test',
    urlUpload: 'https://api.test.co/',
    maxFileSize: 20
  }
]
var ts  = {
  length: 10
}
Aigle.resolve(api)
  .pickBySeries(host => {
    return host.maxFileSize >= ts.length
  })
  .then(array => {
    console.log(array)
  });