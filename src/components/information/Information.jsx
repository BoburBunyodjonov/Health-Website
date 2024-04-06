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
      <div className="container mx-auto grid px-3 md:grid-cols-2">
        <h1 className="text-[#F8F7F3] font-medium text-3xl">
          Информация о компании
        </h1>
        <div className="">
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
