export function Reviews() {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
                {/* 1 */}
                <div className="flex flex-col gap-2.5">
                    <h3 className="text-7xl font-bold text-[#60B9B2]">2500+</h3>
                    <p className="text-2xl font-bold text-black">учнів навчили</p>
                    <p className="text-[20px] font-normal text-black">
                        Допомогли опанувати сучасну лексику, граматику та підготували до складання IELTS, TOEFL, Cambridge exam, ЗНО/НМТ та міжнародних співбесід.
                    </p>
                </div>

                {/* 2 */}
                <div className="flex flex-col gap-2.5">
                    <h3 className="text-7xl font-bold text-[#60B9B2]">2–4 місяці</h3>
                    <p className="text-2xl font-bold text-black">тривалість курсу</p>
                    <p className="text-[20px] font-normal text-black">
                        Наш підхід до навчання спирається на мовні дослідження топових університетів світу, за даними яких практичне засвоєння одного рівня англійської потребує 100–150 годин навчання.
                    </p>
                </div>

                {/* 3 */}
                <div className="flex flex-col gap-2.5">
                    <h3 className="text-7xl font-bold text-[#60B9B2]">Контроль</h3>
                    <p className="text-2xl font-bold text-black">якості викладання</p>
                    <p className="text-[20px] font-normal text-black">
                        Наші викладачі проходять щомісячну перевірку з дотримання методології, а розмовні клуби для рівнів А2+ і вище проводять носії мови.
                    </p>
                </div>

                {/* 4 */}
                <div className="flex flex-col gap-2.5">
                    <h3 className="text-7xl font-bold text-[#60B9B2]">топ 250</h3>
                    <p className="text-2xl font-bold text-black">за версією Forbes</p>
                    <p className="text-[20px] font-normal text-black">
                        У липні 2023 увійшли до списку найперспективніших компаній України за версією Forbes.
                    </p>
                </div>
            </div>
        </section>
    );
}
