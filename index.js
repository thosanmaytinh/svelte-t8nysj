import App from './components/App.html';
var $ = require("jquery");

const AppComponent = new App({
  target: document.querySelector('#root'),
  data: { name: 'svelte' }
});

const Aigle = require('aigle');

let api = [
  {
    name: 'tinhte.vn',
    urlUpload: 'https://api.openload.co/1/file/ul?login=7cf46c19eaac9aee&key=iEwhiOuX',
    maxFileSize: 10
  },
  {
    name: 'iocloud.info',
    urlUpload: 'https://api.test.co/',
    maxFileSize: 20
  }
]
var ts  = {
  length: 10
}
Aigle.resolve(api)
  .mapSeries(host => {
    let a = $.get(host.name)
    console.log(host.name)
     return a;
     
  })


