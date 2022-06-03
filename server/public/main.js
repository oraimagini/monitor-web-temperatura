console.log('temperatura de los fermentadores')

const socket = io();

// DATA Configuration:  
let counterdata = 0;

socket.on('temp', function(dataSerial) {
   console.log(dataSerial)
   myChart.data.labels.push(counterdata)
   myChart.data.datasets.forEach(dataset => {
       dataset.data.push(dataSerial)
   })
// counter input data 
   counterdata++;
   myChart.update();
// print id=printdata HTML
   const temperature = document.getElementById('printdata')
   temperature.innerHTML = `${dataSerial} c°`
})

const ctx = document.getElementById('myChart').getContext('2d');

// color fonts 
Chart.defaults.color = 'white'

// configuration type, data and etc
const myChart = new Chart(ctx, {
   type: 'line',
   data: {
       labels: ['T°'],
       
       datasets: [{
           label: '# Ambar',
           data: [0, 10, 5, 2, 20, 30],
           backgroundColor: [
               'rgba(153, 102, 255, 0.2)'
           ],
           borderColor: [
               /* 'rgba(255, 99, 132, 1)', */
               /* 'rgba(54, 162, 235, 1)', */
               /* 'rgba(255, 206, 86, 1)', */
               /* 'rgba(75, 192, 192, 1)', */
               /* 'rgba(153, 102, 255, 1)', */
               /* 'rgba(255, 159, 64, 1)' */
               /* 'rgba(201, 203, 207, 0.3)', */
               'rgba(153, 102, 255, 1)'
           ],
           borderWidth: 1.5,            
       }]
   },  
   options: {
       scales: {
           y: {
               beginAtZero: true
           }
       },
   }   
});