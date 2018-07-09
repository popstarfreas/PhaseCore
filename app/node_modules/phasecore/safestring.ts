class SafeString {
    protected _content: string;

    constructor(content: string) {
        this._content = content;
    }

    public asIs(): string {
        return this._content;
    }

    public setContent(content: string): void {
      this._content = content;
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
      if (typeof quote_style === "undefined" || quote_style === null) {
        quote_style = 2;
      }

      if (double_encode !== false) { // Put this first to avoid double-encoding
        content = content.replace(/&/g, "&amp;");
      }

      content = content.replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

      const OPTS = {
        ENT_NOQUOTES: 0,
        ENT_HTML_QUOTE_SINGLE: 1,
        ENT_HTML_QUOTE_DOUBLE: 2,
        ENT_COMPAT: 2,
        ENT_QUOTES: 3,
        ENT_IGNORE: 4
      };

      if (quote_style === 0) {
        noquotes = true;
      }

      if (typeof quote_style !== "number") { // Allow for a single string or an array of string flags
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
        content = content.replace(/'/g, "&#039;");
      }
      if (!noquotes) {
        content = content.replace(/"/g, "&quot;");
      }

      return content;
    }
}

export default SafeString;
