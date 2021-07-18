import React, { useEffect, useRef, useState } from "react";
import DataTable from "./components/DataTable";
import Strings from "./constants/Strings";
import Loader from "./components/Loader";
import "./App.scss";

function App() {
  const wsUrl = "wss://stream.binance.com:9443/stream?streams=btcusdt@ticker";
  const webSocket = useRef(null);

  const [tradeData, setTradeDate] = useState([]);
  const [loader, setLoader] = useState(false);

  const connect = () => {
    webSocket.current = new WebSocket(wsUrl);

    webSocket.current.onopen = () => {
      console.log("Connected websocket");
    };

    webSocket.current.onmessage = (message) => {
      const { data } = JSON.parse(message.data);

      console.log("webSocket_Current", data);

      setTradeDate(data);
      setLoader(false);
    };

    webSocket.current.onclose = (e) => {
      console.log("Socket is closed", e.reason);
    };

    webSocket.current.onerror = (err) => {
      console.error(
        "Socket encountered error: ",
        err.message,
        "Closing socket"
      );
      webSocket.current.close();
    };
  };

  const closeWebSocket = () => {
    if (webSocket !== null && webSocket.current !== null) {
      webSocket.current.close();
    }
  };

  useEffect(() => {
    setLoader(true);

    connect();

    return () => closeWebSocket();
  }, []);

  console.log("tradeData", typeof tradeData);

  return (
    <div class="container">
      {loader === false ? (
        <div>
          <h2 class="crypto-text">{Strings.cryptoHeading}</h2>
          <DataTable item={tradeData} />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
