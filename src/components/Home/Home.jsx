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
            img: "https://firebasestorage.googleapis.com/v0/b/pashi-admin.appspot.com/o/slide1.jpg?alt=media&token=1c82a289-873c-456e-9013-1b4d77c8052c",
            alt: "slide_1",
        },
        {
            id: 2,
            img: "https://firebasestorage.googleapis.com/v0/b/pashi-admin.appspot.com/o/slide2.jpg?alt=media&token=3fa20c0c-e4f4-4707-9748-4606165872c9",
            alt: "slide_2",
        },
        {
            id: 3,
            img: "https://firebasestorage.googleapis.com/v0/b/pashi-admin.appspot.com/o/slide3.jpg?alt=media&token=cc772784-2f94-416c-8f7d-64949fe74d8e",
            alt: "slide_3",
        },
    ];

    const [arrivals, setArrivals] = useState([]);
    const [loading, setLoading] = useState(true);

    SwiperCore.use([Autoplay, Navigation]);

    useEffect(() => {
        const getArrivals = async () => {
            const res = await axiosClient.get("products", { params: { limit: 6 } });
            setArrivals(res);
            console.log(res)
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
                                src="https://firebasestorage.googleapis.com/v0/b/pashi-admin.appspot.com/o/slide4.jpg?alt=media&token=f5b9039c-6d3e-4abd-9d63-813efd91ac01"
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
                                src="https://firebasestorage.googleapis.com/v0/b/pashi-admin.appspot.com/o/slide5.jpg?alt=media&token=58c87724-8994-4fbf-9272-99b5b3e0d9a1"
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
                        <div className={styles["item"]} key={arrival._id}>
                            {/*<Link to={`/products/${arrival.id}`} className={styles["image"]}>*/}
                            {/*    <img src={arrival.thumbnails[0].thumbnail} alt="product" />*/}
                            {/*</Link>*/}
                            <Link to={`/products/detail/?slug=${arrival.slug}`} className={styles["image"]}>
                                <img src={arrival.thumbnails[0].thumbnail} alt="product" />
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