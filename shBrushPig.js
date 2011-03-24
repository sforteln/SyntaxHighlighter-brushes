SyntaxHighlighter.brushes.Pig=function()
{
        // CommonJS
        typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

        function Brush()
        {
                var keywords =  'load using as foreach generate';

                this.regexList = [
                        { regex: SyntaxHighlighter.regexLib.singleLineCComments,        css: 'comments' },              // one line comments
                        { regex: /\/\*([^\*][\s\S]*)?\*\//gm,                                           css: 'comments' },              // multiline comments
                        { regex: /\/\*(?!\*\/)\*[\s\S]*?\*\//gm,                                        css: 'preprocessor' },  // documentation comments
                        { regex: SyntaxHighlighter.regexLib.doubleQuotedString,         css: 'string' },                // strings
                        { regex: SyntaxHighlighter.regexLib.singleQuotedString,         css: 'string' },                // strings
                        { regex: /\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi,                         css: 'value' },                 // numbers
                        { regex: /(?!\@interface\b)\@[\$\w]+\b/g,                                       css: 'color1' },                // annotation @anno
                        { regex: /\@interface\b/g,                                                                      css: 'color2' },                // @interface keyword
                        { regex: new RegExp(this.getKeywords(keywords), 'gm'),          css: 'keyword' }                // java keyword
                        ];

                this.forHtmlScript({
                        left    : /(&lt;|<)%[@!=]?/g, 
                        right   : /%(&gt;|>)/g 
                });
        };

        Brush.prototype = new SyntaxHighlighter.Highlighter();
        Brush.aliases   = ['pig'];

        SyntaxHighlighter.brushes.Pig = Brush;

        // CommonJS
        typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
};SyntaxHighlighter.brushes.Pig.prototype=new SyntaxHighlighter.Highlighter();SyntaxHighlighter.brushes.Pig.aliases=['pig'];