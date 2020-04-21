import React, { useEffect, useState } from 'react';
import Events from '../components/Events';
import Deaths from '../components/Deaths';
import Births from '../components/Births';

export default function History() {
  const [data, setData] = useState([]);

  async function fetchData() {
    // set fetch library to retrieve the data
    const result = await fetch(
      'https://cors-anywhere.herokuapp.com/http://history.muffinlabs.com/date',
      {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      }
    );

    result.json().then(result => setData(result));
  }

  var today = new Date().toDateString();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>Today Date : {today}</div>
      {Object.keys(data)
        .slice(0, 1)
        .map(item => (
          <div key={item}>
            <div className="container">
              <div className="Event">
                <div className="Events-title">
                  <h1>
                    <span role="img" aria-label="births">
                      🎭
                    </span>
                    Events
                  </h1>
                </div>
                {data.data.Events.map(item => (
                  <div key={item.text}>
                    <div>
                      <Events text={item.text} year={item.year} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="Deaths">
                <div className="Deaths-title">
                  <h1>
                    <span role="img" aria-label="births">
                      💔
                    </span>
                    Deaths
                  </h1>
                </div>
                {data.data.Deaths.map(item => (
                  <div key={item.text}>
                    <div>
                      <Deaths text={item.text} year={item.year} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="Births">
                <div className="Births-title">
                  <h1>
                    <span role="img" aria-label="births">
                      👶🏻
                    </span>
                    Births
                  </h1>
                </div>
                {data.data.Births.map(item => (
                  <div key={item.text}>
                    <div>
                      <Births text={item.text} year={item.year} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
