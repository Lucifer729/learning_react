import React, {Component} from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';


class Chart extends Component{
	constructor(props){
		super(props);
		this.state = {
			chartData:{
				labels:['a','b','c'],
				datasets:[
				{
					label:'Population',
					data:[1,2,3],
					backgroundColor:['pink','pink','pink'] 
				}]
			}
		}
	}
	render(){
		return(
			<div className="chart">
			Chart
			<Line
			  data={this.state.chartData}
			  width={100}
			  height={50}
			  options={{ maintainAspectRatio: false }}
			/>
			<Line
			  data={this.state.chartData}
			  width={100}
			  height={50}
			  options={{ maintainAspectRatio: false }}
			/>

			<Bar
			  data={this.state.chartData}
			  width={100}
			  height={50}
			  options={{ maintainAspectRatio: false }}
			/>
			</div>
			)
	}
}

export default Chart;