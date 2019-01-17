import Vue from "vue";
import App from "./App.vue";
// import { google } from "googleapis";

// const { google } = require('googleapis');
// const blogger = google.sheets({
//   version: 'v3',
//   auth: 'YOUR_API_KEY' // specify your API key here
// });

// const params = {
//   blogId: 3213900
// };

// async function main(params) {
//   const res = await blogger.blogs.get({ blogId: params.blogId });
//   console.log(`${res.data.name} has ${res.data.posts.totalItems} posts! The blog url is ${res.data.url}`)
// };

// main().catch(console.error);

new Vue({
  el: "#app",
  render: h => h(App)
});
