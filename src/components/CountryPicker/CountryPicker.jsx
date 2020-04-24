import React, {useState, useEffect } from "react";
import  {nativeSelect , FormControl, NativeSelect} from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { Countries } from "../../api";
const CountryPicker = (props) => {
    const [fetchedCountries, setfetchedCountries] = useState([]);
    // console.log(props.countrychange("naeem"));
    useEffect(() =>{
        const fetchCountries = async () =>{
            setfetchedCountries(await Countries())
        }
        fetchCountries();
    },[setfetchedCountries]);
    // console.log(fetchedCountries);
    return(
        <FormControl className = "styles.formControl">
            <NativeSelect default  = "All" onChange = {(e) => e.target.value=="All"?props.countrychange(null):props.countrychange(e.target.value)}>
                <option value ="All">All</option>
                {fetchedCountries.map((country, i)=> <option value={country} key = {i}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;