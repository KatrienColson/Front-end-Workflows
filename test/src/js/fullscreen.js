"use strict"
function GoInFullscreen(element) {
    if (element.requestFullscreen) element.requestFullscreen()
    else if (element.mozRequestFullScreen) element.mozRequestFullScreen()
    else if (element.webkitRequestFullscreen)
      element.webkitRequestFullscreen()
    else if (element.msRequestFullscreen) element.msRequestFullscreen()
  }

  function GoOutFullscreen() {
    if (document.exitFullscreen) document.exitFullscreen()
    else if (document.mozCancelFullScreen) document.mozCancelFullScreen()
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen()
    else if (document.msExitFullscreen) document.msExitFullscreen()
  }

  function IsFullScreenCurrently() {
    var full_screen_element =
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement ||
      null

    if (full_screen_element === null) return false
    else return true
  }

  $('#myImg1').on('click', function () {
    if (IsFullScreenCurrently()) GoOutFullscreen()
    else GoInFullscreen($('#elemFullscreen1').get(0))
  })
  $('#myImg2').on('click', function () {
    if (IsFullScreenCurrently()) GoOutFullscreen()
    else GoInFullscreen($('#elemFullscreen2').get(0))
  })
  $('#myImg3').on('click', function () {
    if (IsFullScreenCurrently()) GoOutFullscreen()
    else GoInFullscreen($('#elemFullscreen3').get(0))
  })