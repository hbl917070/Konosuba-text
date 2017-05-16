/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */
/*
CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
};*/

CKEDITOR.editorConfig = function( config ) {
	config.toolbarGroups = [
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		'/',
		{ name: 'insert', groups: [ 'insert' ] },
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'about', groups: [ 'about' ] }
	];

	config.removeButtons = 'Source,Save,NewPage,Preview,Print,Templates,Cut,Undo,Redo,Paste,PasteText,Copy,PasteFromWord,Replace,SelectAll,Scayt,Form,Checkbox,Radio,Textarea,Select,Button,ImageButton,HiddenField,TextField,Blockquote,CreateDiv,Language,BidiLtr,Link,Unlink,Anchor,Flash,SpecialChar,Iframe,Maximize,About,Find,Superscript,Subscript,BidiRtl,Smiley,Styles,Format,PageBreak';
	
		//字型size
	config.fontSize_sizes = '10/10pt;16/16px;20/20px;24/24px;36/36px;48/48px;72/72px;90/90px;';
	
	//字體
	config.font_names = 'Konosuba-SansSerif;Konosuba-Pop;微軟正黑體;新細明體;標楷體;Arial;Arial Black;Comic Sans MS;Courier New;Tahoma;Times New Roman;Verdana';
	
	//還原次數
	config.undoStackSize = 50;
};