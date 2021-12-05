import { useEffect, useState } from "react";
import { Typography, NativeSelect } from '@material-ui/core';
import { fetchCountries } from '../service/api';

const Countries  = ({ handleCountryChange }) => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            setCountries(await fetchCountries());
        }
        fetchApi();
    }, [])
    return (
        <>
            <Typography variant='h6' style={{ color: 'gray' }}>Reported Cases or Death by Territories</Typography>
            <NativeSelect onChange = {(e) => handleCountryChange(e.target.value)} >
                <option value = "">BHARAT</option>
                { countries.map((country, i) => {
                    return (
                        <option key={i} value={country}>{country}</option>
                    )
                })}
            </NativeSelect>
        </>
    )
}
export default Countries;