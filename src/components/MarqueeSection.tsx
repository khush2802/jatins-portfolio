const MarqueeSection = ({ items, label }: { items: string[]; label: string }) => {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <section className="section-border py-12 overflow-hidden">
      <p className="mb-6 px-6 font-body text-sm uppercase tracking-[0.3em] text-primary md:px-16 lg:px-24">
        {label}
      </p>
      <div className="overflow-hidden">
        <div className="marquee-track">
          {repeated.map((item, i) => (
            <span
              key={i}
              className="whitespace-nowrap px-8 font-display text-3xl uppercase text-foreground md:text-5xl"
            >
              {item}
              <span className="mx-8 text-primary">●</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
