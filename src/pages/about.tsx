export default function About() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 my-12">
      <div className="flex flex-col justify-between">
        <h1 className="text-3xl font-semibold">About the Carrot</h1>
        <div className="flex flex-col gap-2">
          <p className="text-secondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
            recusandae necessitatibus quasi incidunt alias adipisci pariatur
            earum iure beatae assumenda rerum quod. Tempora magni autem a
            voluptatibus neque.
          </p>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae
            rerum cum accusamus magni consequuntur architecto, ipsum deleniti
            expedita doloribus suscipit voluptatum eius perferendis amet!.
          </p>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, maxime amet architecto est exercitationem optio ea
            maiores corporis beatae, dolores doloribus libero nesciunt qui
            illum? Voluptates deserunt adipisci voluptatem magni sunt sed
            blanditiis quod aspernatur! Iusto?
          </p>
        </div>
        <div className="flex items-center justify-evenly border bg-neutral-300 py-4 rounded-lg">
          <div>
            <p className="text-4xl font-semibold text-lightred">
              0.1<span className="text-lg text-neutral-600 ">k</span>
            </p>
            <p>Vendors</p>
          </div>
          <div>
            <p className="text-4xl font-semibold text-lightred">
              23<span className="text-lg text-neutral-600 ">k</span>
            </p>
            <p>Customers</p>
          </div>
          <div>
            <p className="text-4xl font-semibold text-lightred">
              2<span className="text-lg text-neutral-600 ">k</span>
            </p>
            <p>Products</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <img src="/about.webp" alt="about"/>
      </div>
      <div className="col-span-2 flex items-center justify-between gap-4 my-8 p-4">
        <div className="text-center space-y-2 bg-neutral-300 p-4">
          <h2 className="text-lg">Product Packing</h2>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <div className="text-center space-y-2 bg-neutral-300 p-4">
          <h2 className="text-lg">Product Packing</h2>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <div className="text-center space-y-2 bg-neutral-300 p-4">
          <h2 className="text-lg">Product Packing</h2>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <div className="text-center space-y-2 bg-neutral-300 p-4 my-8">
          <h2 className="text-lg">Product Packing</h2>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
      </div>
    </div>
  );
}
