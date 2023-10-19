

const Latest_blogs = () => {
    return (
        <div className="bg-black px-10 py-14 space-y-10 ">
            <h1 className="text-7xl text-white text-center">LATEST BLOGS</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 border border-white gap-4 rounded-lg">
                <div className="col-span-4 md:col-span-2 lg:col-span-1">
                    <img src="https://i.ibb.co/hBDkP8b/lambo.jpg" alt="" className="w-full h-full" />
                </div>
                <div className="col-span-4 md:col-span-2 lg:col-span-3 py-4 px-4 ">
                    <h2 className="text-3xl text-red-700">Stories Behind Lamborgini Car Brand Names</h2>
                    <p className="text-xl text-white mt-4">
                        The story behind Lamborghini`s iconic car brand names is a captivating blend of bullfighting tradition, exceptional courage, and a deep appreciation for the finest details. Ferruccio Lamborghini, the visionary behind the brand, had a passion for both engineering excellence and the world of bullfighting, which ultimately influenced the nomenclature of his creations.The Lamborghini Miura, one of the first models to roll off the production line, was named after Don Eduardo Miura, a renowned Spanish bull breeder. The choice reflected the strength and elegance of the sports cars, akin to the agility and poise of a fighting bull.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 border border-white gap-4 rounded-lg">

                <div className="col-span-4 md:col-span-2 lg:col-span-3 py-4 px-4 ">
                    <h2 className="text-3xl text-red-700">Stories Behind Ferrari Car Brand Names</h2>
                    <p className="text-xl text-white mt-4">
                        Ferrari, the iconic Italian sports car manufacturer, boasts a rich history and a brand name that resonates with automotive enthusiasts worldwide. The story behind the Ferrari brand is a tale of passion, precision, and the relentless pursuit of excellence.Founded in 1947 by the legendary Enzo Ferrari, the company`s brand name carries the weight of its founder`s name and vision. Enzo Ferrari, a former racing driver, set out to create the ultimate sports cars, driven by his love for racing and a fierce competitive spirit.
                    </p>
                </div>
                <div className="col-span-4 md:col-span-2 lg:col-span-1">
                    <img src="https://i.ibb.co/176nZLd/f2.jpg" alt="" className="w-full h-full" />
                </div>
            </div>
            {/* <div>

                <img src="https://i.ibb.co/3WfR2Sj/ferrari.jpg" alt="" />
            </div> */}
        </div>
    );
};

export default Latest_blogs;