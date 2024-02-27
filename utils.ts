import Item from 'phasecore/item';

class Utils {
    static htmlspecialchars(input: string, quote_style?: number | Array<string>, double_encode?: boolean): string {
        let optTemp = 0;
        let i = 0;
        let noquotes = false;

        // Default to using double quotes
        if (typeof quote_style === 'undefined' || quote_style === null) {
            quote_style = 2;
        }
        
        input = input.toString();

        if (double_encode !== false) { // Put this first to avoid double-encoding
            input = input.replace(/&/g, '&amp;');
        }

        input = input.replace(/</g, '&lt;').replace(/>/g, '&gt;');

        let OPTS = {
            'ENT_NOQUOTES': 0,
            'ENT_HTML_QUOTE_SINGLE': 1,
            'ENT_HTML_QUOTE_DOUBLE': 2,
            'ENT_COMPAT': 2,
            'ENT_QUOTES': 3,
            'ENT_IGNORE': 4
        };

        if (quote_style === 0) {
            noquotes = true;
        }

        if (typeof quote_style !== 'number') { // Allow for a single string or an array of string flags
            quote_style = new Array().concat(quote_style);
            for (i = 0; i < quote_style.length; i++) {
                // Resolve string input to bitwise e.g. 'ENT_IGNORE' becomes 4
                if (OPTS[quote_style[i]] === 0) {
                    noquotes = true;
                } else if (OPTS[quote_style[i]]) {
                    optTemp = optTemp | OPTS[quote_style[i]];
                }
            }
            quote_style = optTemp;
        }

        if (quote_style & OPTS.ENT_HTML_QUOTE_SINGLE) {
            input = input.replace(/'/g, '&#039;');
        }

        if (!noquotes) {
            input = input.replace(/"/g, '&quot;');
        }

        return input;
    }
}

export default Utils;