'use strict';
const angular = require('angular');

export class cloudComponent {
	/*@ngInject*/
}

export default angular.module('alikaApp.cloud', [])
	.directive('cloud', function() {
		return {
			template: '<div id="cloudContainer"></div>',
			restrict: 'E',
			transclude: true,
			replace: true,
			link: function(scope, element, attrs) {
				var allClouds = new TimelineLite(),
					$cloudContainer = $("#cloudContainer");


				function initClouds() {
				  //loop through creation of 10 clouds
				  for(var i = 0; i < 8; i ++){
					//dynamically create a cloud element
					var cloud = $('<div class="cloud"></div>').appendTo($cloudContainer);
					//set its initial position and opacity using GSAP
					TweenLite.set(cloud, {left:-10, top:i*40, opacity:0});
					//create a repeating timeline for this cloud
					var cloudTl = new TimelineMax({repeat:-1});
					//fade opacity to 1
					cloudTl.to(cloud, 0.5, {opacity:1})
					//move cloud across its container div with random duration. Start time = 0
					.to(cloud, 20 + (Math.random() * 25), {left:"100%", ease:Linear.easeNone}, 0)
					//0.5 seconds before timeline ends start fading opacity to 0
					.to(cloud, 0.5, {opacity:0}, "-=0.5")
					//add this cloud's timeline to the allClouds timeline at a random start time.
					allClouds.add(cloudTl, Math.random()*35);
				  }
				}


				initClouds();
			}
		};
	})
	.name;
