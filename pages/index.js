import {useEffect, useState} from "react"
import Today from "../components/Today";
import CardGroup from "../components/CardGroup";
import Head from "next/head";
import Search from "../components/Search";
import ErrorComp from "../components/ErrorComp";
export default function Home(props) {
    const [cityData, setCityData] = useState()
    const [error, setError] = useState()


    const search = async (city) => {
        const res = await fetch(`http://localhost:3000/api/${city}`)
        const cityData = await res.json()
        if(cityData.error){
            return setError(cityData.error)
        }
        const day0 = cityData.list[0],
            day1 = cityData.list[8],
            day2 = cityData.list[16],
            day3 = cityData.list[24],
            day4 = cityData.list[32]
        const newCityData = {
            cityName: cityData.city.name,
            days: [
                day0,
                day1,
                day2,
                day3,
                day4
            ]
        }
        setCityData(newCityData)

    }

    useEffect(() => {
        setCityData(props.newCityData)
    }, [])

    useEffect(() => {
        if (error === undefined) return;
        setTimeout(() => {
            setError(undefined)
        }, 4000)
    }, [error])
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap"
                      rel="stylesheet"/>
                <title>Weather Forecast</title>
                <link rel="icon" href="https://www.woxe.me/wnew.png"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>

            <div className="app">
                {props.error !== undefined || error ? (
                    <ErrorComp error={error}/>
                ) : ""}
                {cityData !== undefined ? (
                    <>
                        <Today city={cityData}/>
                        <CardGroup city={cityData}/>
                        <Search search={search}/>
                    </>
                ) : ""
                }
            </div>
            <p className="api"><a href="https://www.rapidapi.com"  rel="nofollow">This website using RapidApi</a></p>

        </>

    )
}

export async function getStaticProps() {
    const res = await fetch(`http://localhost:3000/api/Ankara`)
    const cityData = await res.json()
    if(cityData.error) {
       return {props: {error : cityData.error}}
    }
    const day0 = cityData.list[0],
        day1 = cityData.list[8],
        day2 = cityData.list[16],
        day3 = cityData.list[24],
        day4 = cityData.list[32]
    const newCityData = {
        cityName: cityData.city.name,
        days: [
            day0,
            day1,
            day2,
            day3,
            day4
        ]
    }

    return {props: {newCityData}}
}

/*

 */
