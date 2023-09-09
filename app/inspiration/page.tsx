import ProductCard from "@/components/productCard";


export default function Inspiration() {
  return (
    <div>
      <div className="md:px-9 px-4 md:mt-40 mt-28">
        <div>
            <h2 className="md:text-7xl text-3xl text-center">Discover the world’s top <br /> designers & creatives</h2>
        </div>
        <div className="text-center md:mt-14 mt-9">
            <span className="md:text-2xl text-lg text-gray-700" >Dribbble is the leading destination to find & showcase creative work and <br /> home to the world's best design professionals.</span>
        </div>
        <div className="flex justify-center md:mt-16 mt-10">
            <input className=" border rounded-full h-16 w-full md:w-1/2 text-xl border-gray-500 text-black px-4 outline-none " placeholder="Search 18 million+ shorts...." type="text" />
        </div>
    </div>
    <ProductCard />
    </div>
  
  )
}
