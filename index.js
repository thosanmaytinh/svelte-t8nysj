import App from './components/App.html';
var $ = require("jquery");

const AppComponent = new App({
  target: document.querySelector('#root'),
  data: { name: 'svelte' }
});

const Aigle = require('aigle');

// let api = [
//   {
//     name: 'tinhte.vn',
//     urlUpload: 'https://api.openload.co/1/file/ul?login=7cf46c19eaac9aee&key=iEwhiOuX',
//     maxFileSize: 10
//   },
//   {
//     name: 'iocloud.info',
//     urlUpload: 'https://api.test.co/',
//     maxFileSize: 20
//   },
//   {
//     name: 'tinhte.vn/index.php',
//     urlUpload: 'https://api.openload.co/1/file/ul?login=7cf46c19eaac9aee&key=iEwhiOuX',
//     maxFileSize: 10
//   }, {
//     name: 'tinhte.vn',
//     urlUpload: 'https://api.openload.co/1/file/ul?login=7cf46c19eaac9aee&key=iEwhiOuX',
//     maxFileSize: 10
//   }, {
//     name: 'tinhte.vn',
//     urlUpload: 'https://api.openload.co/1/file/ul?login=7cf46c19eaac9aee&key=iEwhiOuX',
//     maxFileSize: 10
//   }, {
//     name: 'tinhte.vn',
//     urlUpload: 'https://api.openload.co/1/file/ul?login=7cf46c19eaac9aee&key=iEwhiOuX',
//     maxFileSize: 10
//   }, {
//     name: 'tinhte.vn',
//     urlUpload: 'https://api.openload.co/1/file/ul?login=7cf46c19eaac9aee&key=iEwhiOuX',
//     maxFileSize: 10
//   }, {
//     name: 'tinhte.vn',
//     urlUpload: 'https://api.openload.co/1/file/ul?login=7cf46c19eaac9aee&key=iEwhiOuX',
//     maxFileSize: 10
//   }, {
//     name: 'tinhte.vn',
//     urlUpload: 'https://api.openload.co/1/file/ul?login=7cf46c19eaac9aee&key=iEwhiOuX',
//     maxFileSize: 10
//   }, {
//     name: 'tinhte.vn',
//     urlUpload: 'https://api.openload.co/1/file/ul?login=7cf46c19eaac9aee&key=iEwhiOuX',
//     maxFileSize: 10
//   }, {
//     name: 'tinhte.vn',
//     urlUpload: 'https://api.openload.co/1/file/ul?login=7cf46c19eaac9aee&key=iEwhiOuX',
//     maxFileSize: 10
//   }
// ]
// var ts = {
//   length: 10
// }
// Aigle.resolve(api)
//   .mapSeries(async host => {
//     return $.get(host.name).then(async r => {
//       await Aigle.delay(3000)
//       console.log(new Date(), host.name)
//       return r
//     })
//     // console.log(host.name)
//     // return a
//   })
// let called = 0;
// Aigle.retry(3, () => {
//   return new Aigle((resolve, reject) => {
//     setTimeout(() => reject(++called), 10);
//   });
// })
// .catch(error => {
//   console.log(error); // 3
//   console.log(called); // 3
// });

Aigle.resolve([{thinh:1}, {thinh:2}, {thinh:2}])
.filterSeries(item => {
  if (item.thinh === 1) {
    return false;
  }
  return item
})
.then(console.log)
