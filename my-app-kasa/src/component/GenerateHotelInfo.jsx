import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // useParams pour accéder aux paramètres d'URL
import Hotel from "./Hotel";

const GeneratHotelInfo = () => {
  const [hotelData, setHotelData] = useState([]);
  const [loading, setLoading] = useState(true); // en cas ou on a besoin de charger nos données
  const { id } = useParams(); // je récupère  le paramètre 'id' de l'URL

  const fetchData = async () => {
    try {
      const response = await fetch("article.JSON");
      const data = await response.json();
      setHotelData(data);
      setLoading(false);
    } catch (error) {
      console.error("Erreur lié au fichier article.JSON :", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  // je selectionne un logement spécifique correspondant à l'ID dans l'URL
  const selectedHotel = hotelData.find((hotel) => hotel.id === id);

  if (!selectedHotel) {
    return <div>Ce Logement n'éxiste pas </div>;
  }

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
