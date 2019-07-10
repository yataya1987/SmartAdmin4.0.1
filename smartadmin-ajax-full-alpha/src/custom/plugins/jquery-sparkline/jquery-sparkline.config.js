document.addEventListener('DOMContentLoaded', function () {
	/* this sets all default colors and width sizes - however you can still override them with the HTML tagOptions */
	/* this is a non-destructive settings which can be applied to any sparkline chart to keep things constant */
	$('.sparklines').sparkline('html', {
		// enables you to use HTML tad options (eg. sparkBarWidth="100")
		enableTagOptions: true,
		// you can also use percentage (eg. "100%")
		width: 110,
		// globalized height
		height: 40,
		// globalize bar spacing
		barSpacing: "3px",
		// globalized bar width
		barWidth: "7px",		
		// the point radius of line chart
		spotRadius: 3,
		// the red line color
		highlightLineColor: myapp_get_color.danger_700,
		// used for box chart
		targetColor: myapp_get_color.danger_500,
		// used for box chart
		performanceColor: myapp_get_color.primary_700,
		// range colors
		rangeColors: [myapp_get_color.primary_100, myapp_get_color.primary_200, myapp_get_color.primary_300],
		// stacked bar colors
		stackedBarColor: [myapp_get_color.danger_300, myapp_get_color.info_300],
		//pie colors
		sliceColors: [myapp_get_color.success_500, myapp_get_color.info_500, myapp_get_color.danger_500, myapp_get_color.primary_500, myapp_get_color.warning_500, myapp_get_color.primary_700, myapp_get_color.info_700, myapp_get_color.danger_700]
	});
});
