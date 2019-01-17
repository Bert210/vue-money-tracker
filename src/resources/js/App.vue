<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <form class="w-full max-w-sm">
      <div class="flex items-center border-b border-b-2 border-teal py-2">
        <input
          class="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          v-model="spreadsheetId"
        >
        
        <button
          class="flex-no-shrink bg-teal hover:bg-teal-dark border-teal hover:border-teal-dark text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
        >Fetch</button>
      </div>
    </form>
  </div>
</template>

<script>
// import { google } from "googleapis";

// const oauth2Client = new google.auth.OAuth2(
//   // YOUR_CLIENT_ID
//   process.env.VUE_APP_CLIENT_ID,
//   // YOUR_CLIENT_SECRET
//   process.env.VUE_APP_CLIENT_SECRET,
//   // YOUR_REDIRECT_URL
//   process.env.VUE_APP_REDIRECT_URIS
// );

// // generate a url that asks permissions for Blogger and Google Calendar scopes
// const scopes = ["https://www.googleapis.com/auth/spreadsheets"];

// const url = oauth2Client.generateAuthUrl({
//   // 'online' (default) or 'offline' (gets refresh_token)
//   access_type: "online",

//   // If you only need one scope you can pass it as a string
//   scope: scopes
// });

export default {
  name: "app",
  methods: {},
  data() {
    return {
      msg: localStorage.name,
      spreadsheetId: "1fNsJA1hoPLVF__9Oww5Co2Z6yemc-ucEZS1-7EPUeAY"
    };
  }
};
</script>

<style lang="css">
#app {
  color: #56b983;
}
</style>