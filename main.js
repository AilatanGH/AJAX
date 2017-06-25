'use strict';
// Created HTML code
function createdHtml(){
  var contentElement = document.querySelector('.container');

  var divUsername = document.createElement("div");
  divUsername.setAttribute('class', 'username');

  var divContent = document.createElement('div');
  divContent.setAttribute('class','content');

  var imgIcon = document.createElement('img');
  imgIcon.setAttribute('class','icon');
  imgIcon.src = 'githubB.png';

  var divUsername = document.createElement('div');
  divUsername.setAttribute('class','username');

  var divInfo = document.createElement('div');
  divInfo.setAttribute('class','info');

  var h3Name = document.createElement('h3');
  h3Name.innerHTML = 'Nombre:';

  var spanBoxname = document.createElement('span');
  spanBoxname.setAttribute('id','boxName');

  var brElement = document.createElement('br');

  var imgName = document.createElement('img');
  imgName.setAttribute('id','imgName');

  var h3Repos = document.createElement('h3');
  h3Repos.innerHTML = 'Número de repositorios:';

  var spanBoxrepos = document.createElement('span');
  spanBoxrepos.setAttribute('id','boxRepos');

  contentElement.appendChild(divUsername);
  divUsername.appendChild(divContent);
  divContent.appendChild(imgIcon);
  divContent.appendChild(divInfo);
  divInfo.appendChild(h3Name);
  divInfo.appendChild(spanBoxname);
  divInfo.appendChild(brElement);
  divInfo.appendChild(imgName);
  divInfo.appendChild(h3Repos);
}

createdHtml();

// Function Consul username
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
      alert ("Usuario no encontrado");
      console.log('Error del servidor, puede que el archivo no exista o que se haya producido un error interno en el servidor');
    }
  };

  request.onerror = function() {
    console.log('Error al tratar de conectarse con el servidor');
  };

  request.send();
}

buttonElement.addEventListener('click', ConsultUsername);
