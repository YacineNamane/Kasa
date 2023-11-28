import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hotel from "./Hotel";

const GeneratHotelInfo = () => {
  const [hotelData, setHotelData] = useState([]);
  const [loading, setLoading] = useState(false); // en cas ou on a besoin de charger nos données
  const { id } = useParams(); // je récupère  le paramètre 'id' de l'URL

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("/article.JSON");

      if (!response.ok) {
        throw new Error(`Erreur HTTP! Statut : ${response.status}`);
      }

      const data = await response.json();
      setHotelData(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading..</div>;
  }
  const selectedHotel = hotelData.find((hotel) => hotel.id === id);

  if (!selectedHotel) {
    return <div>Ce Logement n'éxiste pas </div>;
  }
  // je selectionne un logement spécifique correspondant à l'id dans l'url

  return (
    <div className="hotel-info">
      <Hotel
        key={selectedHotel.id}
        id={selectedHotel.id}
        title={selectedHotel.title}
        cover={selectedHotel.cover}
        pictures={selectedHotel.pictures}
        description={selectedHotel.description}
        host={selectedHotel.host}
        rating={selectedHotel.rating}
        location={selectedHotel.location}
        equipments={selectedHotel.equipments}
        tags={selectedHotel.tags}
      />
    </div>
  );
};

export default GeneratHotelInfo;
