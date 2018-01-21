(function ($, hljs, undefined) {
    'use strict'

    var $document = $(document)
    var $window = $(window)

    hljs.initHighlightingOnLoad()

    try {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/assets/js/service-worker.js')
      }
    } catch (ex) {
      console.error(ex)
    }

    $document.ready(function () {
      var $postContent = $(".post-content")
      var $btnNav = $('#btn-nav')
      var $navEl = $('#main-nav')
      var $floatingCta = $('.floating-cta')
      var $interactiveCard = $('.card.interactive')
      var $cardLink = $('.card a').first()
      var cardLinkValue = $cardLink.attr('href')
      var $ctaServices = $('#cta-services')
      var $ctaSupport = $('#cta-support')
      var $searchField = $('#search-field')

      // setup search field
      $searchField.ghostHunter({
        results: '#results',
        onKeyUp: true,
        includepages: true,
        result_template: "<a href='\{\{link\}\}'><p><h1>\{\{title\}\}</h1><h4>\{\{pubDate\}\}</h4>\{\{description\}\}</p></a>"
      })
      $searchField.keyup(function (event) {
        if (event.target.value === "") {
          $searchField.clear();
        }
      })

      if (cardLinkValue) {
        $cardLink.attr('href', cardLinkValue + '&utm_content=' + window.location.pathname)
      }

      $interactiveCard.on('click', 'button', function (e) {
        if ($(e.toElement).attr('data-answer') === 'correct') {
          setTimeout(function () {
            $interactiveCard.find('#answer-correct').show()
          }, 2100)
        } else {
          setTimeout(function () {
            $interactiveCard.find('#answer-incorrect').show()
          }, 2100)
        }
        $interactiveCard.find('button').hide()
        $interactiveCard.find('.spinner').show()

        setTimeout(function () {
          $interactiveCard.find('.spinner').hide()
        }, 2000)
      })

      $btnNav.on('click', function (e) {
        if (!$navEl.is(':visible')) {
          $navEl.show()
        }
        else {
          $navEl.hide()
        }
      })

      /*
      * Adding the dropdown stuffz
      * */
      $('.dropdown-toggle').on('mouseenter', function () {
        $(this).addClass('active')
      })

      $('.dropdown-toggle').on('mouseleave', function () {
        $(this).removeClass('active')
      })
    })

    function progressBar () {
      // grabbed from the www
      // not my proudest commit
      // IIFE so no side-effects happen
      // TODO: refactor
      var getMax = function () {
        return $document.height() - $(window).height()
      }

      var getValue = function ()  {
        return $window.scrollTop()
      }

      var getWidth = function(){
        // Calculate width in percentage
        value = getValue()
        width = (value/max) * 100
        width = width + '%'
        return width
      }

      var setWidth = function(){
        progressBar.css({ width: getWidth() })
      }

      var progressBar = $('.progress-bar')
      var max = getMax()
      var value
      var width

      $document.on('scroll', setWidth)
      $window.on('resize', function(){
        // Need to reset the Max attr
        max = getMax()
        setWidth()
      })
    }

    progressBar()

    window.addEventListener("load", function(){
      window.cookieconsent.initialise({
        "location": true,
        "palette": {
        "popup": {
          "background": "#dedede",
          "text": "#404040"
        },
        "button": {
          "background": "#8ec760",
          "text": "#ffffff"
        }
        },
        "theme": "edgeless",
        "content": {
        "href": "https://blog.risingstack.com/privacy-policy/"
        }
      })
    })

    window.twttr = (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {}
      if (d.getElementById(id)) return t
      js = d.createElement(s)
      js.id = id
      js.src = "https://platform.twitter.com/widgets.js"
      fjs.parentNode.insertBefore(js, fjs)

      t._e = []
      t.ready = function(f) {
        t._e.push(f)
      }

      return t
    }(document, "script", "twitter-wjs"))

})(jQuery, hljs)
