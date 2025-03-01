"use client";

import Image from "next/image";
import logo from "../Assets/logofoot.svg";
import Link from "next/link";
import ig from "../Assets/ig.svg";
import x from "../Assets/x.svg";
import tiktok from "../Assets/tiktok.svg";
import yt from "../Assets/yt.svg";
import linkedin from "../Assets/linkedin.svg";
const Footer = () => {
  return (
    <div className="pt-10 bg-gradient-to-tr divide-y-2 divide-white font-helvetica text-white from-[#007B8E] to-[#002328] pb-10">
      <div className="container mx-auto px-4 lg:px-28">
        <section className="flex lg:flex-row flex-col items-start justify-between">
          <div className="flex gap-0 lg:gap-10 flex-col items-center lg:items-center">
            <Image
              src={logo}
              alt="logo"
              className="lg:h-full h-16"
              draggable="false"
            />
          </div>

          <div className="flex gap-0.5 lg:gap-2 flex-col items-start mt-3 lg:mt-0">
            <h3 className="text-lg lg:text-xl font-bold">Tautan</h3>
            <Link href={"/"} className="text-sm lg:text-base  font-normal text-[20px] leading-[25px]">
              Beranda
            </Link>
            <Link href={"/"} className="text-sm lg:text-base  font-normal text-[20px] leading-[25px]">
              Berita
            </Link>
            <Link href={"/"} className="text-sm lg:text-base  font-normal text-[20px] leading-[25px]">
              Tentang
            </Link>
            <Link href={"/"} className="text-sm lg:text-base  font-normal text-[20px] leading-[25px]">
              Struktur EM
            </Link>
          </div>

          <div className="flex gap-0.5 lg:gap-2 flex-col items-start mt-3 lg:mt-0">
            <h3 className="text-lg lg:text-xl font-bold">Sosial Media</h3>
            <Link
              href={"https://www.linkedin.com/company.em-ub-2024"}
              className="text-sm lg:text-base  font-normal text-[20px] leading-[25px]"
            >
              Linkedin
            </Link>
            <Link
              href={
                "https://www.instagram.com/em_ubofficial?igsh=MXIxM3VjY2EyMGJncQ%3D%3D"
              }
              className="text-sm lg:text-base  font-normal text-[20px] leading-[25px]"
            >
              Instagram
            </Link>
            <Link
              href={"http://youtube.com/@emubofficial?si=HD6SeDcEusxZBou8"}
              className="text-sm lg:text-base  font-normal text-[20px] leading-[25px]"
            >
              Youtube
            </Link>
            <Link
              href={"https://www.tiktok.com/@em_ubofficial?_t=8meCA9Fi8KP&_r=1"}
              className="text-sm lg:text-base  font-normal text-[20px] leading-[25px]"
            >
              Tiktok
            </Link>
            <Link
              href={"https://x.com/em_ubofficial?s=21&t=avhMi2LSGKFov7Vd_2Nk1A"}
              className="text-sm lg:text-base  font-normal text-[20px] leading-[25px]"
            >
              X
            </Link>
          </div>

          <div className="flex gap-0.5 lg:gap-2 flex-col items-start lg:w-2/5">
            <h3 className="text-lg lg:text-xl font-bold mt-3 lg:mt-0">
              Alamat
            </h3>
            <p className="text-sm lg:text-base  font-normal text-[20px] leading-[25px]">
              Gedung EM-DPM UB Lantai 1 Univeristas Brawijaya Malang, Jalan
              Veteran 06C Malang, 65145
            </p>
            <h3 className="text-lg lg:text-xl font-bold mt-3 lg:mt-4">
              Kontak Kami
            </h3>
            <p className="text-sm lg:text-base  font-normal text-[20px] leading-[25px]">
              Telp: +62 858-1570-4443
            </p>
            <p className="text-sm lg:text-base  font-normal text-[20px] leading-[25px]">
              E-mail: em@ub.ac.id
            </p>
          </div>
        </section>

        <section className="mb-5 ">
            <div className="flex gap-0.5 items-center justify-center lg:items-start lg:justify-start lg:gap-3 mt-9 lg:mt-0">
            <Link href={"https://x.com/em_ubofficial?s=21&t=avhMi2LSGKFov7Vd_2Nk1A"} className="text-sm lg:text-base  font-normal text-[20px] leading-[25px]">
                <Image
                src={x}
                alt="x"
                className="w-4/5 lg:w-full"
                />
                </Link>
                <Link href={"http://youtube.com/@emubofficial?si=HD6SeDcEusxZBou8"} className="text-sm lg:text-base  font-normal text-[20px] leading-[25px]">
                <Image
                src={yt}
                alt="yt"
                className="w-4/5 lg:w-full"
                />
                </Link>
                <Link href={"https://www.tiktok.com/@em_ubofficial?_t=8meCA9Fi8KP&_r=1"} className="text-sm lg:text-base  font-normal text-[20px] leading-[25px]">
                <Image
                src={tiktok}
                alt="tiktok"
                className="w-4/5 lg:w-full"
                />
                </Link>
                <Link href={"https://www.linkedin.com/company.em-ub-2024"} className="text-sm lg:text-base  font-normal text-[20px] leading-[25px]">
                <Image
                src={linkedin}
                alt="ig"
                className="w-4/5 lg:w-full"
                />
                </Link>
                <Link href={"https://www.instagram.com/em_ubofficial?igsh=MXIxM3VjY2EyMGJncQ%3D%3D"} className="text-sm lg:text-base  font-normal text-[20px] leading-[25px]">
                <Image
                src={ig}
                alt="ig"
                className="w-4/5 lg:w-full"
                />
                </Link>
            </div>
        </section>

        <section className="lg:text-base text-[0.625rem] text-center lg:text-start container pt-1 lg:pt-3">©️ 2024 EKSEKUTIF MAHASISWA UNIVERSITAS BRAWIJAYA | Made with ♡ by KOMINFO EM UB 2024

        </section>

       
      </div>
    </div>
  );
};
export default Footer;
