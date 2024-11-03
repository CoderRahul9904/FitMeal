

function Header() {
    return (
        <>
            <header className=" my-5">
                <div className=" flex justify-around items-center w-screen h-auto">
                    <div className=" flex gap-2 justify-center items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#fccc1f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-cooking-pot">
                                <path d="M2 12h20" /><path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" /><path d="m4 8 16-4" /><path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" />
                            </svg>
                        </div>
                        <h1 className=" text-[#fccc1f] font-extrabold text-3xl font-sans">FitMeal</h1>
                    </div>
                    <div className=" flex gap-6 justify-center items-center">
                        <div className="group">
                            <button className="bg-transparent text-[#fccc1f] font-extrabold">
                                Home
                            </button>
                            <div className="h-1 bg-transparent group-hover:bg-[#fccc1f] transition-colors duration-300"></div>
                        </div>

                        <div className="group">
                            <button className="bg-transparent text-[#fccc1f] font-extrabold">
                                Favorites
                            </button>
                            <div className="h-1 bg-transparent group-hover:bg-[#fccc1f] transition-colors duration-300"></div>
                        </div>
                        <div className="group">
                            <div className=" flex gap-1">
                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fccc1f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
                               <button className="bg-transparent text-[#fccc1f] font-bold">
                                   Login
                                </button>
                            </div>
                            
                            <div className="h-1 bg-transparent group-hover:bg-[#fccc1f] transition-colors duration-300"></div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header