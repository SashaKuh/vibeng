export function Hero() {
    return (
        <section className="relative  bg-gradient-to-br from-[#b8d8e3] via-[#c9bce6] to-[#e3b7de] py-20">
            {/* Діагональна стрічка */}
            <div className="absolute -top-4 left-0 w-full transform -rotate-2 z-10">
                <div className="bg-[#EFE2C5] text-[#2c2c2c] text-sm font-semibold py-1 px-4 shadow-md text-center tracking-wide">
                    ДОСИТЬ ТЯГНУТИ КОТА ЗА ХВІСТ. ТИСНИ НА БАТОН І LET'S СТАРТ. ДОСИТЬ ТЯГНУТИ КОТА ЗА ХВІСТ. ТИСНИ НА БАТОН І LET'S СТАРТ.
                </div>
            </div>

            {/* Бабл */}
            <div className="relative z-0 mx-auto max-w-3xl px-6 text-center bg-[#f7f7f7] rounded-[2rem] py-16 shadow-xl bubble-shape">
                <h1 className="text-4xl font-bold mb-4 text-[#1C1C1C]">Feel the Vibe,</h1>
                <h2 className="text-3xl font-medium text-[#1C1C1C]">Speak the Language</h2>
            </div>
        </section>
    );
}
