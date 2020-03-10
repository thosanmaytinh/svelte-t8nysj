import App from "./components/App.html";
var $ = require("jquery");

const AppComponent = new App({
  target: document.querySelector("#root"),
  data: { name: "svelte" }
});

const Aigle = require("aigle");
Aigle.mixin(require("lodash"));

let api = [
  {
    name: "tinhte.vn",
    urlUpload:
      "https://api.openload.co/1/file/ul?login=7cf46c19eaac9aee&key=iEwhiOuX",
    maxFileSize: 10
  },
  {
    name: "iocloud.info",
    urlUpload: "https://api.test.co/",
    maxFileSize: 20
  },
  {
    name: "tinhte.vn/index.php",
    urlUpload:
      "https://api.openload.co/1/file/ul?login=7cf46c19eaac9aee&key=iEwhiOuX",
    maxFileSize: 10
  },
  {
    name: "tinhte.vn",
    urlUpload:
      "https://api.openload.co/1/file/ul?login=7cf46c19eaac9aee&key=iEwhiOuX",
    maxFileSize: 10
  },
  {
    name: "tinhte.vn",
    urlUpload:
      "https://api.openload.co/1/file/ul?login=7cf46c19eaac9aee&key=iEwhiOuX",
    maxFileSize: 10
  },
  {
    name: "tinhte.vn",
    urlUpload:
      "https://api.openload.co/1/file/ul?login=7cf46c19eaac9aee&key=iEwhiOuX",
    maxFileSize: 10
  },
  {
    name: "tinhte.vn",
    urlUpload:
      "https://api.openload.co/1/file/ul?login=7cf46c19eaac9aee&key=iEwhiOuX",
    maxFileSize: 10
  },
  {
    name: "tinhte.vn",
    urlUpload:
      "https://api.openload.co/1/file/ul?login=7cf46c19eaac9aee&key=iEwhiOuX",
    maxFileSize: 10
  },
  {
    name: "tinhte.vn",
    urlUpload:
      "https://api.openload.co/1/file/ul?login=7cf46c19eaac9aee&key=iEwhiOuX",
    maxFileSize: 10
  },
  {
    name: "tinhte.vn",
    urlUpload:
      "https://api.openload.co/1/file/ul?login=7cf46c19eaac9aee&key=iEwhiOuX",
    maxFileSize: 10
  },
  {
    name: "tinhte.vn",
    urlUpload:
      "https://api.openload.co/1/file/ul?login=7cf46c19eaac9aee&key=iEwhiOuX",
    maxFileSize: 10
  }
];
var ts = {
  length: 10
};

// Aigle.resolve(api).mapSeries(async host => {
//   return $.get(host.name).then(async r => {
//     console.log(new Date(), host.name);
//     return r;
//   });
// });

// let called = 0;
// Aigle.retry(3, () => {
//   return new Aigle((resolve, reject) => {
//     setTimeout(() => reject(++called), 10);
//   });
// }).catch(error => {
//   console.log(error); // 3
//   console.log(called); // 3
// });

// Aigle.resolve([{thinh:1}, {thinh:2}, {thinh:2}])
// .filterSeries(item => {
//   if (item.thinh === 1) {
//     return false;
//   }
//   return item
// })
// .then(console.log)

// Example
const a = [{ name: "aaaa" }, { name: "aaaaaaaaaa2" }];
const b = [{ name: "bbbbb" }, { name: "bbbbb22222" }];
Aigle
  .chain([1, 2], [10, 20], [100, 200])
  .zipWith((a, b, c) => {
  console.log(a, b, c);
});


//0000
const fromTimestamp = 1579520740857 // 2020-01-20T11:45:40.857Z
const toTimestamp = 1582112812032   // 2020-02-19T11:46:52.032Z


for(
  let dateFromInput = new Date('2020-03-02');
  dateFromInput <= new Date('2020-03-09');
  dateFromInput.setUTCDate(dateFromInput.getUTCDate() + 2)
) {
  let _date = new Date(dateFromInput);
  _date.setUTCDate(_date.getUTCDate() + 1)
  _date.setUTCHours(23, 59, 59)
  const fromDateTimeStamp = Math.round(dateFromInput.getTime() / 1000)
  const toDateTimeStamp = Math.round(_date.getTime() / 1000)

  console.log(fromDateTimeStamp, toDateTimeStamp, '|||')
}