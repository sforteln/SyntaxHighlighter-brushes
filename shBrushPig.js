SyntaxHighlighter.brushes.Pig=function()
{					
	var grunt = 'exec run cat cd copyFromLocal copyToLocal cp ls mkdir mv pwd rm rmf help kill quit set';
	var datatypes = 'int long float double chararray bytearray tuple bag map';
	var diagnosticOperators = 'describe dump explain illustrate';
	var evaFunctions = 'AVG CONCAT COUNT DIFF IsEmpty MAX MIN SIZE SUM TOKENIZE';
    var relationalOperators =	'cogroup cross distinct filter foreach group join inner outer full left '+
								'limit load order sample split store stream union';

	this.regexList = [
		{ regex: /--(.*)$/gm,			css: 'comments' },	// one line comments
		{ regex: SyntaxHighlighter.regexLib.multiLineCComments,				css: 'comments' },	// multiline comments
		{ regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString,	css: 'string' },			// double quoted strings
		{ regex: SyntaxHighlighter.regexLib.multiLineSingleQuotedString,	css: 'string' },			// single quoted strings
		{ regex: new RegExp(this.getKeywords(datatypes), 'gmi'),				css: 'color1' },			// datatypes
		{ regex: new RegExp(this.getKeywords(relationalOperators), 'gmi'),			css: 'keyword' },			
		{ regex: new RegExp(this.getKeywords(diagnosticOperators), 'gmi'),			css: 'keyword' },			
		{ regex: new RegExp(this.getKeywords(evaFunctions), 'gm'),			css: 'color2' },			
		{ regex: new RegExp(this.getKeywords(grunt), 'gmi'),			css: 'keyword' }			// grunt
		];

};
SyntaxHighlighter.brushes.Pig.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Pig.aliases = ['pig'];