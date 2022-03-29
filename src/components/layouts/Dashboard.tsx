import React, { useEffect, useState, useMemo, useCallback } from "react"
import { Chart } from "react-google-charts"
import { HubConnectionBuilder } from "@microsoft/signalr"
import { Covid } from "../../models/CovidModel"

/**
 * Bu bölümde Api kısmında gelen verileri chart üzerinde gösterme işlemleri gerçekleştirdim.
 * connection bağlantı durumuna göre değişebildiğinden dolayı ve covidChartList içerisinde yeni veriler ekleneceğinden useState kullandım.
 * Chart altında bulunacak tarih ve şehirler ile ilgili sabit bir dizi tanımladım. Refactor edilip dinamik hale getirilebilir.
 * Yeni yapılacak bağlantı ve bağlantı başlama süreçlerinde useEffect kullandım çünkü verilerin değişmediği taktirde tekrar tekrar çalışmaması için aksi durumda loop olabileceği için
 * Oluşturduğum modeli burada kullanabilmek için bu componentide typescript ile oluşturdum.
 * Pivot tablo için react-google-charts kullandım.
 *
 */
const DashBoard = (props) => {
  const [connection, setConnection] = useState(null)
  const covidChartList = []

  const [covidCharts, setCovids] = useState<any[]>([])
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
  }, [connection])
  useEffect(() => {
    if (connection) {
      connection
        .start()
        .then(() => {
          console.log("Connected")
          connection.invoke("GetCovidList")
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
              setCovids(covidChartList)
            })

            console.log(covidChartList)
          })
        })
        .catch((err) => console.log(err))
    }
  }, [connection, covidChartList])
  const data = [columnNames, ...covidCharts]

  const options = {
    title: "Covid 19 Chart",
    curveType: "function",
    legend: { position: "bottom" },
  }
  console.log(data)
  console.log("dasd")
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
