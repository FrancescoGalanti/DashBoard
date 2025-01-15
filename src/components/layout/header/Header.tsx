import Logo from "./Logo";
import MainNav from "./MainNav";

export default function Header() {
    return (
        <header className=" bg-primaryDark text-white py-6  ">
            <div className="container">
                <section className="pb-6 flex justify-between items-center border-b  border-white/50  ">
                    <Logo iconSize={30} className="text-xl font-bold" />
                    <MainNav />
                </section>
            </div>
        </header>
    )
}
