import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const slides = [
  {
    id: 1,
    label: "Введение",
    title: "Витус Беринг",
    subtitle: "1681 — 1741",
    text: "Датчанин по рождению, ставший русским мореплавателем, чья жизнь воплотила в себе смелость, упорство и любознательность. Он преодолевал океанские просторы, суровую природу и личные невзгоды ради знаний и открытий.",
    bg: "https://cdn.poehali.dev/projects/f345fcb8-aada-4545-9fb0-f3fa73defb21/files/4f0efd3d-73ed-498a-9e51-a02e82a8210b.jpg",
    overlay: "bg-black/55",
    theme: "dark",
  },
  {
    id: 2,
    label: "Смелость",
    title: "Первые шаги",
    subtitle: "Хорсенс, Дания · 1681",
    text: "Родившийся в 1681 году в датском Хорсенсе, Беринг в 14 лет вышел в первое плавание юнгой, сопровождая сводного брата в Индию через Балтику и Европу. Море стало его судьбой с детства.",
    bg: "https://cdn.poehali.dev/projects/f345fcb8-aada-4545-9fb0-f3fa73defb21/files/37a5dc66-d576-4b12-b1c7-8460e898e530.jpg",
    overlay: "bg-black/60",
    theme: "dark",
  },
  {
    id: 3,
    label: "Смелость",
    title: "На службе Петра I",
    subtitle: "Россия · 1703",
    text: "В 22 года Беринг прибыл в Россию, чтобы служить в флоте Петра I. Участвовал в войнах с Турцией, командовал кораблями на Балтике и Азове. Иностранец стал одним из главных морских командиров великой империи.",
    bg: "https://cdn.poehali.dev/projects/f345fcb8-aada-4545-9fb0-f3fa73defb21/files/14b53915-d533-43ad-b1b1-21fe8d3b0dc7.jpg",
    overlay: "bg-black/60",
    theme: "dark",
  },
  {
    id: 4,
    label: "Смелость",
    title: "Первая Камчатская экспедиция",
    subtitle: "1725 — 1730",
    text: "По поручению Петра I Беринг вёл боты вдоль Камчатки на север, чтобы проверить: соединяется ли Азия с Америкой? Несмотря на штормы, голод и нехватку припасов — он не отступил.",
    bg: "https://cdn.poehali.dev/projects/f345fcb8-aada-4545-9fb0-f3fa73defb21/files/7e32e80e-95a0-4b7f-a583-d56240b65cac.jpg",
    overlay: "bg-black/65",
    theme: "dark",
  },
  {
    id: 5,
    label: "Смелость",
    title: "Пролив Беринга",
    subtitle: "Открытие · 1728",
    text: "Беринг доказал: между Азией и Америкой существует пролив. Два континента не соединены сушей. Этот пролив навсегда вошёл в историю под его именем — как символ смелости одного человека.",
    bg: "https://cdn.poehali.dev/projects/f345fcb8-aada-4545-9fb0-f3fa73defb21/files/4f0efd3d-73ed-498a-9e51-a02e82a8210b.jpg",
    overlay: "bg-black/50",
    theme: "dark",
  },
  {
    id: 6,
    label: "Упорство",
    title: "Отставка и возвращение",
    subtitle: "1724 — 1725",
    text: "После 20 лет безупречной службы Беринг уволился в отставку из-за неполученного чина капитана 1-го ранга. Гордость и честолюбие. Но через пять месяцев он вернулся — по указу Петра I — и принял командование новой экспедицией.",
    bg: "https://cdn.poehali.dev/projects/f345fcb8-aada-4545-9fb0-f3fa73defb21/files/37a5dc66-d576-4b12-b1c7-8460e898e530.jpg",
    overlay: "bg-black/65",
    theme: "dark",
  },
  {
    id: 7,
    label: "Упорство",
    title: "Великая Северная экспедиция",
    subtitle: "1733 — 1743",
    text: "Грандиозный проект по исследованию Сибири, Дальнего Востока и Америки. Тысячи километров неизведанных земель, сотни участников, годы подготовки. Вершина упорства Беринга как учёного и командира.",
    bg: "https://cdn.poehali.dev/projects/f345fcb8-aada-4545-9fb0-f3fa73defb21/files/7e32e80e-95a0-4b7f-a583-d56240b65cac.jpg",
    overlay: "bg-black/60",
    theme: "dark",
  },
  {
    id: 8,
    label: "Упорство",
    title: "Открытия на карте",
    subtitle: "28 новых объектов",
    text: "Беринг открыл острова между Камчаткой и Аляской, описал восточное побережье России, нанёс на карты 28 новых географических объектов. Каждый из них — свидетельство упорства и точности.",
    bg: "https://cdn.poehali.dev/projects/f345fcb8-aada-4545-9fb0-f3fa73defb21/files/7e32e80e-95a0-4b7f-a583-d56240b65cac.jpg",
    overlay: "bg-black/55",
    theme: "dark",
  },
  {
    id: 9,
    label: "Упорство",
    title: "Кораблекрушение",
    subtitle: "Командорские острова · 1741",
    text: "Корабль «Святой Пётр» разбился у Командорских островов. Экипаж боролся с цингой и арктическим холодом. Беринг до последнего руководил командой — тяжело больной, но непреклонный.",
    bg: "https://cdn.poehali.dev/projects/f345fcb8-aada-4545-9fb0-f3fa73defb21/files/14b53915-d533-43ad-b1b1-21fe8d3b0dc7.jpg",
    overlay: "bg-black/60",
    theme: "dark",
  },
  {
    id: 10,
    label: "Любознательность",
    title: "Жажда знаний",
    subtitle: "Кадетский корпус и картография",
    text: "С детства завороженный морем, Беринг окончил кадетский корпус, изучал картографию, собирал данные о народах, флоре и фауне. Знания для него были не средством — они были целью.",
    bg: "https://cdn.poehali.dev/projects/f345fcb8-aada-4545-9fb0-f3fa73defb21/files/37a5dc66-d576-4b12-b1c7-8460e898e530.jpg",
    overlay: "bg-black/60",
    theme: "dark",
  },
  {
    id: 11,
    label: "Любознательность",
    title: "Научный вклад",
    subtitle: "Антропология, ботаника, зоология",
    text: "Экспедиции Беринга принесли России точные карты и богатейшие сведения: антропология коренных народов, ботанические и зоологические описания новых видов. Он был первооткрывателем в полном смысле слова.",
    bg: "https://cdn.poehali.dev/projects/f345fcb8-aada-4545-9fb0-f3fa73defb21/files/7e32e80e-95a0-4b7f-a583-d56240b65cac.jpg",
    overlay: "bg-black/60",
    theme: "dark",
  },
  {
    id: 12,
    label: "Любознательность",
    title: "Слова современников",
    subtitle: "Свидетельства эпохи",
    text: "«Он всегда стремился изо всех сил выполнить порученное, хотя сетовал на нехватку сил». Эти слова современников — лучший портрет Беринга: человека долга, неутомимого в своём стремлении к знаниям.",
    bg: "https://cdn.poehali.dev/projects/f345fcb8-aada-4545-9fb0-f3fa73defb21/files/37a5dc66-d576-4b12-b1c7-8460e898e530.jpg",
    overlay: "bg-black/65",
    theme: "dark",
  },
  {
    id: 13,
    label: "Финал",
    title: "19 декабря 1741",
    subtitle: "Остров Беринга",
    text: "Беринг умер 19 декабря 1741 года на острове, названном в его честь. Но его вклад пережил его — открыв новую эпоху освоения Арктики и Тихого океана для всего человечества.",
    bg: "https://cdn.poehali.dev/projects/f345fcb8-aada-4545-9fb0-f3fa73defb21/files/4f0efd3d-73ed-498a-9e51-a02e82a8210b.jpg",
    overlay: "bg-black/60",
    theme: "dark",
  },
  {
    id: 14,
    label: "Осмысление",
    title: "Идеал путешественника",
    subtitle: "Личное осмысление",
    text: "В Беринге — идеал путешественника. Его смелость вдохновляет рисковать ради цели, упорство учит не сдаваться перед неудачами, а любознательность напоминает: истинные открытия рождаются из жажды познания.",
    bg: "https://cdn.poehali.dev/projects/f345fcb8-aada-4545-9fb0-f3fa73defb21/files/14b53915-d533-43ad-b1b1-21fe8d3b0dc7.jpg",
    overlay: "bg-black/55",
    theme: "dark",
  },
  {
    id: 15,
    label: "Итог",
    title: "Мост между мирами",
    subtitle: "Наследие Витуса Беринга",
    text: "В эпоху, когда Россия становилась империей, Беринг стал её символом — мостом между Европой и Новым Светом. Датчанин, отдавший жизнь России и морю. Имя его — на карте навсегда.",
    bg: "https://cdn.poehali.dev/projects/f345fcb8-aada-4545-9fb0-f3fa73defb21/files/4f0efd3d-73ed-498a-9e51-a02e82a8210b.jpg",
    overlay: "bg-black/50",
    theme: "dark",
  },
];

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
};

export default function Slideshow() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const prev = () => current > 0 && go(current - 1);
  const next = () => current < slides.length - 1 && go(current + 1);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current]);

  const slide = slides[current];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black select-none">
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={slide.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={slide.bg}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${slide.overlay}`} />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={`text-${slide.id}`}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.05 }}
          className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 z-10"
        >
          <span className="text-white/50 uppercase text-xs tracking-[0.4em] mb-3">
            {slide.label}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-3">
            {slide.title}
          </h1>
          <p className="text-white/60 uppercase text-xs tracking-widest mb-5">
            {slide.subtitle}
          </p>
          <p className="text-white/90 text-base md:text-lg max-w-2xl leading-relaxed">
            {slide.text}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="absolute top-6 left-8 z-20 text-white/70 text-sm uppercase tracking-widest">
        Витус Беринг
      </div>

      <div className="absolute top-6 right-8 z-20 text-white/50 text-sm font-mono">
        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>

      <div className="absolute bottom-8 left-8 right-8 z-20 flex items-center justify-between">
        <button
          onClick={prev}
          disabled={current === 0}
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <Icon name="ArrowLeft" size={20} />
          <span className="text-sm uppercase tracking-wide hidden sm:inline">Назад</span>
        </button>

        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`h-0.5 transition-all duration-300 rounded-full ${
                i === current ? "w-8 bg-white" : "w-3 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={current === slides.length - 1}
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <span className="text-sm uppercase tracking-wide hidden sm:inline">Вперёд</span>
          <Icon name="ArrowRight" size={20} />
        </button>
      </div>
    </div>
  );
}
