import React, { useState, useEffect } from "react";
import Country from "./Country";
const Display = (props) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(
        "https://task-445fe-default-rtdb.firebaseio.com//data.json"
      );

      const responseData = await response.json();

      const loadedCountries = [];
      for (const key in responseData) {
        loadedCountries.push({
          id: key,
          link: responseData[key].link,
          phone: responseData[key].phone,
          name: responseData[key].name,
        });
      }
      setData(loadedCountries);
      setIsLoading(false);
    };

    fetchdata();
  }, [data]);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  const countryList = data.map((data) => (
    <Country
      id={data.id}
      name={data.name}
      phone={data.phone}
      link={data.link}
    />
  ));

  return (
    <>
      <ul>{countryList}</ul>
    </>
  );
};

export default Display;
