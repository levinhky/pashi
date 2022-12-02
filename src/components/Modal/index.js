import styles from './Modal.module.css';
import {useEffect, useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import {vnd} from "../../configs/functions";
import {Link} from "react-router-dom";
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const Modal = ({isModal, setIsModal, productDetail}) => {
    const [images, setImages] = useState([]);
    const [relativeProduct, setRelativeProduct] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [sizeValue, setSizeValue] = useState("");
    const [sizeS, setSizeS] = useState("");
    const [sizeM, setSizeM] = useState("");
    const [sizeL, setSizeL] = useState("");
    useEffect(() => {
        if (productDetail._id) {
            productDetail.size = '';
            productDetail.sizeArr = [];
            setImages(productDetail?.thumbnails)
            setSizeS(productDetail?.sizes[0]?.size);
            setSizeM(productDetail?.sizes[1]?.size);
            setSizeL(productDetail?.sizes[2]?.size);
        }
    }, [productDetail]);

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                <button onClick={closeModal}>close</button>
                <div>I am a modal</div>
                <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
            </Modal>
            {/*{isModal && <div className={styles["overlay"]}>*/}
            {/*    <div className={styles['content']}>*/}
            {/*        <div className={'flex'}>*/}
            {/*            <div className={'w-2/5'}>*/}
            {/*                <div className={styles["image"]}>*/}
            {/*                    <Carousel thumbWidth={40}>*/}
            {/*                        {images.map((image, i) => (*/}
            {/*                            <div key={i}>*/}
            {/*                                <img src={image.thumbnail} alt={productDetail.name}/>*/}
            {/*                            </div>*/}
            {/*                        ))}*/}
            {/*                    </Carousel>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className={'w-3/5 ml-5'}>*/}
            {/*                <div className={styles["info"]}>*/}
            {/*                    <h2>{productDetail.name}</h2>*/}
            {/*                    <div className={styles["price"]}>{vnd(productDetail.price)}</div>*/}
            {/*                    <div className={styles["status"]}>*/}
            {/*                                <span*/}
            {/*                                    className={'text-2xl font-medium'}>Trạng thái</span> : <span>{productDetail.quantity === 0 ? 'Hết hàng' : 'Còn hàng'}</span>*/}
            {/*                    </div>*/}
            {/*                    <div className={styles["desc"]}>*/}
            {/*                                <span*/}
            {/*                                    className={'font-normal font-sans'}>Chưa có mô tả cho sản phẩm này!</span>*/}
            {/*                    </div>*/}
            {/*                    <div><span className={'text-2xl font-medium'}>Mã sản phẩm</span>: <span*/}
            {/*                        className={'text-1xl font-light'}>{productDetail.sku}</span></div>*/}
            {/*                </div>*/}
            {/*                <div className={styles['action']}>*/}
            {/*                    <div>*/}
            {/*                        <label className="block text-gray-700 text-1xl mt-1 mb-2"*/}
            {/*                               htmlFor="quantity">*/}
            {/*                            Số lượng*/}
            {/*                        </label>*/}
            {/*                        <input*/}
            {/*                            className="appearance-none border rounded w-20 text-center py-2 px-3 text-gray-700 leading-tight focus:outline-none"*/}
            {/*                            id="quantity" type="text"*/}
            {/*                            value={quantity}*/}
            {/*                            onChange={(e) => setQuantity(e.target.value)}/>*/}
            {/*                    </div>*/}
            {/*                    <div>*/}
            {/*                        <Link*/}
            {/*                            to={`/products/detail/?slug=${productDetail.slug}`}>Xem chi tiết</Link>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>}*/}
        </>
    )
}

export default Modal;