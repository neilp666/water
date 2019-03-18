var phrases = [
    "Keep",
    "Keep It ",
    "Keep It Fresh",
    "Kepp It Fresh & ",
    "Keep it Fresh & Simple",
]

$("input").on("input", function () {
        
    var value = $(this).val()

    var phrase = phrases[value]

    $("h1.heading").html(phrase)


})