function countCSSRules() {
    var results = '',
        log = '';
    if (!document.styleSheets) {
        return;
    }
    for (var i = 0; i < document.styleSheets.length; i++) {
        countSheet(document.styleSheets[i]);
    }
    function countSheet(sheet) {
        if (sheet && sheet.cssRules) {
            var count = countSelectors(sheet);

            log += '\nFile: ' + (sheet.href ? sheet.href : 'inline <style> tag');
            log += '\nRules: ' + sheet.cssRules.length;
            log += '\nSelectors: ' + count;
            log += '\n--------------------------';
            if (count >= 4096) {
                results += '\n********************************\nWARNING:\n There are ' + count + ' CSS rules in the stylesheet ' + sheet.href + ' - IE will ignore the last ' + (count - 4096) + ' rules!\n';
            }
        }
    }
    function countSelectors(group) {
        var count = 0
        for (var j = 0, l = group.cssRules.length; j < l; j++) {
            var rule = group.cssRules[j];
            if (rule instanceof CSSImportRule) {
                countSheet(rule.styleSheet);
            }
            if (rule instanceof CSSMediaRule) {
                count += countSelectors(rule);
            }
            if( !rule.selectorText ) {
                continue;
            }
            count += rule.selectorText.split(',').length;
        }
        return count;
    }

    console.log(log);
    console.log(results);
};
countCSSRules();