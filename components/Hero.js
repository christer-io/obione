import Button from "../components/Button"

function Hero({ title, textpart2, buttontext, url, img }) {
  return (
    <div>
        <section className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="pl-2 mr-auto place-self-center lg:col-span-7">
                    <h1 className=" max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">{title}</h1>
                    <p className=" max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{textpart2}</p>
                    <Button buttontext={buttontext} url={url}/>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={`/${img}.png`} alt="mockup" />
                </div>                
            </div>
        </section>
    </div>
  )
}

export default Hero