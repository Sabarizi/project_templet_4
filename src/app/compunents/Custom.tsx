import Link from "next/link";
export default function CustomDiv() {
  return (
    <div
      className="relative h-[460px] w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/Rectangle 102.png')" }} // Replace with your image path
    >
      <div className="text-center text-white px-6 sm:px-8 md:px-10 lg:px-16">
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
          Get Latest Update By Subscribe <br /> Our Newsletter
        </p>
        <Link href={"/products"}>
        <button className="mt-4 px-6 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 text-sm sm:text-base md:text-lg lg:text-xl">
          Shop Now
        </button>
        </Link>
      </div>
    </div>
  );
}
