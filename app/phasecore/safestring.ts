class SafeString {
    private content: string;

    constructor(content: string) {
        this.content = content;
    }

    public asIs(): string {
        return this.content;
    }

    public setContent(content: string): void {
      this.content = content;
    }

    public withoutBbcodeAndHtml(): string {
      return this.escapeHtml(this.withBbcodeStripped());
    }

    public withBbcodeStripped(): string {
      return this.stripBbcode(this.asIs());
    }

    /* Strips bbcode tags from the input string */
    public stripBbcode(text: string): string {
      var search = [
        // Slight problem with [url] conflict "/(?<!.)((http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?)/",
        /\[notag\](\[)(.*?)\[\/notag\]/i,
        /\[b\](.*?)\[\/b\]/gi,
        /\[i\](.*?)\[\/i\]/gi,
        /\[u\](.*?)\[\/u\]/gi,
        /\[ul\](.*?)\[\/ul\]/gi,
        /\[li\](.*?)\[\/li\]/gi,
        /\[s\](.*?)\[\/s\]/,
        /\[img\](.*?)\[\/img\]/gi,
        /\[url=(.*?)\](.*?)\[\/url\]/gi,
        /\[url\](.*?)\[\/url\]/gi,
        /\[quote=(.*?)\](.*?)\[\/quote\]/gi,
        /\[center\](.*?)\[\/center\]/gi,
        //'/\[youtube](.*?)?v=(.*?)\[\/youtube\]/',
        //ASCII
        /&amp;#91;/gi,
        //smileys
        /\:\)/gi,
        /\:\(/gi,
        /\&gt\;:D/gi,
        /\:D/gi,
        /\:P/gi,
        /\;\)/gi,
        /\(evil\)/gi,
        /\(bash\)/gi,
        /\(poolparty\)/gi,
        /\(party\)/gi,
        /\(hi\)/gi,
        /\(knuckles\)/gi,
        /\:O/gi,
        /\\\o\//gi,
        /\[#(.*?)\]/gi,
        /\[color=(.*?)\](.*?)\[\/color\]/gi,
        /\[colour=(.*?)\](.*?)\[\/colour\]/gi
      ];

      var replace = [
        // "<a href=\"$2\">$2</a>",
        '$2',
        '$1',
        '$1',
        '$1',
        '$1',
        '$1',
        '$1',
        '$1',
        '$1',
        '$1', // This is now handled by linkify
        '$2',
        '$1',
        //'<iframe width="560" height="315" src="//www.youtube-nocookie.com/embed/$2?rel=0" frameborder="0" allowfullscreen></iframe>',
        //ASCII
        '[',
        //smileys
        ':)',
        ':(',
        '>:D',
        ':D',
        ':P',
        ';)',
        '(evil)',
        '(bash)',
        '(poolparty)',
        '(party)',
        '(hi)',
        '(knuckles)',
        ':O',
        '\\o/',
        '&#$1;',
        '$2',
        '$2'

      ];

      for (var index in search) {
        text = text.replace(search[index], replace[index]);
      }

      return text;
    }

    public getContentWithHtmlEscaped(quote_style?: any, charset?, double_encode?): string {
      return this.escapeHtml(this.asIs(), quote_style, charset, double_encode);
    }
    
    /* Converts html characters into their equivalent & codes
       TODO: Cleanup and add types        */
    public escapeHtml(content: string, quote_style?: any, charset?, double_encode?): string {
      let optTemp = 0;
      let i = 0;
      let noquotes = false;

      /* Default quote_style to 2 */
      if (typeof quote_style === 'undefined' || quote_style === null) {
        quote_style = 2;
      }

      if (double_encode !== false) { // Put this first to avoid double-encoding
        content = content.replace(/&/g, '&amp;');
      }

      content = content.replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

      var OPTS = {
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
        quote_style = [].concat(quote_style);
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
        content = content.replace(/'/g, '&#039;');
      }
      if (!noquotes) {
        content = content.replace(/"/g, '&quot;');
      }

      return content;
    }
}

export default SafeString;