import React, { useCallback, useEffect, useState } from "react"
import { Chart } from "react-google-charts"
import { HubConnectionBuilder } from "@microsoft/signalr"
import { Covid } from "../../models/CovidModel"
const DashBoard = (props) => {
  const [connection, setConnection] = useState(null)
  const covidChartList = []
  const columnNames = [
    "Tarih",
    "Istanbul",
    "Ankara",
    "Izmir",
    "Trabzon",
    "Antalya",
  ]
  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl("https://localhost:44374/CovidHub")
      .withAutomaticReconnect()
      .build()

    setConnection(newConnection)
  }, [])
  useEffect(() => {
    if (connection) {
      connection
        .start()
        .then(() => {
          console.log("Connected")
          connection.invoke("GetCovidList")
          startConnection()
        })
        .catch((err) => console.log(err))
    }
  }, [connection])
  const startConnection = () => {
    console.log("Work")
    connection.on("ReceiveCovidList", (covidCharts: Covid[]) => {
      covidCharts.forEach((item) => {
        covidChartList.push([
          item.covidDate,
          item.counts[0],
          item.counts[1],
          item.counts[2],
          item.counts[3],
          item.counts[4],
        ])
      })
      console.log(covidChartList)
    })
  }

  /*   useEffect(() => {
    console.log("Work")
    connection.on("ReceiveCovidList", (covidCharts: Covid[]) => {
      covidCharts.forEach((item) => {
        covidChartList.push([
          item.covidDate,
          item.counts[0],
          item.counts[1],
          item.counts[2],
          item.counts[3],
          item.counts[4],
        ])
      })
    })
  }, [connection, covidChartList]) */
  const data = [columnNames, ...covidChartList]

  const options = {
    title: "Covid 19 Chart",
    curveType: "function",
    legend: { position: "bottom" },
  }
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  )
}
export default DashBoard
