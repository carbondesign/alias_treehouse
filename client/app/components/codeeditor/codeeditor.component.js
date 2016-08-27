'use strict';
const angular = require('angular');

export default angular.module('aliaApp.codeeditor', [])
    .component('codeeditor', {
        template: require('./codeeditor.html'),
        controller: function() {
            this.isCollapsed = true;
	        var editor = ace.edit("editor");
	        editor.setTheme("ace/theme/twilight");
	        editor.session.setMode("ace/mode/html");

	        // function showHTML() {
	        //     document.getElementById('return').html(editor.getValue());
	        // }
	        // or use data: url to handle things like doctype
	        function showHTMLInIFrame() {
	            document.getElementById('results').innerHTML = ("<iframe src=" +
	                 "data:text/html," + encodeURIComponent(editor.getValue()) +
	            "></iframe>");
	        }
	        editor.on("input", showHTMLInIFrame)
        },
        bindings: {
	        isCollapsed: '<'
	    }
    })
    .name;
