
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

import '@vime/core/themes/default.css';

export function SectionOne() {
  return (
    <section className="bg-[#3e63ad] py-24 text-center">

      <div className="-mt-44 w-full">
        {/* <ReactPlayer
          playing
          width={450}
          height={200}
          className="mx-auto px-10"
          url={[`https://youtu.be/rwR42OZSbHM?t=38`]}
        /> */}

      </div>

      <h2 className="mx-auto mt-5 max-w-xs text-2xl text-white">
        O <b>maior</b> banco de dados imobiliários da <b>América Latina</b>
      </h2>

      <div className="grid grid-cols-3 mt-7">
        <div className="sc-jUOgmM hQLNfm">
          <p className="text-white text-base text-center">
            <b>+11000</b>
            <br />
            usuários
          </p>
          <p className="text-white hidden">+30 milhões de anúncios ativos</p>
        </div>
        <div className="sc-jUOgmM hQLNfm">
          <p className="text-white text-base text-center">
            <b>+30 Milhões</b>
            <br />
            de anúncios
          </p>
          <p className="text-white hidden">+11000 corretores impactados</p>
        </div>
        <div className="sc-jUOgmM hQLNfm">
          <p className="text-white text-base text-center">
            <b>+200</b>
            <br />
            cidades
          </p>
          <p className="text-white hidden">+200 cidades disponíveis</p>
        </div>
      </div>

      <div className="mt-12">
        <div className="max-w-[389px] mx-auto bg-[#4281ff] p-5 rounded-2xl shadow-2xl relative">
          <p className="text-white text-start font-light text-sm">
            A EEmovel tem me ajudado bastante! Quando um cliente procura um
            apartamento em alguma área específica da cidade, consigo rapidamente
            levantar imóveis para apresentar. Agiliza muito meu trabalho.
          </p>
          <p className="font-bold text-white text-sm text-start mt-5 ">
            Jackson Souza, Balneario Camboriú, Santa Catarina
          </p>

          <div className="flex absolute mt-9 gap-3 right-0">
            <a className="cursor-pointer">
              <BsFillArrowLeftCircleFill size={38} className="text-white" />
            </a>
            <a className="cursor-pointer">
              <BsFillArrowRightCircleFill size={38} className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
