import $ from 'jquery';

var token = '0cad0c4d360e2ac58acb35170817384950764f4d';

$.ajaxSetup({
  headers: {
    "Authorization": "token " + token
  }
});

export default $;
