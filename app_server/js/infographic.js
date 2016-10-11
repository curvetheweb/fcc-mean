$(function(){
	//Vacant Lot Chart
	console.log(firing);
	Chart.defaults.global.defaultFontColor = '#fff';
//	Chart.defaults.global.maintainAspectRatio = false;
	
	var ctx = $("#js-vacant-land-chart"),
		ctx2 = $('#js-tree-plantings-chart');
	
	var vacantLot = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: [['No New', 'Trees'], ['New Trees', 'Within 50ft.']],
			datasets: [{
				label: 'House Price (Thousands)',
				data: [35, 38.4],
				backgroundColor: [
					'rgba(255, 255, 255, 1)',
					'rgba(255, 255, 255, 1)'
				],
				borderColor: [
					'rgba(255, 255, 255, 1)',
					'rgba(255, 255, 255, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: false,
						min: 30,
						max: 40
					}
				}]
			}
		}
	});
	
	var treePlantings = new Chart(ctx2, {
		type: 'bar',
		data: {
			labels: [['No New', 'Trees'], ['New Trees', 'Within 50ft.']],
			datasets: [{
				label: 'Change to Avg. House',
				data: [0, 3400],
				backgroundColor: [
					'rgba(255, 255, 255, 1)',
					'rgba(255, 255, 255, 1)'
				],
				borderColor: [
					'rgba(255, 255, 255, 1)',
					'rgba(255, 255, 255, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
		
	});
	
	
	
	
});