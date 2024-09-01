export function FeatureCard({ card }: any) {
  return (
    <div
      className="flex flex-col justify-evenly md:justify-between  gap-4 px-4 py-2 md:py-8  bg-neutral-300  bg-cover bg-right rounded-xl aspect-[1.7]"
      style={{ backgroundImage: `url(${card.imgage})` }}
    >
      <p className="md:w-[60%] text-primary text-2xl font-bold">{card.title}</p>
      <button className="bg-lightred  text-white text-sm font-bold w-max px-4 py-2 rounded-md">
        Shop Now
      </button>
    </div>
  );
}
