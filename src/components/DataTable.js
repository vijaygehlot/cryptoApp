import React, { useEffect } from "react";
import "../styles/table.scss";
import startLogo from "../assests/images/star-out.png";
import Strings from "../constants/Strings";
const DataTable = ({ item }) => {
  useEffect(() => {}, []);

  if (item !== undefined && item !== "") {
    return (
      <div class="table-container">
        <table>
          <tr>
            <th>{Strings.parValue}</th>

            <th>{Strings.lowerPrice}</th>
            <th>{Strings.higherPrice}</th>
            <th>{Strings.assetVolume}</th>
            <th>{Strings.chng24}</th>
          </tr>
          <tr class="tr-data">
            <td>
              <div class="symbol-section">
                <div class="img-section">
                  <img src={startLogo} alt="star logo" height={20} />
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      {item.s
                        ? [item.s.slice(0, 3), "/", item.s.slice(3)].join("")
                        : null}
                    </div>
                    <div style={{ color: "#63dc94" }}>VOL {item.v}</div>
                  </div>
                </div>
              </div>
            </td>

            <td>{item.l}</td>
            <td>{item.h}</td>
            <td>{item.q}</td>

            <td>
              <div class="per-section">{item.P ? item.P + "%" : null}</div>
            </td>
          </tr>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <h1>{Strings.invalid}</h1>
      </div>
    );
  }
};

export default DataTable;
