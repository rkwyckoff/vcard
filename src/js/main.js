import token from './token';

import $ from 'jquery';

// building a request  =>> reqType = 'GET', 'POST'
function makeRequest(data) {
  $.ajax({
    url: `https://api.github.com/users/rkwyckoff`,
    dataType: 'json',
    headers: {
          "Authorization": `token ${token}`
        },
    success: boxTemplate
  })
};

makeRequest()

function boxTemplate(data) {
  console.log(data)
  $(".container").append(`

          <div class="header">${data.name}</div>
          <div class="columns">

          <div class="column is-5 column1">
            <p>The Basics</p>
            <div class="basicsData">
              <span class="label">Name: </span>
              <span class="value">${data.name}</span>
            </div>
            <div class="basicsData">
              <span class="label">Github URL:  </span>
              <span class="url">${data.url}</span>
            </div>
            <div class="basicsData">
              <span class="label">Company: </span>
              <span class="value">${data.company}</span>
            </div>
            <div class="basicsData">
              <span class="label">Email: </span>
              <span class="value">${data.email}</span>
            </div>
            <div class="basicsData">
              <span class="label">Website: </span>
              <span class="url">${data.html_url}</span>
            </div>
          </div>
            <div class="column is-3">
            <p>The Story</p>
            <span class="bio">${data.bio}</span>
          </div>
          <div class="column is-4">
          <img class="img-circle " src= "${data.avatar_url}">
          </div>
          </div>
        `);

}
