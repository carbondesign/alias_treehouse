'use strict';
const angular = require('angular');
import filesaver from 'file-saver'

export default angular.module('alikaApp.codeeditor', [])
    .component('codeeditor', {
        template: require('./codeeditor.html'),
        controller: function() {
            this.isCollapsed = true;
	        var editor = ace.edit("editor");
	        editor.setTheme("ace/theme/twilight");
	        editor.session.setMode("ace/mode/html");
	        this.saveFile = function(){
	        	var editorContent = editor.getValue();
	        	var blob = new Blob([editorContent], {type: "text/plain;charset=utf-8"});
				filesaver.saveAs(blob, "poster.html");

				// var file = new File([editorContent], "poster.html", {type: "text/plain;charset=utf-8"});
				// filesaver.saveAs(file);
	        }
	        // or use data: url to handle things like doctype
	        function showHTMLInIFrame() {
	            document.getElementById('results').innerHTML = ("<iframe src=" +
	                "data:text/html," + encodeURIComponent(editor.getValue()) +
	            	" width='275px' height='350px' id='content'></iframe>");
	        }
	        editor.on("input", showHTMLInIFrame)
        },
        bindings: {
	        isCollapsed: '<'
	    }
    })
    .name;
