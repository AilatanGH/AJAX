'use strict';

var SearchElement = document.getElementById('seach');
var boxName = document.getElementById('boxName');
var imgName = document.getElementById('imgName');
var boxRepos = document.getElementById('boxRepos');
var userElement = document.querySelector('.username');
var buttonElement = document.getElementById('button');
var request = new XMLHttpRequest();

function ConsultUsername(){

  var UsuarioElement = 'https://api.github.com/users/';
  var searchUsername = UsuarioElement + SearchElement.value;
  userElement.style.display = 'inline';
  request.open('GET', searchUsername, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var username = JSON.parse(request.responseText);
      boxName.innerHTML = username.name;
      imgName.src = username.avatar_url;
      boxRepos.innerHTML = username.public_repos;
    } else {
      console.log('Error del servidor, puede que el archivo no exista o que se haya producido un error interno en el servidor');
    }
  };

  request.onerror = function() {
    console.log('Error al tratar de conectarse con el servidor');
  };

  request.send();
}

buttonElement.addEventListener('click', ConsultUsername);
