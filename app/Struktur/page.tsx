"use client";

import Navbar from "../Components/Navbar";
import motifkiri from "../Assets/motifkiri.svg";
import motifkanan from "../Assets/motifkanan.svg";
import Image from "next/image";
import kepala from "../Assets/SPI1.png";
import wakep from "../Assets/SPI2.png";
import eyes from "../Assets/eyes.svg";
import feather from "../Assets/feather.svg";
import trade from "../Assets/trade.svg";
import paro1 from "../Assets/paro/paro1.png";
import paro2 from "../Assets/paro/paro2.png";
import paro3 from "../Assets/paro/paro3.png";
import feather1 from "../Assets/feather/setkab1.png";
import feather2 from "../Assets/feather/setkab2.png";
import trade1 from "../Assets/trade/benkab1.png";
import trade2 from "../Assets/trade/benkab2.png";
import Footer from "../Components/Footer";
import eyes2 from "../Assets/eyesb.svg";
import featherb from "../Assets/feather2.svg"
import tradeb from "../Assets/trade1.svg"
import { useState, useEffect } from "react";

import { motion, useScroll, useTransform, } from "framer-motion";

const Struktur = () => {
  const [showImages, setShowImages] = useState(false);
  const { scrollY } = useScroll();

  const leftImageY = useTransform(scrollY, [0, 200, 400], [0, -100, -200]);
  const leftImageOpacity = useTransform(scrollY, [0, 200, 400], [1, 1, 0]);
  const leftTextOpacity = useTransform(scrollY, [200, 400], [1, 0]);

  // Gambar kanan turun ke bawah
  const rightImageY = useTransform(scrollY, [0, 200, 400], [0, 100, 200]);
  const rightImageOpacity = useTransform(scrollY, [0, 200, 400], [1, 1, 0]);
  const rightTextOpacity = useTransform(scrollY, [200, 400], [1, 0]);
  const motifKiriX = useTransform(scrollY, [0, 300], [0, -100]);
  const motifKananX = useTransform(scrollY, [0, 300], [0, 100]);

  const leftX = useTransform(scrollY, [0, 300], [-300, 0]);
  const leftY = useTransform(scrollY, [0, 300], [300, 0]);
  const centerY = useTransform(scrollY, [0, 300], [300, 0]);
  const rightX = useTransform(scrollY, [0, 300], [300, 0]);
  const rightY = useTransform(scrollY, [0, 300], [300, 0]);
  const opakiri1 = useTransform(scrollY, [0, 400], [0, 1 ]);
  const opatengah1= useTransform(scrollY, [0, 400], [0, 1 ]);
  const opakanan1 = useTransform(scrollY, [0, 400], [0, 1]);



  const kiriX = useTransform(scrollY, [0, 1000], [-300, 0]);
  const kiriY = useTransform(scrollY, [0, 1000], [300, 0]);
  const tengahY = useTransform(scrollY, [0, 1000], [300, 0]);
  const kananX = useTransform(scrollY, [0, 1000], [300, 0]);
  const kananY = useTransform(scrollY, [0, 1000], [300, 0]);

  const kiri2X = useTransform(scrollY, [0, 1100], [-500, 0]);
  const kiri2Y = useTransform(scrollY, [0, 1100], [500, 0]);
  const tengah2Y = useTransform(scrollY, [0, 1100], [500, 0]);
  const kanan2X = useTransform(scrollY, [0, 1100], [500, 0]);
  const kanan2Y = useTransform(scrollY, [0, 1100], [500, 0]);
  const opakiri2 = useTransform(scrollY, [0, 1500], [0, 1 ]);
  const opatengah2 = useTransform(scrollY, [0, 1500], [0, 1 ]);
  const opakanan2 = useTransform(scrollY, [0, 1500], [0, 1]);

  const kiri3X = useTransform(scrollY, [0, 3300], [-500, 0]);
  const kiri3Y = useTransform(scrollY, [0, 3300], [500, 0]);
  const tengah3Y = useTransform(scrollY, [0, 3300], [500, 0]);
  const kanan3X = useTransform(scrollY, [0, 3300], [500, 0]);
  const kanan3Y = useTransform(scrollY, [0, 3300], [500, 0]);

  const opakiri3 = useTransform(scrollY, [0, 4000], [0, 1 ]);
  const opatengah3 = useTransform(scrollY, [0, 4000], [0, 1 ]);
  const opakanan3 = useTransform(scrollY, [0, 4000], [0, 1]);
  
  const kiri4X = useTransform(scrollY, [0, 5000], [-500, 0]);
  const kiri4Y = useTransform(scrollY, [0, 5000], [500, 0]);
  const tengah4Y = useTransform(scrollY, [0, 5000], [500, 0]);
  const kanan4X = useTransform(scrollY, [0, 5000], [500, 0]);
  const kanan4Y = useTransform(scrollY, [0, 5000], [500, 0]);
  const opakiri4 = useTransform(scrollY, [0, 5200], [0, 1 ]);
  const opatengah4 = useTransform(scrollY, [0, 5200], [0, 1 ]);
  const opakanan4 = useTransform(scrollY, [0, 5200], [0, 1]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImages(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const prokerparo = [
    {
      id: 1,
      number: "01",
      title: "Awarding Staff",
      description:
        "Awarding Staff merupakan suatu kegiatan program kerja sebagai bentuk apresiasi yang diberikan kepada pengurus EM UB yang berkomitmen tinggi dan menjadi yang paling baik diantara yang terbaik. Nantinya akan diposting dalam feed akun instagram EM mengadakan acara award secara langsung.",
      bg: "bg-[#007B8E]",
      textColor: "text-white",
    },
    {
      id: 2,
      number: "02",
      title: "BOCIL (Bounding N Chill)",
      description:
        "Bounding n chill merupakan suatu kegiatan refreshing yang bertujuan untuk mempererat kedekatan dan kekompakan antar pengurus maupun mengupgrade semangat pada masing-masing pengurus yang dimana dapat diharapkan untuk meningkatkan rasa kepemilikan yang dapat meningkatkan kinerja pengurus EM UB.",
      bg: "bg-white",
      textColor: "text-black",
    },
    {
      id: 3,
      number: "03",
      title: "Farewell Party",
      description:
        "Farewell Party merupakan suatu kegiatan perpisahan untuk mengapresiasi setelah 1 periode kepengurusan para pengurus dan menjadi acara penutup setelah 1 tahun EM UB 2023 bekerja.",
      bg: "bg-[#007B8E]",
      textColor: "text-white",
    },
    {
      id: 4,
      number: "04",
      title: "Oprec Staff",
      description:
        "Awarding Staff merupakan suatu kegiatan program kerja sebagai bentuk apresiasi yang diberikan kepada kepada pengurus EM UB yang berkomitmen tinggi dan menjadi yang paling baik diantara yang terbaik yang nantinya akan diposting dalam feed akun instagram EM mengadakan acara award secara langsung.",
      bg: "bg-white",
      textColor: "text-black",
    },
    {
      id: 5,
      number: "05",
      title: "OPSI (Optimalisasi dan Evaluasi)",
      description:
        "Opsi merupakan suatu pelatihan workshop softkill dan juga seminar di khususkan untuk pengembangan internal staff EM UB 2023. Opsi juga merupakan salah satu cara untuk mengetahui kekurangan, kelemahan, dan kekuatan dalam segi perencanaan dan implementasi kegiatan/program.",
      bg: "bg-[#007B8E]",
      textColor: "text-white",
    },
    {
      id: 6,
      number: "06",
      title: "RAKAB (Rapat Kabinet)",
      description:
        "Rapat kerja ini diharapkan menjadi jalan terang bagi pengurus EM UB 23 untuk mewujudkan visi melalui berbagai misi selama satu periode kedepan. Mengingat bahwa dalam menjalankan program kerja, masing masing kementerian pasti akan saling bersinergi dengan kementerian yang lain. Sehingga penting bagi Kabinet Karya Paripurna untuk melakukan harmonisasi semaksimal mungkin.",
      bg: "bg-white",
      textColor: "text-black",
    },
    {
      id: 7,
      number: "07",
      title: "PENA (Penilaian Kinerja)",
      description:
        "PENA (Penilaian kinerja) ini merupakan suatu bentuk penilaian sebagai tujuan untuk menilai kinerja dari para BPI/H& Staff disetiap Biro/Kementrian nya yang apabila terdapat ditemukannya hasil penilaian yang kurang baik maka akan dilakukan pemanggilan untuk dievaluasi.",
      bg: "bg-[#007B8E]",
      textColor: "text-white",
    },
  ];

  const prokerfeather = [
    {
      id: 1,
      number: "01",
      title: "Buletin EM UB",
      description:
        "Buletin EM UB mewadahi pengelolaan produk pers dan media dari internal dan eksternal yang berkaitan dengan EM UB 2023. Bentuk pengelolaan ini didasarkan pada pembuatan pedoman, ketentuan, pengelolaan, publikasi, dan arsip produk pers dan media.",
      bg: "bg-[#007B8E]",
      textColor: "text-white",
    },
    {
      id: 2,
      number: "02",
      title: "PERS Training",
      description:
        "Pers Training merupakan pelatihan jurnalistik untuk meningkatkan kemampuan menulis berita. Program ini berupa workshop yang mengasah kemampuan individu dalam menyampaikan berita sesuai dengan ilmu jurnalistik sehingga masyarakat bisa mendapatkan informasi penting, terbaru, dan faktual mengenai peristiwa yang sedang terjadi.",
      bg: "bg-white",
      textColor: "text-black",
    },
    {
      id: 3,
      number: "03",
      title: "PORSI (Pos Arsip)",
      description:
        "Farewell Party merupakan suatu kegiatan perpisahan untuk mengapresiasi setelah 1 periode kepengurusan para pengurus dan menjadi acara penutup setelah 1 tahun EM UB 2023 bekerja.",
      bg: "bg-[#007B8E]",
      textColor: "text-white",
    },
    {
      id: 4,
      number: "04",
      title: "SERASI (Sekret Rapi dan Bersih)",
      description:
        "Awarding Staff merupakan suatu kegiatan program kerja sebagai bentuk apresiasi yang diberikan kepada kepada pengurus EM UB yang berkomitmen tinggi dan menjadi yang paling baik diantara yang terbaik yang nantinya akan diposting dalam feed akun instagram EM mengadakan acara award secara langsung.",
      bg: "bg-white",
      textColor: "text-black",
    },
    {
      id: 5,
      number: "05",
      title: "Smart Education",
      description:
        "Opsi merupakan suatu pelatihan workshop softkill dan juga seminar di khususkan untuk pengembangan internal staff EM UB 2023. Opsi juga merupakan salah satu cara untuk mengetahui kekurangan, kelemahan, dan kekuatan dalam segi perencanaan dan implementasi kegiatan/program.",
      bg: "bg-[#007B8E]",
      textColor: "text-white",
    },
    {
      id: 6,
      number: "06",
      title: "VIRALIN (Video Tutorial Administrasi)",
      description:
        "Rapat kerja ini diharapkan menjadi jalan terang bagi pengurus EM UB 23 untuk mewujudkan visi melalui berbagai misi selama satu periode kedepan. Mengingat bahwa dalam menjalankan program kerja, masing masing kementerian pasti akan saling bersinergi dengan kementerian yang lain. Sehingga penting bagi Kabinet Karya Paripurna untuk melakukan harmonisasi semaksimal mungkin.",
      bg: "bg-white",
      textColor: "text-black",
    },
  ];

  const prokertrade = [
    {
      id: 1,
      number: "01",
      title: "Filantropi Abadi",
      description:
        "Pemberdayaan Aparatur dan Reformasi Organisasi siap memberikan kontribusi penuh dalam mewujudkan perubahan di kampus biru, kampus perjuangan, Universitas Brawijaya.",
      bg: "bg-[#007B8E]",
      textColor: "text-white",
    },
    {
      id: 2,
      number: "02",
      title: "Financial Workshop",
      description:
        "Financial Workshop yakni kegiatan yang berupa edukasi juga pelatihan mengenai keuangan bagi seluruh masyarakat brawijaya bahkan untuk masyarakat umum guna memberikan pendidikan dan pelatihan kompetensi di bidang keuangan. selain itu, financial workshop diadakan oleh kementerian keuangan juga untuk memperingati hari uang yang jatuh pada 30 oktober.",
      bg: "bg-white",
      textColor: "text-black",
    },
    {
      id: 3,
      number: "03",
      title: "Ruang Karya Paripurna",
      description:
        "Ruang Karya Paripurna merupakan ruang diskusi mengenai keuangan bagi internal EM. Diskusi dan pencerdasan kepada bpi/bph bersama dengan pihak rektorat mengenai dana pagu dan administrasi keuangan, juga perncerdasan kepada staff ahli mengenai tata kelola dan administrasi keuangan.",
      bg: "bg-[#007B8E]",
      textColor: "text-white",
    },
  ];

  return (
    <div className="w-full ">
      <Navbar />

      <div className="font-helvetica bg-white pb-20 ">
        <motion.div
          style={{ x: motifKiriX }}
          className={`
            absolute md:top-0 top-10 left-0 z-10 w-[10%] aspect-auto 
            transform transition-transform duration-700 ease-out
            ${showImages ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          
          <Image src={motifkiri} alt="motif kiri" draggable="false" />
        </motion.div>

        <motion.div
          style={{ x: motifKananX }}
          className={`
            absolute md:top-0 right-0 top-10  z-10 w-[10%] aspect-auto
            transform transition-transform duration-700 ease-out
            ${showImages ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <Image src={motifkanan} alt="motif kanan" draggable="false" />
        </motion.div>

        <section className="w-full relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-24 lg:h-[85vh] flex lg:flex-row flex-col justify-center items-center py-5">
            <div className="lg:w-1/2 w-3/4 mx-auto font-helveticaExtraBold text-xl text-center lg:text-start lg:text-4xl transform translate-x-0 translate-y-0 translate-z-0 tracking-tight">
              <h1 className="text-black font-helveticaExtraBold">
                SATUAN PENGENDALI INTERNAL
              </h1>
              <h1 className="text-[#007B8E] font-helveticaExtraBold">
                EM UB 2024
              </h1>
            </div>

            <div className="lg:w-1/2 flex gap-2 self-end">
              <div className="w-1/2 relative">
                <div className="w-full aspect-[9/13] overflow-hidden">
                  <motion.div
                    style={{ y: leftImageY, opacity: leftImageOpacity }}
                  >
                    <Image
                      src={kepala}
                      alt="kepala"
                      className="w-full aspect-[9/13] rounded-lg   object-contain"
                      draggable="false"
                    />
                  </motion.div>
                </div>

                <motion.div style={{ opacity: leftTextOpacity }}>
                  <h3 className="text-[20px] font-helveticaExtraBold text-[#007B8E] leading-[29.4px]">
                    Siti Nufika Rahma
                  </h3>
                  <p className="text-xs lg:text-base text-black opacity-70">
                    Kepala Satuan Pengendali Internal
                  </p>
                </motion.div>
              </div>

              <div className="w-1/2 relative">
                <div className="w-full aspect-[9/13] overflow-hidden">
                  <motion.div
                    style={{ y: rightImageY, opacity: rightImageOpacity }}
                  >
                    <Image
                      src={wakep}
                      alt="kepala"
                      className="w-full aspect-[9/13] rounded-lg  h-auto object-contain"
                      draggable="false"
                    />
                  </motion.div>
                </div>

                <motion.div style={{ opacity: rightTextOpacity }}>
                  <h3 className="text-[20px] font-helveticaExtraBold text-[#007B8E] leading-[29.4px]">
                    Gumilang Lintang
                  </h3>
                  <p className="text-xs lg:text-base text-black opacity-70">
                    Wakil Kepala Satuan Pengendali Internal
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto lg:px-24 container flex justify-center gap-1 lg:gap-5 py-10 lg:flex-nowrap flex-wrap">
          <motion.div
            style={{ x: leftX, y: leftY, opacity: opakiri1}}
            className="lg:w-[23%] w-[45%] py-2 lg:py-6 border-transparent px-2 lg:px-5 flex flex-col gap-1 border-opacity-30 rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 duration-300 ease-in-out"
          >
            <Image
              src={eyes}
              alt="eyes"
              className="lg:w-4/6 w-4/5 aspect-square mx-auto object-contain"
              draggable="true"
            />
            <div className="font-helveticaExtraBold font-helvetica text-sm lg:text-base">
              <h2 className="text-[#007B8E]">SUB SATUAN</h2>
              <h2 className="text-black text-sm">
                PEMBERDAYAAN APARATUR DAN REFORMASI ORGANISASI
              </h2>
            </div>
            <p className="text-xs line-clamp-5 overflow-auto">
              Pemberdayaan Aparatur dan Reformasi Ogranisasi siap memberikan
              kontribusi penuh dalam mewujudkan perubahan di kampus biru, kampus
              perjuangan, Universitas Brawijaya
            </p>
          </motion.div>

          <motion.div
            style={{ x: 0, y: centerY, opacity: opatengah1}}
            className="lg:w-[23%] w-[45%] py-2 lg:py-6 border-transparent px-2 lg:px-5 flex flex-col gap-1 border-opacity-30 rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 duration-300 ease-in-out"
          >
            <Image
              src={feather}
              alt="feather"
              className="lg:w-4/6 w-4/5 aspect-square mx-auto object-contain"
              draggable="true"
            />
            <div className="font-helveticaExtraBold font-helvetica text-sm lg:text-base">
              <h2 className="text-[#007B8E]">SUB SATUAN</h2>
              <h2 className="text-black text-sm">SEKRETARIAT KABINET</h2>
            </div>
            <p className="text-xs line-clamp-5 overflow-auto">
              Sekretariat Kabinet siap memberikan kontribusi penuh dalam
              mewujudkan perubahan di kampus biru, kampus perjuangan,
              Universitas Brawijaya
            </p>
          </motion.div>

          <motion.div
            style={{ x: rightX, y: rightY, opacity: opakanan1}}
            className="lg:w-[23%] w-[45%] py-2 lg:py-6 border-transparent px-2 lg:px-5 flex flex-col gap-1 border-opacity-30 rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 duration-300 ease-in-out"
          >
            <Image
              src={trade}
              alt="trade"
              className="lg:w-4/6 w-4/5 aspect-square mx-auto object-contain"
              draggable="true"
            />
            <div className="font-helveticaExtraBold font-helvetica text-sm lg:text-base">
              <h2 className="text-[#007B8E]">SUB SATUAN</h2>
              <h2 className="text-black text-sm">BENDAHARA KABINET</h2>
            </div>
            <p className="text-xs line-clamp-5 overflow-auto">
              Bendahara Kabinet siap memberikan kontribusi penuh dalam
              mewujudkan perubahan di kampus biru, kampus perjuangan,
              Universitas Brawijaya
            </p>
          </motion.div>
        </section>

        <section className="container mx-auto lg:px-24 py-5">
          <div className="flex justify-center items-center gap-5">
            <motion.div
              style={{ x: kiriX, y: kiriY }}
              className="w-1/2  font-helveticaExtraBold text-xl lg:text-4xl"
            >
              <h1 className="text-black">
                PEMBERDAYAAN APARATUR DAN REFORMASI ORGANISASI
              </h1>
              <h1 className="text-[#007B8E]">EM UB 2024</h1>
            </motion.div>

            <motion.div
              style={{ x: kananX, y: kananY }}
              className="w-1/6 object-contain aspect-square rounded-lg"
            >
              <Image src={eyes2} alt="eyes" />
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto lg:px-24 px-4 py-5 justify-center flex lg:flex-nowrap flex-wrap gap-1 overflow-hidden">
          <motion.div
            style={{ x: kiri2X, y: kiri2Y, opacity: opakiri2}}
            className="lg:w-[18%] md:[32%] w-[45%] group"
          >
            <div className="w-full aspect-[9/15] group-hover:-translate-y-2 duration-300 ease-in-out relative">
              <Image
                src={paro1}
                alt="struktur"
                className="rounded-lg h-full object-contain"
                draggable="false"
              />
            </div>
            <h3 className="text-[#007B8E] font-helveticaExtraBold font-helvetica text-base">
              Akbar Gihfari
            </h3>
            <p className=" text-black text-opacity-70 text-sm">
              Kepala Pemberdayaan Aparatur dan Reformasi Organisasi
            </p>
          </motion.div>

          <motion.div
            style={{ x: 0, y: kanan2Y, opacity: opatengah2 }}
            className="lg:w-[18%] md:[32%] w-[45%] group"
          >
            <div className="w-full aspect-[9/15] group-hover:-translate-y-2 duration-300 ease-in-out relative">
              <Image
                src={paro2}
                alt="struktur"
                className="rounded-lg h-full object-contain"
                draggable="false"
              />
            </div>
            <h3 className="text-[#007B8E] font-helveticaExtraBold font-helvetica text-base">
              Adinda Putri M. D. P.
            </h3>
            <p className=" text-black text-opacity-70 text-sm">
              Wakil Kepala Pengawas Kualitas Aparatur
            </p>
          </motion.div>

          <motion.div
            style={{ x: kanan2X, y: kanan2Y, opacity: opakanan2 }}
            className="lg:w-[18%] md:[32%] w-[45%] group"
          >
            <div className="w-full aspect-[9/15] group-hover:-translate-y-2 duration-300 ease-in-out relative">
              <Image
                src={paro3}
                alt="struktur"
                className="rounded-lg h-full object-contain"
                draggable="false"
              />
            </div>
            <h3 className="text-[#007B8E] font-helveticaExtraBold font-helvetica text-base">
              Anaqoh Taqiyyah
            </h3>
            <p className=" text-black text-opacity-70 text-sm">
              Wakil Kepala Penjamin Mutu dan Reformasi Organisasi
            </p>
          </motion.div>
        </section>

        <section className="container mx-auto px-4 lg:px-24">
          <div className="lg:px-10 px-2 py-5 bg-[#F2F2F2] rounded-xl border-transparent border-opacity-10">
            <h1 className="lg:text-4xl text-xl font-helvetica font-helveticaExtraBold text-black mb-3">
              PROGRAM KERJA
            </h1>

            <main className="w-full grid grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-4 lg:gap-10 ">
              {prokerparo.map(
                ({ id, number, title, description, bg, textColor }) => (
                  <div
                    key={id}
                    className={`${bg} ${textColor} w-full lg:aspect-[12/14] rounded-xl lg:p-7 p-2 transition transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl group`}
                  >
                    {number && (
                      <p className="font-helvetica font-helveticaExtraBold text-2xl lg:text-4xl text-end">
                        {number}
                      </p>
                    )}
                    {title && (
                      <p className="font-helvetica font-helveticaExtraBold text-sm lg:text-xl mb-0 md:mb-10">
                        {title}
                      </p>
                    )}
                    {description && (
                      <p className="text-xs lg:text-sm lg:group-hover:text-base duration-300 ease-in-out line-clamp-[8] lg:line-clamp-none overflow-auto">
                        {description}
                      </p>
                    )}
                  </div>
                )
              )}
            </main>
          </div>
        </section>

        <section className="container mx-auto lg:px-24 py-5">
          <div className="flex justify-center items-center gap-5">
            <motion.div
              style={{ x: kiri3X, y: kiri3Y }}
              className="w-1/2  font-helveticaExtraBold text-xl lg:text-4xl transform: translate-y-0 translate-z-0"
            >
              <h1 className="text-black">SEKRETARIAT KABINET</h1>
              <h1 className="text-[#007B8E]">EM UB 2024</h1>
            </motion.div>

            <motion.div
              style={{ x: kanan3X, y: kanan3Y }}
              className="w-1/6 object-contain aspect-square rounded-lg transform transform-x-0 transform-z-0"
            >
              <Image src={featherb} alt="feather" />
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto lg:px-24 px-4 py-5 justify-center flex lg:flex-nowrap flex-wrap gap-1 overflow-hidden">
          <motion.div style={{ x: kiri3X, y: kiri3Y, opacity: opakiri3 }} className="lg:w-[18%] md:[32%] w-[45%] group">
            <div className="w-full aspect-[9/15] group-hover:-translate-y-2 duration-300 ease-in-out relative">
              <Image
                src={feather1}
                alt="struktur"
                className="rounded-lg h-full object-contain"
                draggable="false"
              />
            </div>
            <h3 className="text-[#007B8E] font-helveticaExtraBold font-helvetica text-base">
              Angelica Terechdova V.O.
            </h3>
            <p className=" text-black text-opacity-70 text-sm">
              Kepala Sekretariat Kabinet
            </p>
          </motion.div>

          <motion.div style={{ x: kanan3X, y: kanan3Y, opacity: opakanan3 }} className="lg:w-[18%] md:[32%] w-[45%] group">
            <div className="w-full aspect-[9/15] group-hover:-translate-y-2 duration-300 ease-in-out relative">
              <Image
                src={feather2}
                alt="struktur"
                className="rounded-lg h-full object-contain"
                draggable="false"
              />
            </div>
            <h3 className="text-[#007B8E] font-helveticaExtraBold font-helvetica text-base">
              Feti Nur Shaila
            </h3>
            <p className=" text-black text-opacity-70 text-sm">
              Wakil Kepala Sekretariat Kabiner
            </p>
          </motion.div>
        </section>

        <section className="container mx-auto px-4 lg:px-24">
          <div className="lg:px-10 px-2 py-5 bg-[#F2F2F2] rounded-xl border-2 border-transparent border-opacity-10">
            <h1 className="lg:text-4xl text-xl font-helvetica font-helveticaExtraBold text-black mb-3">
              PROGRAM KERJA
            </h1>

            <main className="w-full grid grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-4 lg:gap-10 ">
              {prokerfeather.map(
                ({ id, number, title, description, bg, textColor }) => (
                  <div
                    key={id}
                    className={`${bg} ${textColor} w-full lg:aspect-[12/14] rounded-xl lg:p-7 p-2 transition transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl group`}
                  >
                    {number && (
                      <p className="font-helvetica font-helveticaExtraBold text-2xl lg:text-4xl text-end">
                        {number}
                      </p>
                    )}
                    {title && (
                      <p className="font-helvetica font-helveticaExtraBold text-sm lg:text-xl mb-0 md:mb-10">
                        {title}
                      </p>
                    )}
                    {description && (
                      <p className="text-xs lg:text-sm lg:group-hover:text-base duration-300 ease-in-out line-clamp-[8] lg:line-clamp-none overflow-auto">
                        {description}
                      </p>
                    )}
                  </div>
                )
              )}
            </main>
          </div>
        </section>

        <section className="container mx-auto lg:px-24 py-5">
          <div className="flex justify-center items-center gap-5">
            <motion.div style={{ x: kiri4X, y: kiri4Y }} className="w-1/2 font-helvetica font-helveticaExtraBold text-xl lg:text-4xl transform: translate-y-0 translate-z-0">
              <h1 className="text-black">BENDAHARA KABINET</h1>
              <h1 className="text-[#007B8E]">EM UB 2024</h1>
            </motion.div>

            <motion.div style={{ x: kanan4X, y: kanan4Y }} className="w-1/6 object-contain aspect-square rounded-lg transform transform-x-0 transform-z-0"> 
            <Image
              src={tradeb}
              alt="trade"
            />
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto lg:px-24 px-4 py-5 justify-center flex lg:flex-nowrap flex-wrap gap-1 overflow-hidden">
          <motion.div style={{ x: kiri4X, y: kiri4Y, opacity: opakiri4 }} className="lg:w-[18%] md:[32%] w-[45%] group">
            <div className="w-full aspect-[9/15] group-hover:-translate-y-2 duration-300 ease-in-out relative">
              <Image
                src={trade1}
                alt="struktur"
                className="rounded-lg h-full object-contain"
                draggable="false"
              />
            </div>
            <h3 className="text-[#007B8E] font-helveticaExtraBold font-helvetica text-base">
              Ma'rifatus Sayyidah
            </h3>
            <p className=" text-black text-opacity-70 text-sm">
              Kepala Bendahara Kabinet
            </p>
          </motion.div>

          <motion.div style={{ x: kanan4X, y: kanan4Y, opacity: opakanan4 }} className="lg:w-[18%] md:[32%] w-[45%] group">
            <div className="w-full aspect-[9/15] group-hover:-translate-y-2 duration-300 ease-in-out relative">
              <Image
                src={trade2}
                alt="struktur"
                className="rounded-lg h-full object-contain"
                draggable="false"
              />
            </div>
            <h3 className="text-[#007B8E] font-helveticaExtraBold font-helvetica text-base">
              Sahirah Shafa Alifiyah H.
            </h3>
            <p className=" text-black text-opacity-70 text-sm">
              Wakil Kepala Bendahara Kabinet
            </p>
          </motion.div>
        </section>

        <section className="container mx-auto px-4 lg:px-24">
          <div className="lg:px-10 px-2 py-5 bg-[#F2F2F2] rounded-xl border-transparent  border-opacity-10">
            <h1 className="lg:text-4xl text-xl font-helvetica font-helveticaExtraBold text-black mb-3">
              PROGRAM KERJA
            </h1>

            <main className="w-full grid grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-4 lg:gap-10 ">
              {prokertrade.map(
                ({ id, number, title, description, bg, textColor }) => (
                  <div
                    key={id}
                    className={`${bg} ${textColor} w-full lg:aspect-[12/14] rounded-xl lg:p-7 p-2 transition transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl group`}
                  >
                    {number && (
                      <p className="font-helvetica font-helveticaExtraBold text-2xl lg:text-4xl text-end">
                        {number}
                      </p>
                    )}
                    {title && (
                      <p className="font-helvetica font-helveticaExtraBold text-sm lg:text-xl mb-0 md:mb-10">
                        {title}
                      </p>
                    )}
                    {description && (
                      <p className="text-xs lg:text-sm lg:group-hover:text-base duration-300 ease-in-out line-clamp-[8] lg:line-clamp-none overflow-auto">
                        {description}
                      </p>
                    )}
                  </div>
                )
              )}
            </main>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Struktur;
