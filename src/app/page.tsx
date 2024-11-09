import Image from "next/image";

export default function Home() {
    return (
        <main>
            <section id="welcome">
                <div className="welcome-container">
                    <Image
                        src="/assets/images/main-picture.svg"
                        alt="welcome"
                        fill
                    />
                    <h1>NOMAD TRAVEL</h1>
                    <p>Индивидуальные маршруты, созданные специально для вас</p>
                    <div className="search-box">
                        <h2>Поехали!</h2>
                        <p>
                            Исследуйте очаровательные места в Казахстане с
                            помощью NOMAD TRAVEL
                        </p>
                        <div className="search-panel">
                            <div className="search-panel-wrapper">
                                <div className="search-panel-flex">
                                    <div className="search-aspect">
                                        <div className="search-aspect-img-container">
                                            <Image
                                                src="/assets/images/location.svg"
                                                alt=""
                                                fill
                                            />
                                        </div>
                                        <div className="text-container">
                                            <span>Местоположение</span>
                                            <span>
                                                Добавить пункт назначения
                                            </span>
                                        </div>
                                    </div>
                                    <div className="search-aspect">
                                        <div className="search-aspect-img-container">
                                            <Image
                                                src="/assets/images/calendar.svg"
                                                alt=""
                                                fill
                                            />
                                        </div>
                                        <div className="text-container">
                                            <span>Въезд</span>
                                            <span>Добавить даты</span>
                                        </div>
                                    </div>
                                    <div className="search-aspect">
                                        <div className="search-aspect-img-container">
                                            <Image
                                                src="/assets/images/calendar.svg"
                                                alt=""
                                                fill
                                            />
                                        </div>
                                        <div className="text-container">
                                            <span>Выезд</span>
                                            <span>Добавить даты</span>
                                        </div>
                                    </div>
                                    <div className="search-aspect">
                                        <div className="search-aspect-img-container">
                                            <Image
                                                src="/assets/images/people.svg"
                                                alt=""
                                                fill
                                            />
                                        </div>
                                        <div className="text-container">
                                            <span>Гости</span>
                                            <span>Добавить гостей</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="search-icon-container">
                                <div className="search-icon-container-inner">
                                    <Image
                                        src="/assets/images/search.svg"
                                        alt="search"
                                        width={0}
                                        height={0}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="partners">
                <h2>НАШИ ПАРТРНЕРЫ</h2>
                <div className="partners">
                    <div>
                        <Image src="/assets/images/partner-1.svg" alt="" fill />
                    </div>
                    <div>
                        <Image src="/assets/images/partner-2.svg" alt="" fill />
                    </div>
                    <div>
                        <Image src="/assets/images/partner-3.svg" alt="" fill />
                    </div>
                    <div>
                        <Image src="/assets/images/partner-4.svg" alt="" fill />
                    </div>
                    <div>
                        <Image src="/assets/images/partner-5.svg" alt="" fill />
                    </div>
                    <div>
                        <Image src="/assets/images/partner-6.svg" alt="" fill />
                    </div>
                </div>
            </section>
            <section id="ad">
                <div className="ad-container">
                    <Image src="/assets/images/brb-main.png" alt="" fill />
                    <h2>ИССЛЕДУЙ БУРАБАЙ</h2>
                    <hr />
                    <div className="ad-left">
                        <p>
                            В районе Кокшетау (Северный Казахстан) это место
                            получило название Казахской Швейцарии. Под
                            раскаленным солнцем расстилается желтая степь, на
                            горизонте встречаясь с зеленой полосой густого леса.
                        </p>
                        <button>
                            Посмотреть{" "}
                            <Image
                                src="/assets/images/arrow-right.svg"
                                alt=""
                                width={20}
                                height={20}
                            />
                        </button>
                    </div>
                    <div className="ad-right">
                        <div className="ad-container">
                            <div className="brb-pic-container">
                                <Image
                                    src="/assets/images/brb-1.png"
                                    alt=""
                                    fill
                                />
                            </div>
                            <span>Жумбактас</span>
                        </div>
                        <div className="ad-container">
                            <div className="brb-pic-container">
                                <Image
                                    src="/assets/images/brb-2.png"
                                    alt=""
                                    fill
                                />
                            </div>
                            <span>Акбура</span>
                        </div>
                        <div className="ad-container">
                            <div className="brb-pic-container">
                                <Image
                                    src="/assets/images/brb-3.png"
                                    alt=""
                                    fill
                                />
                            </div>
                            <span>Окжетпес</span>
                        </div>
                    </div>
                </div>
            </section>
            <section id="articles">
                <div className="articles-section-container">
                    <h2>Статьи</h2>
                    <div className="articles-container">
                        <div className="article-container">
                            <div className="article-img-container">
                                <Image
                                    src="/assets/images/article-1.png"
                                    alt=""
                                    fill
                                />
                            </div>
                            <div className="article-padding">
                                <div className="date-container">
                                    <div className="date-img-container">
                                        <Image
                                            src="/assets/images/mini-calendar.svg"
                                            alt=""
                                            fill
                                        />
                                    </div>
                                    <span>Февраль 8, 2024</span>
                                </div>
                                <h3>
                                    Топ-10 ресторанов в <br /> Алматы
                                </h3>
                                <p>
                                    Лучшие рестораны Алматы - <br /> ТОП-10 по
                                    отзывам гостей, <br /> количеству
                                    бронирований и рей ...
                                </p>
                                <div className="arrow-container">
                                    <div className="arrow-circle-container">
                                        <Image
                                            src="/assets/images/circle-arrow.svg"
                                            alt=""
                                            fill
                                        />
                                    </div>
                                    <span>См. подробнее</span>
                                </div>
                            </div>
                        </div>
                        <div className="article-container">
                            <div className="article-img-container">
                                <Image
                                    src="/assets/images/article-2.png"
                                    alt=""
                                    fill
                                />
                            </div>
                            <div className="article-padding">
                                <div className="date-container">
                                    <div className="date-img-container">
                                        <Image
                                            src="/assets/images/mini-calendar.svg"
                                            alt=""
                                            fill
                                        />
                                    </div>
                                    <span>Февраль 8, 2024</span>
                                </div>
                                <h3>
                                    Каток Медеу открылся <br /> в Алматы
                                </h3>
                                <p>
                                    Сезон катаний на Медеу открыт! <br /> Цены
                                    на катания варьируются, в <br /> среднем это
                                    1200тг в будни, 1800тг ..
                                </p>
                                <div className="arrow-container">
                                    <div className="arrow-circle-container">
                                        <Image
                                            src="/assets/images/circle-arrow.svg"
                                            alt=""
                                            fill
                                        />
                                    </div>
                                    <span>См. подробнее</span>
                                </div>
                            </div>
                        </div>
                        <div className="article-container">
                            <div className="article-img-container">
                                <Image
                                    src="/assets/images/article-3.png"
                                    alt=""
                                    fill
                                />
                            </div>
                            <div className="article-padding">
                                <div className="date-container">
                                    <div className="date-img-container">
                                        <Image
                                            src="/assets/images/mini-calendar.svg"
                                            alt=""
                                            fill
                                        />
                                    </div>
                                    <span>Февраль 8, 2024</span>
                                </div>
                                <h3>
                                    3000 домбристов <br /> сыграли күй в Астане
                                </h3>
                                <p>
                                    3000 домбристов исполнили күй <br />{" "}
                                    Құрманғазы “Балбырауын” и <br /> попали в
                                    книгу рекордов Казахст ...
                                </p>
                                <div className="arrow-container">
                                    <div className="arrow-circle-container">
                                        <Image
                                            src="/assets/images/circle-arrow.svg"
                                            alt=""
                                            fill
                                        />
                                    </div>
                                    <span>См. подробнее</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="reviews">
                <div className="reviews-container">
                    <Image
                        src="/assets/images/testimonials-main.jpg"
                        alt=""
                        fill
                    />

                    <div className="reviews-padding">
                        <h2>Отзывы</h2>
                        <div className="reviews-flex">
                            <div className="review-container">
                                <div className="review-img-container">
                                    <div className="review-img-container-inner">
                                        <Image
                                            src="/assets/images/person-1.svg"
                                            alt=""
                                            fill
                                        />
                                    </div>
                                </div>
                                <div className="review-container-padding">
                                    <div className="review-flex">
                                        <div>
                                            <p>С. Дарын</p>
                                            <p>Graphic designer</p>
                                        </div>
                                        <div className="stars-container">
                                            <div className="star-img-container">
                                                <Image
                                                    src="/assets/images/testimonials-star.svg"
                                                    alt="star"
                                                    fill
                                                />
                                            </div>
                                            <div className="star-img-container">
                                                <Image
                                                    src="/assets/images/testimonials-star.svg"
                                                    alt="star"
                                                    fill
                                                />
                                            </div>
                                            <div className="star-img-container">
                                                <Image
                                                    src="/assets/images/testimonials-star.svg"
                                                    alt="star"
                                                    fill
                                                />
                                            </div>
                                            <div className="star-img-container">
                                                <Image
                                                    src="/assets/images/testimonials-star.svg"
                                                    alt="star"
                                                    fill
                                                />
                                            </div>
                                            <div className="star-img-container">
                                                <Image
                                                    src="/assets/images/testimonials-star.svg"
                                                    alt="star"
                                                    fill
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        Платформа объединяет всё необходимое для
                                        отдыха и досуга: аренда жилья, транспорт
                                        и события. Легко планировать поездки и
                                        вых ...
                                    </p>
                                </div>
                            </div>
                            <div className="review-container">
                                <div className="review-img-container">
                                    <div className="review-img-container-inner">
                                        <Image
                                            src="/assets/images/person-2.svg"
                                            alt=""
                                            fill
                                        />
                                    </div>
                                </div>
                                <div className="review-container-padding">
                                    <div className="review-flex">
                                        <div>
                                            <p>М. Ахмед</p>
                                            <p>Model</p>
                                        </div>
                                        <div className="stars-container">
                                            <div className="star-img-container">
                                                <Image
                                                    src="/assets/images/testimonials-star.svg"
                                                    alt="star"
                                                    fill
                                                />
                                            </div>
                                            <div className="star-img-container">
                                                <Image
                                                    src="/assets/images/testimonials-star.svg"
                                                    alt="star"
                                                    fill
                                                />
                                            </div>
                                            <div className="star-img-container">
                                                <Image
                                                    src="/assets/images/testimonials-star.svg"
                                                    alt="star"
                                                    fill
                                                />
                                            </div>
                                            <div className="star-img-container">
                                                <Image
                                                    src="/assets/images/testimonials-star.svg"
                                                    alt="star"
                                                    fill
                                                />
                                            </div>
                                            <div className="star-img-container">
                                                <Image
                                                    src="/assets/images/testimonials-star.svg"
                                                    alt="star"
                                                    fill
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        Универсальный сервис, где можно
                                        забронировать жилье, найти мероприятия и
                                        заказать транспорт. Удобно использовать,
                                        всё под рук ...
                                    </p>
                                </div>
                            </div>
                            <div className="review-container">
                                <div className="review-img-container">
                                    <div className="review-img-container-inner">
                                        <Image
                                            src="/assets/images/person-3.svg"
                                            alt=""
                                            fill
                                        />
                                    </div>
                                </div>
                                <div className="review-container-padding">
                                    <div className="review-flex">
                                        <div>
                                            <p>Ш. Жанарбек</p>
                                            <p>Software engineer</p>
                                        </div>
                                        <div className="stars-container">
                                            <div className="star-img-container">
                                                <Image
                                                    src="/assets/images/testimonials-star.svg"
                                                    alt="star"
                                                    fill
                                                />
                                            </div>
                                            <div className="star-img-container">
                                                <Image
                                                    src="/assets/images/testimonials-star.svg"
                                                    alt="star"
                                                    fill
                                                />
                                            </div>
                                            <div className="star-img-container">
                                                <Image
                                                    src="/assets/images/testimonials-star.svg"
                                                    alt="star"
                                                    fill
                                                />
                                            </div>
                                            <div className="star-img-container">
                                                <Image
                                                    src="/assets/images/testimonials-star.svg"
                                                    alt="star"
                                                    fill
                                                />
                                            </div>
                                            <div className="star-img-container">
                                                <Image
                                                    src="/assets/images/testimonials-star.svg"
                                                    alt="star"
                                                    fill
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        Отличный инструмент для поиска жилья,
                                        вызова транспорта и поиска развлечений.
                                        Простой интерфейс и удобство
                                        использования делают ...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="mailing">
                <div className="mailing-container">
                    <div className="mailing-flex">
                        <div className="mailing-img-container">
                            <Image src="/assets/images/expo.png" alt="" fill />
                        </div>
                        <div className="mailing-text">
                            <p>
                                Отбираем главные события недели, а потом
                                интересно рассказываем о них в нашей рассылке.
                            </p>
                            <div className="mailing-form-container">
                                <input
                                    type="email"
                                    required
                                    placeholder="Электронная почта"
                                />
                                <button>Подписаться</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
