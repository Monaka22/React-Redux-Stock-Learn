import React, { Component } from 'react';
import { Line,Bar,Pie} from 'react-chartjs-2'
class Report extends Component {

  constructor(props) {
    super(props)
     
    this.state = {
       Type: "bar"
    }
  }
  
  render() {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Revenue 2019',
          fill: true,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [50000, 1000000, 2002000, 3000000, 2000000, 3000000, 4000000, 4500000, ]
        },
        {
          label: 'Revenue 2018',
          fill: true,
          lineTension: 0.1,
          backgroundColor: ["#f00","#f40","#B5EE1E","#1E5AEE","#EE1E60","#801EEE","#EE891E"],
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [199990, 1500000, 5002000, 3500000, 2500000, 3500000, 4500000, 5000000, ]
        }
      ]
    };
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>
            Chart
            <small>Sales</small>
          </h1>
          <div class="btn-group">
            <button type="button" class="btn btn-danger" onClick={()=>{this.setState({Type : "bar"})}}>Bar</button>
            <button type="button" class="btn btn-warning"onClick={()=>{this.setState({Type : "pie"})}} >Pie</button>
            <button type="button" class="btn btn-success"onClick={()=>{this.setState({Type : "line"})}} >Line</button>
          </div>
          {this.state.Type==='bar' &&  <Bar
            data={data}
            width={100}
            height={50}
          /> }
          {this.state.Type==='line' &&  <Line
            data={data}
            width={100}
            height={50}
          /> }
           {this.state.Type==='pie' &&  <Pie
            data={data}
            width={100}
            height={50}
          /> }
        </section>
      </div>
    );
  }
}

export default Report;
