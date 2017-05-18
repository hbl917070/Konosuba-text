/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	config.toolbarGroups = [
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'about', groups: [ 'about' ] }
	];

	config.removeButtons = 'Source,NewPage,Preview,Print,Save,Cut,Undo,Paste,PasteText,PasteFromWord,Copy,Redo,Replace,Find,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Superscript,Subscript,Image,Flash,Smiley,PageBreak,SpecialChar,Iframe,Styles,Format,ShowBlocks,About,Link,Unlink,Anchor,Language,BidiRtl,BidiLtr,CreateDiv,Blockquote,Templates,CopyFormatting,Maximize';
	
	config.removeButtons = 'Source,Save,NewPage,Preview,Print,Templates,Cut,Undo,Redo,Paste,PasteText,Copy,PasteFromWord,Replace,SelectAll,Scayt,Form,Checkbox,Radio,Textarea,Select,Button,ImageButton,HiddenField,TextField,Blockquote,CreateDiv,Language,BidiLtr,Link,Unlink,Anchor,Flash,SpecialChar,Iframe,Maximize,About,Find,Superscript,Subscript,BidiRtl,Smiley,Styles,Format,PageBreak';
	
	//字型size
	config.fontSize_sizes = '12/12;16/16;20/20;24/24;36/36;48/48;60/60;72/72;90/90;';
	
	//字體
	config.font_names = 'Konosuba;微軟正黑體;新細明體;標楷體;Arial;Arial Black;Comic Sans MS;Courier New;Tahoma;Times New Roman;Verdana';
	
	//還原次數
	config.undoStackSize = 50;
};