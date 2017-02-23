import React from 'react'
const Dropbox = require('dropbox');

var dropboxapi = new Dropbox({ accessToken: 'fSYqugPOt-IAAAAAAAAEEbxq1UkI2CdnuCBQjKAtypjcm8nyn8nE7U_FcqtdFBMH' });
dropboxapi.filesListFolder({path: '/MoMa_Apr2016'})
  .then(function(response) {
    console.log(response);
    console.log(response.entries[0].path_display);
    // return response;
  })
  .catch(function(error) {
    console.log(error);
  });

module.exports = dropboxapi;