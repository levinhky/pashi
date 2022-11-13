import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Lazy, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/lazy";

import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "configs/api";
import { vnd } from "configs/functions";
import Loading from "components/Loading/Loading";
import Partner from "components/Partner/Partner";

function Home(props) {
    const slides = [
        {
            id: 1,
            img: "https://theme.hstatic.net/1000370235/1000472578/14/slideshow_1.jpg?v=837",
            alt: "slide_1",
        },
        {
            id: 2,
            img: "https://theme.hstatic.net/1000370235/1000472578/14/slideshow_2.jpg?v=837",
            alt: "slide_2",
        },
        {
            id: 3,
            img: "https://theme.hstatic.net/1000370235/1000472578/14/slideshow_3mb.jpg?v=837",
            alt: "slide_3",
        },
    ];

    const [arrivals, setArrivals] = useState([]);
    const [loading, setLoading] = useState(true);

    SwiperCore.use([Autoplay, Navigation]);

    useEffect(() => {
        const getArrivals = async () => {
            const res = await axiosClient.get("products", { params: { _limit: 6 } });
            setArrivals(res.data);
            setLoading(false);
        };

        getArrivals();
    }, []);

    return (
        <>
            <div className={styles["carousel"]}>
                <Swiper
                    navigation
                    modules={[Autoplay, Lazy, Navigation]}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={0}
                    slidesPerView={1}
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <img src={slide.img} alt={slide.alt} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={styles["container"]}>
                <div className={styles["model"]}>
                    <div className={styles["item"]}>
                        <Link to="/collections/2">
                            <img
                                src="https://theme.hstatic.net/1000370235/1000472578/14/xxx_4.jpg?v=837"
                                alt="tops"
                            />
                        </Link>
                        <div className={styles["caption"]}>
                            <h3>Tops</h3>
                            <p>Mua Ngay</p>
                        </div>
                    </div>
                    <div className={styles["item"]}>
                        <Link to="/collections/1">
                            <img
                                src="https://theme.hstatic.net/1000370235/1000472578/14/xxx_5.jpg?v=837"
                                alt="tops"
                            />
                        </Link>
                        <div className={styles["caption"]}>
                            <h3>Desses</h3>
                            <p>Mua Ngay</p>
                        </div>
                    </div>
                </div>

                <div className={styles["title"]}>
                    <h1 className={styles["title-heading"]}>New arrivals</h1>
                </div>

                <div className={styles["arrivals"]}>
                    {arrivals.map((arrival) => (
                        <div className={styles["item"]} key={arrival.id}>
                            <Link to={`/products/${arrival.id}`} className={styles["image"]}>
                                <img src={arrival.thumbnail} alt="product" />
                            </Link>
                            <div className={styles["info"]}>
                                <h2>
                                    <a href="/" className={styles["name"]}>
                                        {arrival.name}
                                    </a>
                                </h2>
                                <div className={styles["price"]}>
                                    <span>{vnd(arrival.price)}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {loading && <Loading />}

            <Partner />
        </>
    );
}

export default Home;