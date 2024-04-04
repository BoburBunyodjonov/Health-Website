"use client";

import Link from "next/link";

// Icons
import { IoIosArrowUp } from "react-icons/io";
import { LuArrowUpRight } from "react-icons/lu";


// MUI
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { useState } from "react";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Information = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="w-full bg-[#088269] py-10">
      <div className="container mx-auto grid md:grid-cols-2">
        <h1 className="text-[#F8F7F3] font-medium text-3xl">
          Информация о компании
        </h1>
        <div className="">
          {/* <div className="relative mb-3">
            <h6 className="mb-0">
              <button
                className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-t border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
                data-collapse-target="collapse-1"
              >
                <span className="text-[#F8F7F3] font-semibold text-lg">What is Material Tailwind?</span>
                <IoIosArrowUp className="text-white absolute right-0 pt-1 text-3xl fa fa-plus group-open:opacity-0" />

                <AiOutlineCloseCircle className="text-white absolute right-0 pt-1 text-3xl opacity-0 fa fa-minus group-open:opacity-100" />

              </button>
            </h6>
            <div
              data-collapse="collapse-1"
              className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div className="p-4 text-base leading-normal text-[#F8F7F3]">
                We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our dreams.
              </div>
              <Link href="" className="ml-4 text-[#F8F7F3] text-sm font-semibold">Подробнее</Link>
            </div>
          </div>
          <div className="relative mb-3">
            <h6 className="mb-0">
              <button
                className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-t border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
                data-collapse-target="collapse-2"
              >
                <span className="text-[#F8F7F3] font-semibold text-lg">Преимущества сотрудников</span>
                <IoIosArrowUp className="text-white absolute right-0 pt-1 text-3xl fa fa-plus group-open:opacity-0" />

                <AiOutlineCloseCircle className="text-white absolute right-0 pt-1 text-3xl opacity-0 fa fa-minus group-open:opacity-100" />

              </button>
            </h6>
            <div
              data-collapse="collapse-2"
              className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div className="p-4 text-base leading-normal text-[#F8F7F3]">
                We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our dreams.
              </div>
              <Link href="" className="ml-4 text-[#F8F7F3] text-sm font-semibold">Подробнее</Link>
            </div>
          </div>
          <div className="relative mb-3">
            <h6 className="mb-0">
              <button
                className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-t border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
                data-collapse-target="collapse-3"
              >
                <span className="text-[#F8F7F3] font-semibold text-lg">Достижения компании</span>
                <IoIosArrowUp className="text-white absolute right-0 pt-1 text-3xl fa fa-plus group-open:opacity-0" />

                <AiOutlineCloseCircle className="text-white absolute right-0 pt-1 text-3xl opacity-0 fa fa-minus group-open:opacity-100" />

              </button>
            </h6>
            <div
              data-collapse="collapse-3"
              className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div className="p-4 text-base leading-normal text-[#F8F7F3]">
                We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our dreams.
              </div>
              <Link href="" className="ml-4 text-[#F8F7F3] text-sm font-semibold">Подробнее</Link>
            </div>
          </div>
          <div className="relative mb-3">
            <h6 className="mb-0">
              <button
                className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-t border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
                data-collapse-target="collapse-4"
              >
                <span className="text-[#F8F7F3] font-semibold text-lg">What is Material Tailwind?</span>
                <IoIosArrowUp className="text-white absolute right-0 pt-1 text-3xl fa fa-plus group-open:opacity-0" />

                <AiOutlineCloseCircle className="text-white absolute right-0 pt-1 text-3xl opacity-0 fa fa-minus group-open:opacity-100" />

              </button>
            </h6>
            <div
              data-collapse="collapse-4"
              className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div className="p-4 text-base leading-normal text-[#F8F7F3]">
                We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our dreams.
              </div>
              <Link href="" className="ml-4 text-[#F8F7F3] text-sm font-semibold">Подробнее</Link>
            </div>
          </div> */}
          <Accordion
            className="bg-inherit text-[#F8F7F3] shadow-none rounded-full border-t border-[#e1dfe786]"
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<IoIosArrowUp className="text-[#F8F7F3] text-2xl" />}
              
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                className="text-lg"
                sx={{ width: "33%", flexShrink: 0 }}
              >
                О компании
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-base font-medium opacity-[80%]">
                Но синтетическое тестирование, в своём классическом
                представлении, допускает внедрение поэтапного и
                последовательного развития общества. В рамках спецификации
                современных стандартов, сторонники тоталитаризма в науке будут
                функционально разнесены.
              </Typography>
              <Typography className="pt-5 flex font-semibold text-sm items-center">
                <Link href="">Подробнее</Link> 
                <LuArrowUpRight className="text-xl" />
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="bg-inherit text-[#F8F7F3] shadow-none border-t border-[#e1dfe786]"
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<IoIosArrowUp className="text-[#F8F7F3] text-2xl" />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ flexShrink: 0 }}>
              Преимущества сотрудников
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-base font-medium opacity-[80%]">
                Но синтетическое тестирование, в своём классическом
                представлении, допускает внедрение поэтапного и
                последовательного развития общества. В рамках спецификации
                современных стандартов, сторонники тоталитаризма в науке будут
                функционально разнесены.
              </Typography>
              <Typography className="pt-5 flex font-semibold text-sm items-center">
                <Link href="">Подробнее</Link> 
                <LuArrowUpRight className="text-xl" />
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="bg-inherit text-[#F8F7F3] shadow-none border-t border-[#e1dfe786]"
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<IoIosArrowUp className="text-[#F8F7F3] text-2xl" />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{flexShrink: 0 }}>
              Достижения компании
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-base font-medium opacity-[80%]">
                Но синтетическое тестирование, в своём классическом
                представлении, допускает внедрение поэтапного и
                последовательного развития общества. В рамках спецификации
                современных стандартов, сторонники тоталитаризма в науке будут
                функционально разнесены.
              </Typography>
              <Typography className="pt-5 flex font-semibold text-sm items-center">
                <Link href="">Подробнее</Link> 
                <LuArrowUpRight className="text-xl" />
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="bg-inherit text-[#F8F7F3] shadow-none border-t border-[#e1dfe786]"
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<IoIosArrowUp className="text-[#F8F7F3] text-2xl" />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ flexShrink: 0 }}>
              Карьерный рост
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-base font-medium opacity-[80%]">
                Но синтетическое тестирование, в своём классическом
                представлении, допускает внедрение поэтапного и
                последовательного развития общества. В рамках спецификации
                современных стандартов, сторонники тоталитаризма в науке будут
                функционально разнесены.
              </Typography>
              <Typography className="pt-5 flex font-semibold text-sm items-center">
                <Link href="">Подробнее</Link> 
                <LuArrowUpRight className="text-xl" />
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Information;
