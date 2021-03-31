import React,{useState,useEffect} from 'react'
import {Line} from "react-chartjs-2";
import numeral from "numeral";
const options={
    legend:{
        display:false,
    },
    elements:{
        point:{
            radius:0,
        },
    },
    maintainAspectRatio: false,
    tooltips: {
      mode: "index",
      intersect: false,
      callbacks: {
        label: function (tooltipItem, data) {
          return numeral(tooltipItem.value).format("+0,0");
        },
    },
  },   
};  
function LineGraph() {
    const [data,setData]=useState({});

    const buildCharData=(data,casesType='cases')=>{
        const charData=[];
        let lastDataPoint;
          for(let date in data.cases){
            if(lastDataPoint) {
                const newDataPoint={
                    x:date,
                    y:data[casesType][date]-lastDataPoint, 
        }; 
        charData.push(newDataPoint);
       }
       lastDataPoint=data[casesType][date];
    }
        return charData;
        };
     
    useEffect(()=>{
      fetch('https://disease.sh/v3/covid-19/hostorical/all?lastdays=120')
      .then(response=>response.json())
      .then(data=>{
          //stuff here
const charData=buildCharData(data,'cases');
          setData(charData);
      });
},[]); 

    
    return (
        <div>
            <h1>a graph</h1>
            <Line options={options}
             data={{
                datasets:[{
                    backgroundColor:"rgba(204,16,52,0.5)",
                    borderColor:"#CC1034",
                 data: data,
                },
            ],
            }} /> 
        </div>
    );
}

export default LineGraph
