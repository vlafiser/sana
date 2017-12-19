
let $slider
let $layer
let $tooltip
let $tooltips
var tooltipInfoVisible = 0

var sliderWidth
var selectedPayment = 1 // 0 === monthly; 1 === yearly;
var finalValue = 0
var limit

var selectedInfo = 0

$(document).ready(function () {
  var bricklayer = new Bricklayer(document.querySelector('.bricklayer'))

  $slider = $('#slider')

  // Add TOOLTIP
  addTooltip()
  $tooltips = $tooltip.find('span')

  // Add LAYER
  $slider.append("<div class='layer'></div>")
  $layer = $slider.children('.layer')

  sliderWidth = $slider.width()
  selectedPaymentChange(1)

  var money = function (num, dg) {
  	if (num == 'Unlimited') {
  		return num
  	}

    str = num.toFixed(dg || 0)
    x = str.split('.')
    x1 = x[0]
    x2 = x.length > 1 ? '.' + x[1] : ''
    var rgx = /(\d+)(\d{3})/
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + '.' + '$2')
    }
    return x1 + x2
  }

  $slider.slider({
    min: 0,
    max: 60,
    step: 1,
    values: [15], // change it for default value
    create: function (event, ui) {
    	let value = 15
    	limit = sliderWidth - 110

    	finalValue = (value - 5) * 10000

    	updateData()
    	updateLayerWidth()
    	updateTooltipPosition(value, limit)
    },
    slide: function (event, ui) {
      updateLayerWidth()

      let value = ui.values[0]
      // limit = sliderWidth - 110

      // MONTHLY
			// 0 — 100K
			// $2,000/mo base for 100K MAU

			// 100K — 250K
			// $2,000/mo base for 100K MAU + $20/mo 1,000 MAU

			// 250K — 1M
			// $2,000/mo base + $20/mo 1,000 MAU + $18/mo 1,000 MAU

			// 1M — ∞
			// $2,000/mo base + $20/mo 1,000 MAU + $18/mo 1,000 MAU

			// ANNUAL
			// 0 — 100K
			// $1,800/mo base for 100K MAU

			// 100K — 250K
			// $1,800/mo base for 100K MAU + $18/mo per 1,000 MAU extra

			// 250K — 1M
			// $4,000/mo base for 250K MAU + $16/mo per 1,000 MAU extra

			// 1M — ∞
			// $4,000/mo base for 250K MAU + $16/mo per 1,000 MAU extra

      if (value <= 5) {
        	finalValue = value * 1000
      } else if (value <= 35) {
        	finalValue = (value - 5) * 10000
        	tooltipInfoVisible = 1
        	tooltipInfoChange(tooltipInfoVisible)
      } else if (value <= 39) {
        	finalValue = (value - 29) * 50000
        	tooltipInfoVisible = 2
        	tooltipInfoChange(tooltipInfoVisible)
      } else if (value <= 45) {
        	finalValue = (value - 35) * 100000
      } else if (value <= 59) {
        	finalValue = (value - 44) * 1000000
      } else if (value <= 60) {
        	finalValue = 'Unlimited'
      }

      // console.log('value: ' + value)

      if (value < 15) {
      	tooltipInfoVisible = 0
        tooltipInfoChange(tooltipInfoVisible)
      } else if (value >= 15 && value < 30) {
      	tooltipInfoVisible = 1
        tooltipInfoChange(tooltipInfoVisible)
      } else if (value >= 30) {
      	tooltipInfoVisible = 2
        tooltipInfoChange(tooltipInfoVisible)
      }

      if (value > 44) {
        toggleContactButton(true)
      } else {
      	toggleContactButton(false)
      }

      updateData()
      updateTooltipPosition(value, limit)
    },
    stop: function (event, ui) {
    	updateLayerWidth()
    	updateTooltipPosition(ui.values[0], sliderWidth - 110)
    }
  })

  $('#btn-01').click(function () {
    paymentButtons($(this))
    updateData()
  })
  $('#btn-02').click(function () {
    paymentButtons($(this))
    updateData()
  })

  $('#slider').click(function () {
    paymentButtons($(this))
    updateData()
  })

  function paymentButtons (event) {
  	$(event).parents('.row').find('.active').removeClass('active')

	  if (!$(event).hasClass('active')) {
	  	if ($(event).attr('id') == 'btn-01') {
	  		selectedPayment = 0
	  	} else if ($(event).attr('id') == 'btn-02') {
	  		selectedPayment = 1
	  	}
	    $(event).addClass('active')
	    tooltipInfoChange(tooltipInfoVisible)
	  }
  }

  function updateData () {
  	$('#users').text(money(finalValue))

  	var basePrice = selectedPayment == 0 ? 2000 : 1800 // for first 100K MAU
  	var extraPrice = selectedPayment == 0 ? 20 : 18  	 // for +1000 MAU

  	var base200Price = selectedPayment == 0 ? 2000 : 4000  	 // for first 250K MAU
  	var extra200Price = selectedPayment == 0 ? 18 : 16  	 // for +1000 MAU

  	var extraFinal
  	var price

  	if (finalValue > 100000 && finalValue < 250000) {
  		var value = finalValue - 100000
	  	var extra = value / 1000
	  	extraFinal = extra * extraPrice
  	} else if (finalValue >= 250000) {
  		if (selectedPayment == 0) {
  			var upTo100 = ((150000 / 1000) * extraPrice)

  			var value = finalValue - 250000
		  	var extra = value / 1000
		  	extraFinal = extra * extra200Price
		  	extraFinal += upTo100
  		} else {
  			var value = finalValue - 250000
		  	var extra = value / 1000
		  	extraFinal = extra * extra200Price
  		}
  	}

  	if (extraFinal != null) {
  		price = (finalValue >= 250000 ? base200Price : basePrice) + extraFinal
  	} else {
  		price = (finalValue >= 250000 ? base200Price : basePrice)
  	}

    $('#price').text('$' + money(price))
  }

  function updateLayerWidth () {
  	let _slider = $slider.children('.ui-slider-handle')
    $layer.css('width', _slider.css('left'))
  }

  function updateTooltipPosition (value, limit) {
  	if ($layer.width() <= 110) {
  		$tooltip.css('left', '110px')
  	} else if ($layer.width() > 110 && $layer.width() < limit) {
  		$tooltip.css('left', '' + ((value / 60) * 100) + '%')
  	} else if ($layer.width() >= limit) {
  		$tooltip.css('left', '' + limit + 'px')
  	}
  }
})

// <span class=\"t-00\">$2,000/mo base for 100K MAU</span>
// <span class=\"t-10\">$2,000/mo base for 100K MAU + $20/mo 1,000 MAU</span>
// <span class=\"t-20\">$2,000/mo base + $20/mo 1,000 MAU + $18/mo 1,000 MAU</span>

// <span class=\"t-01 active\">$1,800/mo base for 100K MAU</span>
// <span class=\"t-11\">$1,800/mo base for 100K MAU + $18/mo per 1,000 MAU extra</span>
// <span class=\"t-21\">$4,000/mo base for 250K MAU + $16/mo per 1,000 MAU extra</span>

function addTooltip () {
  $slider.append("<div class='tooltip' id=\"tooltip\"><span class=\"t-00\">$2,000/mo base for 100K MAU</span><span class=\"t-10\">$2,000/mo base for 100K MAU<br>+ $20/mo 1,000 MAU</span><span class=\"t-20\">$2,000/mo base<br>+ $20/mo 1,000 MAU<br>+ $18/mo 1,000 MAU</span><span class=\"t-01 active\">$1,800/mo base for 100K MAU</span><span class=\"t-11\">$1,800/mo base for 100K MAU<br>+ $18/mo per 1,000 MAU extra</span><span class=\"t-21\">$4,000/mo base for 250K MAU<br>+ $16/mo per 1,000 MAU extra</span></div>")
  $tooltip = $('#tooltip')
}

function toggleContactButton (bool) {
  let $el = $('#price-data')

  if (bool == true && !$el.hasClass('visible')) {
  	$el.addClass('visible')
  } else if (bool == false) {
    $el.removeClass('visible')
  }
}

function tooltipInfoChange (id) {
  // console.log('--------------------------')
  // console.log('.t-' + id + selectedPayment)
  // console.log(id, $tooltip, $slider)
  $tooltip.find('span').removeClass('active')
  $tooltip.find('.t-' + id + selectedPayment).addClass('active')
}

function selectedPaymentChange (value) {
  	if (value == 0) {
  		selectedPayment = 0
  	}  	else {
  		selectedPayment = 1
  	}

  	// console.log('selectedPayment is: ' + selectedPayment)
}
