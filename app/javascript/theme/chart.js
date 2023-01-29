/*
 * Add color theme colors to the window object
 * so this can be used by the charts and vector maps
 */

const theme = {
    "primary": "var(--bs-primary)",
    "secondary": "var(--bs-secondary)",
    "success": "var(--bs-success)",
    "info": "var(--bs-info)",
    "warning": "var(--bs-warning)",
    "danger": "var(--bs-danger)",
    "dark": "var(--bs-dark)",
    "light": "var(--bs-light)",
    "white": "var(--bs-white)",
    "gray100": "var(--bs-gray-100)",
    "gray200": "var(--bs-gray-200)",
    "gray300": "var(--bs-gray-300)",
    "gray400": "var(--bs-gray-400)",
    "gray500": "var(--bs-gray-500)",
    "gray600": "var(--bs-gray-600)",
    "gray700": "var(--bs-gray-700)",
    "gray800": "var(--bs-gray-800)",
    "gray900": "var(--bs-gray-900)",
    "black": "var(--bs-black)",
	"lightPrimary": "var(--bs-light-primary)",
	"lightSecondary": "var(--bs-light-secondary)",
	"lightSuccess": "var(--bs-light-success)",
	"lightDanger": "var(--bs-light-danger)",
	"lightWarning": "var(--bs-light-warning)",
	"lightInfo": "var(--bs-light-info)",
	"darkPrimary": "var(--bs-dark-primary)",
	"darkSecondary": "var(--bs-dark-secondary)",
	"darkSuccess": "var(--bs-dark-success)",
	"darkDanger": "var(--bs-dark-danger)",
	"darkWarning": "var(--bs-dark-warning)",
	"darkInfo": "var(--bs-dark-info)"
  };

  // Add theme to the window object
  window.theme = theme;


(function () {

	 // Earning chart

	 if ($("#earning").length) {
		var options = {
			series: [
				{
					name: 'Listing',
					data: [21, 13, 25, 20, 30, 16, 32, 22, 46],
				},
			],
			chart: {
			height: 400,
			type: 'area',
			toolbar: {
				show: false,
			},
		  },
		  dataLabels: {
			enabled: false
		  },
		  stroke: {
			curve: 'smooth',
			width: 3,
		  },
		  colors: [window.theme.primary],
		  fill: {
	  
			  type: 'gradient',
			  gradient: {
				  gradientToColors: [window.theme.primary],
				  shadeIntensity: 0.9,
				  opacityFrom: 0.5,
				  opacityTo: 0.04,
				  stops: [0, 80, 100],
			  },
		  },
		  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		  xaxis: {
			
		  },
		  markers: {
			size: 6,
			hover: {
				size: 8,
				sizeOffset: 5,
			},
		},
		
		tooltip: {
			x: {
				show: true,
			},
		},
		  };
  
		  var chart = new ApexCharts(document.querySelector("#earning"), options);
		  chart.render();
		
	  }




	 



	
})();
