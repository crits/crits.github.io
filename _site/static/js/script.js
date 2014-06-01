$(document).ready(function() {
    $(window).load(function() {
        $('#slider .slides').cycle({
            'pager': '.pager',
            'timeout': 6000,
        });
    });
    $("[data-repo]").github({
        iconStars:  true,
        iconForks:  true,
        iconIssues: true
    });
});
