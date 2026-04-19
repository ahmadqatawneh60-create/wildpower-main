interface OrbConfig {
  color: string;
  size: string;
  position: string;
  blur: string;
  delay?: string;
}

const orbPresets: Record<string, OrbConfig[]> = {
  services: [
    { color: "bg-blue-500/6", size: "w-[400px] h-[400px]", position: "top-10 -right-20", blur: "blur-[140px]" },
    { color: "bg-cyan-500/5", size: "w-[300px] h-[300px]", position: "bottom-20 -left-10", blur: "blur-[120px]", delay: "2.5s" },
  ],
  products: [
    { color: "bg-emerald-500/6", size: "w-[450px] h-[450px]", position: "-top-20 left-1/4", blur: "blur-[150px]" },
    { color: "bg-teal-400/4", size: "w-[350px] h-[350px]", position: "bottom-10 right-10", blur: "blur-[130px]", delay: "3s" },
  ],
  portfolio: [
    { color: "bg-violet-500/6", size: "w-[380px] h-[380px]", position: "top-1/3 -right-16", blur: "blur-[140px]" },
    { color: "bg-purple-400/5", size: "w-[320px] h-[320px]", position: "bottom-0 left-10", blur: "blur-[120px]", delay: "1.5s" },
  ],
  about: [
    { color: "bg-amber-500/6", size: "w-[400px] h-[400px]", position: "top-10 left-0", blur: "blur-[140px]" },
    { color: "bg-orange-400/4", size: "w-[300px] h-[300px]", position: "bottom-20 -right-10", blur: "blur-[110px]", delay: "2s" },
  ],
  quote: [
    { color: "bg-rose-500/5", size: "w-[350px] h-[350px]", position: "-top-10 right-1/4", blur: "blur-[130px]" },
    { color: "bg-pink-400/4", size: "w-[280px] h-[280px]", position: "bottom-10 left-20", blur: "blur-[100px]", delay: "3.5s" },
  ],
  contact: [
    { color: "bg-sky-500/6", size: "w-[380px] h-[380px]", position: "top-20 -left-10", blur: "blur-[140px]" },
    { color: "bg-indigo-400/4", size: "w-[320px] h-[320px]", position: "bottom-0 right-0", blur: "blur-[120px]", delay: "2s" },
  ],
};

const SectionOrbs = ({ variant }: { variant: keyof typeof orbPresets }) => {
  const orbs = orbPresets[variant];
  if (!orbs) return null;

  return (
    <>
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={`absolute ${orb.position} ${orb.size} ${orb.color} rounded-full ${orb.blur} animate-float pointer-events-none`}
          style={orb.delay ? { animationDelay: orb.delay } : undefined}
        />
      ))}
    </>
  );
};

export default SectionOrbs;
