"use client"

// MUI
import {TextField} from "@mui/material"

// Components
import { ButtonPrimary } from "../buttons/Buttons";


const Map = () => {
  return (
    <section class="w-full text-gray-600 body-font relative">
      <div class="container px-5 py-24 mx-auto grid gap-3 md:grid-cols-2">
        <div class=" bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            class="absolute inset-0"
            frameborder="0"
            title="map"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: "grayscale(0.7) contrast(1.2) opacity(0.8)" }}

          ></iframe>
        
        </div>
        <div class=" bg-white rounded-lg border border-[#E5E2EE] flex flex-col md:ml-auto w-full p-5 md:py-8 mt-8 md:mt-0">
          <h2 class="text-[#202020] text-3xl mb-1 font-medium title-font">
            Остались вопросы?
          </h2>
          <p class="leading-relaxed mb-5 text-gray-600">
          Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте свои координаты и наш менеджер перезвонит вам через 10 минут
          </p>
          <div class="relative mb-4">
              <TextField
                id="standard-multiline-flexible"
                label="Ваше имя"
                multiline
                className="w-full"
                maxRows={4}
                variant="standard"
              />
          </div>
          <div class="relative mb-4">
              <TextField
                id="standard-multiline-flexible"
                label="Ваш телефоня"
                multiline
                className="w-full"
                maxRows={4}
                variant="standard"
              />
          </div>
          <div class="relative mb-4">
              <TextField
                id="standard-multiline-flexible"
                label="Ваш email"
                multiline
                className="w-full"
                maxRows={4}
                variant="standard"
              />
          </div>
          <div class="relative mb-4">
            <textarea
              placeholder="Ваш вопрос"
              id="message"
              name="message"
              class="w-full bg-inherit rounded border-b outline-none border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base  text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <div>
          <ButtonPrimary title="Отправить" />
          <p class="text-xs text-gray-500 mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
