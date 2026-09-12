import viilogo from "../src/assets/viilogo.jpeg"
const MainPageLayout = ({headerMenu,body,footers}) => {
    return (
        <div className="flex flex-col shadow-2xl">
            {/* headers */}
            <header className="flex flex-row w-full h-8 gap-8 items-center justify-center shadow-amber-50 flex-wrap">
                <img src={viilogo} alt="vii-logo" className="h-8 w-12"/>
                {headerMenu.map((item) => (
                    <span className="font-light">{item.name}</span>
                ))}
            </header>
            {/* body */}
            <main className="flex flex-col grow max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 bg-gray-200 justify-center gap-y-2">
                <p>body1</p>
                <p>body2</p>
                <p>body3</p>
                <p>body4</p>
                <p>body5</p>
                <p>body6</p>
                <p>body7</p>
                <hr/>
                <p>body1</p>
                <p>body2</p>
                <p>body3</p>
                <p>body4</p>
                <p>body5</p>
                <p>body6</p>
                <p>body7</p>
            </main>

            {/* bottom/footer */}
            <footer className="flex flex-wrap flex-col p-2 bg-black h-auto w-full text-sm mx-auto">
                {footers.map((item) => 
                    <span className="text-white font-bold">{item.name}</span>
                )}
            </footer>
        </div>
    );
};
export default MainPageLayout;