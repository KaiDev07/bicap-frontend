import Image from "next/image";

export default function Footer() {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="footer-top">
                    <div className="footer-top-flex">
                        <div className="footer-group">
                            <h3>Поддержка</h3>
                            <ul>
                                <li>Справочный центр</li>
                                <li>Информация по технике безопасности</li>
                                <li>Варианты отмены бронирования</li>
                            </ul>
                        </div>
                        <div className="footer-group">
                            <h3>Компания</h3>
                            <ul>
                                <li>О нас</li>
                                <li>Политика конфиденциальности</li>
                                <li>Блог сообщества</li>
                                <li>Условия обслуживания</li>
                            </ul>
                        </div>
                        <div className="footer-group">
                            <h3>Связаться</h3>
                            <ul>
                                <li>FAQ</li>
                                <li>Связаться</li>
                                <li>Сотрудничество</li>
                            </ul>
                        </div>
                        <div className="footer-group">
                            <h3>Социальные сети</h3>
                            <div className="social-media-container">
                                <div className="social-media-img-container">
                                    <Image
                                        fill
                                        src="/assets/images/facebook.svg"
                                        alt=""
                                    />
                                </div>
                                <div className="social-media-img-container">
                                    <Image
                                        fill
                                        src="/assets/images/twitter.svg"
                                        alt=""
                                    />
                                </div>
                                <div className="social-media-img-container">
                                    <Image
                                        fill
                                        src="/assets/images/tiktok.svg"
                                        alt=""
                                    />
                                </div>
                                <div className="social-media-img-container">
                                    <Image
                                        fill
                                        src="/assets/images/youtube.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-flex">
                        <span>© NOMAD TRAVEL 2024</span>
                        <div className="footer-bottom-img-container">
                            <Image src="/assets/images/cards.svg" alt="" fill />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
