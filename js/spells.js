

(function($) {

    $('#spell-search').keyup(debounce(handleSort, 75, true));

    $('select[name="class-select"]').on('change', function() {
        handleSort();
    });

    $('select[name="school-select"]').on('change', function() {
        handleSort();
    });

    $('select[name="level-select"]').on('change', function() {
        handleSort();
    });

    function handleSort() {
        $class_select = $('select[name="class-select"]').val().toLowerCase();
        $level_select = $('select[name="level-select"]').val().toLowerCase().substring(6);
        $school_select = $('select[name="school-select"]').val().toLowerCase();
        var query = $("#spell-search").val().toLowerCase();

        $.each($(".spell"), function(key, $val) { 
            $toChange = $("#" + $val.id);
            $name = $("#" + $val.id + " .spell-name");
            $level = $("#" + $val.id + " .spell-level");
            $school = $("#" + $val.id + " .spell-school");
            $class = $("#" + $val.id + " .spell-classes");

            ($name.text().toLowerCase().indexOf(query) !== -1) 
                && (($school.text().toLowerCase().indexOf($school_select) !== -1) || $school_select.indexOf("any") !== -1)
                && (($level.text().toLowerCase().indexOf($level_select) !== -1) || $level_select.indexOf("any") !== -1)
                && (($class.text().toLowerCase().indexOf($class_select) !== -1) || $class_select.indexOf("any") !== -1)
                    ? $toChange.show() : $toChange.hide();
        });
    }

    //taken from underscore.js
    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            console.log(timeout);
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

}) (jQuery);



