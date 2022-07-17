import { Doughnut } from 'react-chartjs-2';


const FamilyTicket = () =>{
  const dataFamily = {
    labels: undefined,
    datasets: [
      {
        label: undefined,
        data: [60, 100],
        backgroundColor: ["#FF8A48", "#4F75FF"],  
      },
      
    ],
  };
  return <Doughnut data={dataFamily}/>
}