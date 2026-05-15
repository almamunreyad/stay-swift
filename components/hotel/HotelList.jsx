import HotelCard from "./HotelCard";
import { getAllHotels } from "@/database/queries";

const HotelList = async () => {
  const allHotels = await getAllHotels();
  console.log(allHotels);

  return (
    <div className="col-span-9">
      <div className="space-y-4">
        {allHotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelList;
