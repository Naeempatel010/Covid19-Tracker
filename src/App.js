import React from "react";
import {Cards, Chart , CountryPicker} from "./components";
import styles from './App.module.css';
import {fetchData} from "./api";
import coronaimage from "./images/image.png";
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data :{},
            country : '', 
        }
    }
    async componentDidMount() {
         const data = await fetchData();
         //console.log(data);
         this.setState({
             data : data,
         });
    }
      handleCountryChange = async (country) =>{
        console.log(country);
        const data = await fetchData(country);
        this.setState({
            data : data,
            country : country,
        });
        

    }
    render(){
        return(
            <div>
            <div className = {styles.container}>
                <img src = {coronaimage}  alt = "Covid19"/>
                <Cards data={this.state.data}/>
                <CountryPicker countrychange = { this.handleCountryChange } />
                <Chart data = {this.state.data} country = {this.state.country}/>   
            </div>
            <Footer bottom =  "made with ❤️ by Naeem Patel"  theme = "dark "/>
            </div>
        )
    }
}

export default App;

