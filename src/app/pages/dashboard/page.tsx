/* eslint-disable @next/next/no-img-element */
// src/app/dashboard/page.tsx
"use client";

import { useEffect, useState } from "react";
import { Contries } from "./types";
import api from "../../api/services/lib/httpClient";
import { useSession } from "next-auth/react";

function Dashboard(): JSX.Element {
  const { data: session } = useSession();
  const [countries, setCountries] = useState<Contries[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await api.get(`/v3.1/all`);
        setCountries(response.data);
      } catch (error) {
        setError("Failed to fetch countries");
      }
    };

    fetchCountries();
  }, [session]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <p>Bem-vindo, {session?.user?.name}!</p>

      <h1>Lista de Países</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {countries.map((country) => (
          <div key={country.cca3} style={{ margin: "10px", textAlign: "center" }}>
            <img
              src={country.flags.png}
              alt={country.name.common}
              style={{ width: "100px", height: "auto", borderRadius: "8px" }}
            />
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital?.[0]}</p>
            <p>Population: {country.population.toLocaleString()}</p>
            <p>Region: {country.region}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
