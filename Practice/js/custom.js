jQuery(document).ready(function() {
    jQuery(".theme-mode p").on('click', function() {
        jQuery('body').toggleClass('dark');
    });
});