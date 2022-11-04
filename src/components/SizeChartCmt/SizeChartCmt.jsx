import styles from "./SizeChartCmt.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/lazy";

function SizeChartcmt() {
  return (
    <div  className={styles["tab-product-detail"]}>
      <ul  className={styles["nav dec-and-review-menu"]} role="tablist">
        <li role="presentation"  className={styles["active"]}>
          <a href="#tab1" aria-controls="tab1" role="tab" data-toggle="tab">Hướng dẫn chọn size</a>
        </li>
        <li role="presentation">
          <a href="#tab3" aria-controls="tab3" role="tab" data-toggle="tab">Bình luận</a>
        </li>
      </ul>

      <div  className={styles["tab content product-review-content-tab"]}>
        <div role="tabpanel"  className={styles["tab-pane active"]} id="tab1">
          <div  className={styles["desc-tab"]}>
                <table>
                  <thead>
                  {/* style="text-align:center" */}
                    <tr className={styles["thead1"]}>

                      <th>Size</th>
                      <th>Chiều cao</th>
                      <th>Cân nặng</th>
                      <th>Ngực</th>
                      <th>Eo</th>
                      <th>Mông</th>

                    </tr>

                  </thead>
                  <tbody>
                  {/*style="background-color:#eee; text-align:center */}
                    <tr className={styles["tbody-1"]} >

                      <td>S</td>
                      <td>150 - 155</td>
                      <td>-</td>
                      <td>78 - 81</td>
                      <td>60 - 62</td>
                      <td>86 - 88</td>

                    </tr>
                    {/* style="text-align:center" */}
                    <tr >

                      <td>M</td>
                      <td>150 - 160</td>
                      <td>50 - 52</td>
                      <td>82 - 84</td>
                      <td>64 - 66</td>
                      <td>90 - 92</td>
                    </tr>
                    {/* style="background-color:#eee; text-align:center" */}
                    <tr className={styles["tbody1"]}>

                      <td>L</td>
                      <td>160 - 164</td>
                      <td>-</td>
                      <td>86 - 88</td>
                      <td>68 - 70</td>
                      <td>94 - 96</td>

                    </tr>
                    {/* style="text-align:center" */}
                    <tr >

                      <td>FREESIZE</td>
                      <td>-</td>
                      <td>&lt;60</td>
                      <td>78 - 95</td>
                      <td>58 - 73</td>
                      <td>86 - 98</td>
                    </tr>
                  </tbody>
                </table>

          </div>
        </div>
        <div role="tabpanel"  className={styles["tab-pane"]} id="tab3">
          <div id="binhluan">
            <div  className={styles["product-comment-fb"]}>
              <div  className={styles["fb-comments"]} data-href="https://shebyshj.com/products/melisa-dress" data-numposts="5" width="100%" data-colorscheme="light">
                <p>name: kiet</p>
                
                <p>nd: ccasdwqdqwd</p>
              </div>
            </div>
            <div id="fb-root"></div>

          </div>
        </div>
      </div>
    </div>


  );
}
export default SizeChartcmt;
