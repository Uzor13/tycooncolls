
$('.like-btn').on('click', function() {
    $(this).toggleClass('');
});
$('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value > 1) {
        value -= 1;
    } else {
        value = 0;
    }
    $input.val(value);
});
$('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value < 100) {
        value += 1;
    } else {
        value = 100;
    }
    $input.val(value);
});

var nls = document.getElementById('priceSlider');
noUiSlider.create(nls, {
    connect: true,
    behaviour: 'tap',
    tooltips: [true, true],
    start: [1000, 25000],
    range: {
        'min': [1000],
        'max': [100000]
    }
});
var nodes = [document.getElementById('lower'), document.getElementById('upper')];
nonLinearSlider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
    nodes[handle].innerHTML = '&#8358;' + values[handle] + ', ' + positions[handle].toFixed(2) + '%';
});


