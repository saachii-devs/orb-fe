import {Doughnut} from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);
function DoughnutChart() {
    const data = {
        labels: ['Optimal','Faulty','Moderate'],
        datasets: [
            {
                label: 'Attendance for Week 1',
                data: [38,42,20],
                borderColor: ['rgba(0,0,0,0)'],
                backgroundColor: ['rgba(8,183,246,1)',
                'rgba(68,75,83,1)',
                'rgba(45,49,55,1)'],
                // pointBackgroundColor: 'rgba(255,206,86,0.2)',
            }
            
        ]
    }
    const options = {
        
        plugins: {
            title: {
                padding:{
                    top:20,
                    bottom:20
                },
                animation:{
                    animateScale: true,
                               }
            }
        },
        cutout: 70,
        
    }
    return (
        <div className=''>
           <Doughnut data={data} options={options} />
        </div>
    )
}

export default DoughnutChart