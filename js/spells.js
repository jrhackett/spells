$jq = jQuery.noConflict();

// need to improve performance - look into jquery debounce for this
function handleSearch() {
    var query = $jq("#spell-search").val().toLowerCase();
    $jq.each($jq(".spell"), function(key, $val) {
        $toChange = $jq("#" + $val.id);
        $name = $jq("#" + $val.id + " .spell-name");
        $level = $jq("#" + $val.id + " .spell-level");
        $school = $jq("#" + $val.id + " .spell-school");
        ($name.text().toLowerCase().indexOf(query) !== -1) || ($school.text().toLowerCase().indexOf(query) !== -1) || ($level.text().toLowerCase().indexOf(query) !== -1) ? $toChange.show() : $toChange.hide();
    });
}


