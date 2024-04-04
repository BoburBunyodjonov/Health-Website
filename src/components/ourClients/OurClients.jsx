"use client";

// Marquee
import Marquee from "react-fast-marquee";

// MUI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";

// React Hooks
import { useState } from "react";
import Image from "next/image";


// Card Array Data
import { CardArray } from "./CardArray";


const OurClients = () => {
  const [card, setCard] = useState(CardArray);

  return (
    <div className="w-full bg-[#E5E4ED] py-10">
        <div className="container mx-auto md:flex justify-between py-10 px-3">
            <h1 className="text-[#202020] text-3xl font-medium">Наши клиенты</h1>
            <h1 className="text-[#202020] font-medium text-4xl">БОЛЕЕ <span className="text-[#088269]">5000</span> <br /> УСПЕШНЫХ ПРОЕКТОВ</h1>
        </div>
      <Marquee className="w-full" speed={70} gradient={false} pauseOnHover={true}>
        {card.map((item) => {
          return (
            <Card className="border rounded-lg ml-4 border-[#E5E2EE]">
              <CardActionArea>
                <div className="w-full flex justify-center items-center bg-white border-b border-[#E5E2EE]">
                  <Image
                    className="object-contain h-52"
                    component="img"
                    src={item.img}
                    alt="Client Img"
                  />
                </div>
                <CardContent className="bg-[#F8F7F3]">
                  <Typography
                    variant="body2"
                    className="font-medium text-base text-[#202020]"
                  >
                    {item.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Marquee>
    </div>
  );
};

export default OurClients;
