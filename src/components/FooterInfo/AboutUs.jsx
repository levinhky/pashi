import styles from './style.module.css';
const AboutUs = () => {
    return (
       <div className={styles['wrapper']}>
           <div className={styles["title"]}>
               <h1 className={styles["title-heading"]}>giới thiệu</h1>
           </div>
           <p>
               Pashi -
               một trong những Local Brands về thời trang dành cho giới trẻ đầu tiên tại Sài Gòn,
               với mong muốn mang đến những sản phẩm tâm huyết, chất lượng và mức giá tốt nhất dành cho các
               #CityGirls năng động-hiện đại-cá tính.
               Mỗi thiết kế của Pashi đều mang phong cách độc đáo,
               được pha trộn nhiều màu sắc và đặc biệt là kiểu dáng cực on-trend,
               đủ để bạn có thể thỏa sức mix&match cho phong cách mỗi ngày của mình thêm <strong>nổi bật và theo xu hướng.</strong>
           </p>
           <img className={styles['gioi-thieu-img']} src={'https://file.hstatic.net/1000370235/file/03_5f8ab8fade494e68bc403617caa10ef8_grande.jpg'} alt={'image'} />
       </div>
    )
}


export default AboutUs