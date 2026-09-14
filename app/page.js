"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Ве молиме внесете го вашето име и презиме.");
      return;
    }

    if (!attendance) {
      alert("Ве молиме изберете дали ќе присуствувате.");
      return;
    }

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          attendance,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Грешка:", data);
        alert("Настана грешка при испраќањето. Обидете се повторно.");
        return;
      }

      console.log("Email успешно испратен:", data);

      setSubmitted(true);
    } catch (error) {
      console.error("Грешка:", error);
      alert("Настана грешка при испраќањето. Обидете се повторно.");
    }
  };

  return (
    <main className="min-h-screen bg-[#f0f8ff] flex items-center justify-center px-4 py-8">
      {/* ДЕКОРАТИВНИ КРУГОВИ ВО ПОЗАДИНА */}

      {/* ГОРЕН ЛЕВ ДЕЛ */}
      <div className="absolute top-3 left-[3%] w-6 h-6 rounded-full bg-[#ffbd59] opacity-65" />
      <div className="absolute top-10 left-[12%] w-2 h-2 rounded-full bg-[#72b5df] opacity-70" />
      <div className="absolute top-20 left-[20%] w-4 h-4 rounded-full bg-[#8fc58d] opacity-60" />
      <div className="absolute top-5 left-[28%] w-3 h-3 rounded-full bg-[#ef6c45] opacity-55" />

      {/* ГОРЕН СРЕДЕН ДЕЛ */}
      <div className="absolute top-1 left-[43%] w-3 h-3 rounded-full bg-[#72b5df] opacity-65" />
      <div className="absolute top-12 left-[51%] w-5 h-5 rounded-full bg-[#ffbd59] opacity-55" />
      <div className="absolute top-4 left-[61%] w-2 h-2 rounded-full bg-[#ef6c45] opacity-65" />
      <div className="absolute top-22 left-[70%] w-4 h-4 rounded-full bg-[#8fc58d] opacity-60" />

      {/* ГОРЕН ДЕСЕН ДЕЛ */}
      <div className="absolute top-8 right-[14%] w-3 h-3 rounded-full bg-[#72b5df] opacity-65" />
      <div className="absolute top-2 right-[4%] w-6 h-6 rounded-full bg-[#8fc58d] opacity-60" />
      <div className="absolute top-20 right-[8%] w-2 h-2 rounded-full bg-[#ef6c45] opacity-65" />

      {/* МЕЃУ ЛЕВО И КАРТИЧКАТА */}
      <div className="absolute top-[18%] left-[2%] w-3 h-3 rounded-full bg-[#ef6c45] opacity-60" />
      <div className="absolute top-[25%] left-[9%] w-5 h-5 rounded-full bg-[#72b5df] opacity-55" />
      <div className="absolute top-[33%] left-[3%] w-2 h-2 rounded-full bg-[#ffbd59] opacity-70" />
      <div className="absolute top-[41%] left-[11%] w-4 h-4 rounded-full bg-[#8fc58d] opacity-60" />
      <div className="absolute top-[49%] left-[2%] w-6 h-6 rounded-full bg-[#ffbd59] opacity-50" />
      <div className="absolute top-[58%] left-[9%] w-2 h-2 rounded-full bg-[#72b5df] opacity-70" />
      <div className="absolute top-[67%] left-[3%] w-4 h-4 rounded-full bg-[#ef6c45] opacity-55" />
      <div className="absolute top-[76%] left-[11%] w-3 h-3 rounded-full bg-[#8fc58d] opacity-65" />

      {/* МАЛИ ТОЧКИ БЛИСКУ ДО КАРТИЧКАТА */}
      <div className="absolute top-[23%] left-[27%] w-2 h-2 rounded-full bg-[#ffbd59] opacity-65" />
      <div className="absolute top-[31%] left-[22%] w-3 h-3 rounded-full bg-[#72b5df] opacity-55" />
      <div className="absolute top-[43%] left-[25%] w-2 h-2 rounded-full bg-[#8fc58d] opacity-70" />
      <div className="absolute top-[56%] left-[23%] w-3 h-3 rounded-full bg-[#ef6c45] opacity-50" />
      <div className="absolute top-[69%] left-[26%] w-2 h-2 rounded-full bg-[#ffbd59] opacity-70" />

      {/* МЕЃУ КАРТИЧКАТА И ДЕСНИОТ РАБ */}
      <div className="absolute top-[19%] right-[10%] w-4 h-4 rounded-full bg-[#8fc58d] opacity-60" />
      <div className="absolute top-[27%] right-[3%] w-2 h-2 rounded-full bg-[#ffbd59] opacity-70" />
      <div className="absolute top-[36%] right-[12%] w-5 h-5 rounded-full bg-[#72b5df] opacity-55" />
      <div className="absolute top-[45%] right-[3%] w-3 h-3 rounded-full bg-[#ef6c45] opacity-60" />
      <div className="absolute top-[54%] right-[11%] w-2 h-2 rounded-full bg-[#ffbd59] opacity-70" />
      <div className="absolute top-[63%] right-[4%] w-5 h-5 rounded-full bg-[#8fc58d] opacity-55" />
      <div className="absolute top-[72%] right-[12%] w-3 h-3 rounded-full bg-[#72b5df] opacity-65" />
      <div className="absolute top-[80%] right-[4%] w-4 h-4 rounded-full bg-[#ef6c45] opacity-55" />

      {/* ДОЛЕН ЛЕВ ДЕЛ */}
      <div className="absolute bottom-12 left-[3%] w-5 h-5 rounded-full bg-[#72b5df] opacity-55" />
      <div className="absolute bottom-5 left-[14%] w-3 h-3 rounded-full bg-[#ffbd59] opacity-65" />
      <div className="absolute bottom-14 left-[25%] w-2 h-2 rounded-full bg-[#ef6c45] opacity-60" />
      <div className="absolute bottom-3 left-[34%] w-5 h-5 rounded-full bg-[#8fc58d] opacity-55" />

      {/* ДОЛЕН СРЕДЕН ДЕЛ */}
      <div className="absolute bottom-10 left-[45%] w-3 h-3 rounded-full bg-[#ffbd59] opacity-65" />
      <div className="absolute bottom-2 left-[55%] w-2 h-2 rounded-full bg-[#72b5df] opacity-70" />
      <div className="absolute bottom-13 left-[64%] w-4 h-4 rounded-full bg-[#ef6c45] opacity-55" />

      {/* ДОЛЕН ДЕСЕН ДЕЛ */}
      <div className="absolute bottom-5 right-[4%] w-6 h-6 rounded-full bg-[#ffbd59] opacity-55" />
      <div className="absolute bottom-14 right-[15%] w-3 h-3 rounded-full bg-[#8fc58d] opacity-65" />
      <div className="absolute bottom-3 right-[26%] w-2 h-2 rounded-full bg-[#72b5df] opacity-70" />
      {/* ГЛАВЕН КОНТЕЈНЕР */}

      <div className="relative w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 items-center">
        {/* ================================================= */}
        {/* ЛЕВА СТРАНА - ПОКАНА */}
        {/* ================================================= */}

        <div className="flex justify-center">
          <div className="relative w-full max-w-[390px]">
            {/* ДЕКОРАТИВНИ КРУГОВИ */}

            <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#ffbd59] rounded-full opacity-80" />

            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#b79adf] rounded-full opacity-80" />

            <img
              src="/slika.jpg"
              alt="Покана"
              className="
                relative
                z-10
                w-full
                h-auto
                rounded-[25px]
                shadow-[0_15px_35px_rgba(50,100,130,0.20)]
              "
            />
          </div>
        </div>

        {/* ================================================= */}
        {/* ДЕСНА СТРАНА - RSVP */}
        {/* ================================================= */}

        <div className="flex justify-center">
          <div className="relative w-full max-w-[370px]">
            {/* ДЕКОРАТИВНИ ТОЧКИ */}
            <div className="absolute -top-3 left-8 w-3 h-3 rounded-full bg-[#ef6c45]" />
            <div className="absolute top-5 right-8 w-4 h-4 rounded-full bg-[#ffbd59]" />
            <div className="absolute bottom-8 -left-4 w-5 h-5 rounded-full bg-[#8fc58d]" />
            <div className="absolute bottom-20 -right-4 w-4 h-4 rounded-full bg-[#ef6c45]" />

            {/* RSVP КАРТИЧКА */}
            <div
              className="
        relative
        z-10
        bg-[#fffdf5]
        border-[3px]
        border-[#72b5df]
        rounded-[30px]
        shadow-[0_12px_30px_rgba(70,110,130,0.16)]
        overflow-hidden
      "
            >
              {/* ГОРЕН ДЕЛ */}
              <div
                className="
          relative
          bg-[#eef7f7]
          px-6
          pt-7
          pb-6
          text-center
          overflow-hidden
        "
              >
                {/* МАЛИ ШАРЕНИ ТОЧКИ */}
                <div className="absolute top-4 left-7 w-2 h-2 rounded-full bg-[#ef6c45]" />
                <div className="absolute top-7 left-14 w-3 h-3 rounded-full bg-[#ffbd59]" />
                <div className="absolute top-5 right-10 w-3 h-3 rounded-full bg-[#8fc58d]" />
                <div className="absolute top-10 right-5 w-2 h-2 rounded-full bg-[#ef6c45]" />

                {/* ДЕКОРАТИВНА ЛИНИЈА */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="w-10 h-[3px] rounded-full bg-[#72b5df]" />
                  <span className="w-3 h-3 rounded-full bg-[#ef6c45]" />
                  <span className="w-10 h-[3px] rounded-full bg-[#72b5df]" />
                </div>

                <h1
                  className="
    text-[27px]
    sm:text-[29px]
    font-extrabold
    text-[#2589bd]
    leading-tight
  "
                >
                  Потврдете го
                  <br />
                  вашето присуство
                </h1>

                <p className="mt-3 text-[13px] text-[#6f9fba]">
                  Дојдете да прославиме заедно!
                </p>
              </div>

              {/* ФОРМА */}
              <div className="px-6 sm:px-7 pt-6 pb-6">
                <form onSubmit={handleSubmit}>
                  {/* ИМЕ */}
                  <div>
                    <label
                      className="
                block
               text-[#267ba5]
                font-bold
                text-sm
                mb-2
              "
                    >
                      Име и презиме
                    </label>

                    <input
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        setSubmitted(false);
                      }}
                      placeholder="Внесете го вашето име"
                      className="
                w-full
                h-12
                px-4
                rounded-xl
                border-2
                border-[#a9d3e8]
                bg-[#fffefa]
                text-[#6f6259]
                placeholder-[#b5aaa2]
                text-sm
                outline-none
                transition-all
                duration-200
                focus:border-[#70b4da]
                focus:ring-2
                focus:ring-[#e5f4fa]
              "
                    />
                  </div>

                  {/* ПРАШАЊЕ */}
                  <div className="mt-5">
                    <label
                      className="
                block
                text-[#267ba5]
                font-bold
                text-sm
                mb-3
              "
                    >
                      Дали ќе присуствувате?
                    </label>

                    <div className="flex gap-3">
                      {/* ДА */}
                      <button
                        type="button"
                        onClick={() => {
                          setAttendance("yes");
                          setSubmitted(false);
                        }}
                        className={
                          "flex-1 h-11 rounded-xl font-bold text-sm border-2 transition-all duration-200 " +
                          (attendance === "yes"
                            ? "bg-[#76bd8d] border-[#65ad7c] text-white shadow-md"
                            : "bg-[#f5faf1] border-[#b9d9c0] text-[#57966b] hover:bg-[#edf7e9]")
                        }
                      >
                        ✓ &nbsp; Да
                      </button>

                      {/* НЕ */}
                      <button
                        type="button"
                        onClick={() => {
                          setAttendance("no");
                          setSubmitted(false);
                        }}
                        className={
                          "flex-1 h-11 rounded-xl font-bold text-sm border-2 transition-all duration-200 " +
                          (attendance === "no"
                            ? "bg-[#d98a72] border-[#ca7862] text-white shadow-md"
                            : "bg-[#fff8f2] border-[#edcbbd] text-[#c47b67] hover:bg-[#fff1e9]")
                        }
                      >
                        × &nbsp; Не
                      </button>
                    </div>
                  </div>

                  {/* ПОТВРДИ */}
                  <button
                    type="submit"
                    className="
              w-full
              h-12
              mt-5
              rounded-xl
              bg-[#72b5df]
              hover:bg-[#5fa8d5]
              active:scale-[0.98]
              text-white
              text-base
              font-bold
              shadow-[0_6px_15px_rgba(80,160,205,0.22)]
              transition-all
              duration-200
            "
                  >
                    Потврди присуство
                  </button>
                </form>

                {/* SUCCESS MESSAGE */}
                {submitted && (
                  <div className="mt-4">
                    {attendance === "yes" ? (
                      <div
                        className="
                  rounded-xl
                  bg-[#f3f9ee]
                  border-2
                  border-[#c5dfc2]
                  px-4
                  py-3
                  text-center
                "
                      >
                        <p className="text-sm font-bold text-[#57966b]">
                          Те очекуваме!
                        </p>

                        <p className="text-xs text-[#7f9180] mt-1">
                          Вашето присуство е потврдено.
                        </p>
                      </div>
                    ) : (
                      <div
                        className="
                  rounded-xl
                  bg-[#fff6f0]
                  border-2
                  border-[#edcbbd]
                  px-4
                  py-3
                  text-center
                "
                      >
                        <p className="text-sm font-bold text-[#c47b67]">
                          Ви благодариме!
                        </p>

                        <p className="text-xs text-[#997b79] mt-1">
                          Жал ни е што нема да можете да дојдете.
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* ДОЛЕН ДЕКОР */}
                <div className="flex items-center justify-center gap-3 mt-5">
                  <span className="w-10 h-[2px] bg-[#d7e7e9]" />

                  <span className="w-2 h-2 rounded-full bg-[#ffbd59]" />

                  <span className="text-[11px] text-[#9a8270] font-semibold">
                    Се гледаме на забавата!
                  </span>

                  <span className="w-2 h-2 rounded-full bg-[#8fc58d]" />

                  <span className="w-10 h-[2px] bg-[#d7e7e9]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
