export default function Featured() {
  const qualities = [
    {
      title: "Смелость",
      subtitle: "С 14 лет — в открытом море",
      description:
        "В 14 лет вышел юнгой в первое плавание. В 22 — поступил на службу к Петру I. В 1725 году повёл суда вдоль Камчатки на север, сквозь штормы и голод, чтобы доказать: Азия и Америка не соединены. Пролив, разделяющий континенты, теперь носит его имя.",
    },
    {
      title: "Упорство",
      subtitle: "20 лет службы и Великая Северная экспедиция",
      description:
        "После 20 лет безупречной службы уволился из-за неполученного чина — но вернулся по указу Петра I. Возглавил Великую Северную экспедицию 1733–1743 годов: исследовал Сибирь, Дальний Восток и Америку, нанёс на карты 28 новых объектов. Даже кораблекрушение у Командорских островов не сломило командира.",
    },
    {
      title: "Любознательность",
      subtitle: "Картограф, натуралист, первооткрыватель",
      description:
        "Изучал картографию, собирал данные о народах, флоре и фауне. Его экспедиции принесли России точные карты и сведения по антропологии, ботанике и зоологии. Современники писали: \"Он всегда стремился изо всех сил выполнить порученное\". Умер на острове, названном в его честь — 19 декабря 1741 года.",
    },
  ];

  return (
    <div id="qualities" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-xs tracking-[0.4em] text-neutral-400 mb-4">Три грани характера</p>
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-20 leading-tight max-w-2xl">
          Качества, изменившие карту мира
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {qualities.map((q, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-[6rem] font-bold text-neutral-100 leading-none mb-2 select-none">
                0{i + 1}
              </span>
              <h3 className="text-2xl font-bold text-neutral-900 mb-1">{q.title}</h3>
              <p className="text-xs uppercase tracking-wide text-neutral-400 mb-4">{q.subtitle}</p>
              <p className="text-neutral-600 leading-relaxed text-sm">{q.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
