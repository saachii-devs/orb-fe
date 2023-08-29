import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);

function DoughnutChart() {
  const data = {
    labels: ['Optimal', 'Faulty', 'Moderate'],
    datasets: [
      {
        label: 'Attendance for Week 1',
        data: [38, 42, 20],
        borderColor: ['rgba(0,0,0,0)'],
        backgroundColor: ['rgba(8,183,246,1)', 'rgba(68,75,83,1)', 'rgba(45,49,55,1)'],
      },
    ],
  };


  const cutout = window.innerWidth < 768 ? 50 : 60;

  const options = {
    plugins: {
      title: {
        padding: {
          top: 10,
          bottom: 10,
        },
        animation: {
          animateScale: true,
        },
      },
    },

    cutout: cutout,
  };

  return (
    <div className="">
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default DoughnutChart;
