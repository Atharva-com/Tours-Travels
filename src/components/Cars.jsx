import React from "react";

const Cars = () => {
  return (
    <div className="w-auto pt-10 text-[#00095E] flex-col justify-center">
      <h1 class="font-bold text-4xl text-center">
        You can hire vehicles ranging from 4 to 40 seaters...
      </h1>
      <div class="w-auto px-10 lg:px-28 pt-8 grid lg:grid-cols-3">
        <CarCard
          carname={"Swift"}
          capacity={4}
          imgpath={"/assets/swift.png"}
        ></CarCard>
        <CarCard
          carname={"Innova"}
          capacity={7}
          imgpath={"/assets/crysta.webp"}
        ></CarCard>
        <CarCard
          carname={"Ertiga"}
          capacity={7}
          imgpath={"/assets/ertiga.jpg"}
        ></CarCard>
        <CarCard
          carname={"Tempo Traveller"}
          capacity={12}
          imgpath={"/assets/traveller.png"}
        ></CarCard>
        <CarCard
          carname={"Tempo Traveller"}
          capacity={16}
          imgpath={"/assets/traveller.png"}
        ></CarCard>
        <CarCard
          carname={"Bus"}
          capacity={40}
          imgpath={"/assets/40bus.webp"}
        ></CarCard>
      </div>
    </div>
  );
};

const CarCard = (props) => {
  const { carname, capacity, imgpath } = props;
  return (
    <div class="lg:w-[25vw] shadow-xl rounded-xl flex flex-col mb-10 bg-white">
      <div class="h-64 flex pt-8 justify-center items-center">
        <img class="" src={imgpath} />
      </div>
      <div class="p-4">
        <h2 class="text-xl text-center">{carname}</h2>
        <h2 class="text-xl text-center">{capacity} Seater</h2>
      </div>
    </div>
  );
};

export default Cars;
