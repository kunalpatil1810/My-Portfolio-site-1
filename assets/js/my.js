<script>
var $form;
var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbyBJotEqh0brMBbSUPeLBXNPbDgVehg2aI_q2JHpHjgJTIoAPg/exec'
    $.fn.serializeObject = function()
    {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
    if (o[this.name]) {
    if (!o[this.name].push) {
    o[this.name] = [o[this.name]];
    }
    o[this.name].push(this.value || ‘’);
    } else {
    o[this.name] = this.value || ‘’;
    }
    });
    return o;
    };

$('#submit-form').on('click', function(e) {
    e.preventDefault();
    var jqxhr;
    var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serializeObject()
    }).success(
      // do something
    );
})
</script>
