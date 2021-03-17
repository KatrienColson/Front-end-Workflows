'use strict'

let nameTxt
let emailTxt
let messageTxt

let allFilledIn = true

function controlName() {
  if (nameTxt.length < 2) {
    document.getElementById('name_error').innerHTML = 'Name is too short.'
    allFilledIn = false
  } else {
    document.getElementById('name_error').innerHTML = ''
  }
}

function controlEmail() {
  let regExp = /^[A-Za-z][\.A-Za-z0-9+_-]+@[\.A-Za-z0-9-]+\.[A-Za-z]{2,20}$/
  if (regExp.test(emailTxt) == false) {
    document.getElementById('email_error').innerHTML =
      'This is not a correct e-mailaddress.'
    allFilledIn = false
  } else {
    document.getElementById('email_error').innerHTML = ''
  }
}

function controlMsg() {
  if (messageTxt.length < 2) {
    document.getElementById('msg_error').innerHTML =
      'Please write your message.'
    allFilledIn = false
  } else {
    document.getElementById('msg_error').innerHTML = ''
  }
}

function sendMessage() {
  nameTxt = document.getElementById('name').value
  emailTxt = document.getElementById('email').value
  messageTxt = document.getElementById('msg').value

  allFilledIn = true

  if (nameTxt.length == 0) {
    document.getElementById('name_error').innerHTML =
      'Please fill in your name.'
    allFilledIn = false
  } else {
    controlName()
  }

  if (emailTxt.length == 0) {
    document.getElementById('email_error').innerHTML =
      'Please fill in your e-mailaddress.'
    allFilledIn = false
  } else {
    controlEmail()
  }

  if (messageTxt.length == 0) {
    document.getElementById('msg_error').innerHTML =
      'Please write your message.'
    allFilledIn = false
  } else {
    controlMsg()
  }

  if (allFilledIn) {
    let mail =
      'mailto:' +
      encodeURIComponent('martine.boulanger@gmail.com') +
      '?cc=' +
      encodeURIComponent(' ') +
      '&subject=' +
      encodeURIComponent('A message from the website') +
      '&body=' +
      'Martine, you got a message! Yey!' +
      encodeURIComponent('\r\n\n') +
      'The name is: ' +
      encodeURIComponent(nameTxt) +
      encodeURIComponent('\r\n') +
      'The e-mailaddress is: ' +
      encodeURIComponent(emailTxt) +
      encodeURIComponent('\r\n\n') +
      'The message is: ' +
      encodeURIComponent('\r\n') +
      encodeURIComponent(messageTxt) +
      encodeURIComponent('\r\n\n') +
      'Please answer it soon!' +
      encodeURIComponent('\r\n\n') +
      'From Mini-me'
    window.location.href = mail
    // div_hide()
    emptyInputs()
  }
}

function emptyInputs() {
  document.getElementById('name').value = ''
  document.getElementById('email').value = ''
  document.getElementById('msg').value = ''
}

// function div_show() {
//   document.getElementById('formdiv').style.display = 'block'
// }

// function div_hide() {
//   document.getElementById('formdiv').style.display = 'none'
// }
