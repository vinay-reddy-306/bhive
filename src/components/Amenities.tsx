import React from "react";
import {
  Affortable,
  Cafe,
  CalenderStarIcon,
  Gym,
  Lounge,
  QuickBooking,
  Sports,
  Wifi,
} from "../assets";

interface list {
  icon: string;
  title: string;
}

export const Amenities: React.FC = () => {
  const amenitiesList: list[] = [
    {
      icon: CalenderStarIcon,
      title: "Community Events",
    },
    {
      icon: Gym,
      title: "Gym Facilities",
    },
    {
      icon: Wifi,
      title: "High-Speed WiFi",
    },
    {
      icon: Cafe,
      title: "Cafe & Tea Bar",
    },
    {
      icon: Affortable,
      title: "Affordable",
    },
    {
      icon: Lounge,
      title: "Comfort Lounges",
    },
    {
      icon: QuickBooking,
      title: "Quick Booking",
    },
    {
      icon: Sports,
      title: "Sports Area",
    },
  ];
  return (
    <section className="px4 bg-light-gray">
      <h2 className="mb3 bold left-align">Why Choose Us?</h2>
      <div className="flex flex-wrap gap2 items-center">
        {amenitiesList.map((item, index) => (
          <div
            key={index}
            className="col-6 sm-col-6 md-col-3 py2 md-flex-row gap2 items-center text-center sm-flex-column"
          >
            <img src={item.icon} alt={item.title} />
            <p className="m0">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(Amenities);
