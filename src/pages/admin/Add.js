import axiosClient from 'configs/api';
import React from 'react';
import './admin.css';

function Add(props) {
  const [name, setName] = React.useState(null);
  const [price, setPrice] = React.useState(null);
  const [thumbnail, setThumbnail] = React.useState(null);
  const [categoryId, setCategoryId] = React.useState(null);
  const [catList, setCatList] = React.useState([]);

  React.useEffect(() => {
    const getCatList = async () => {
      const data = await axiosClient.get('categories');
      setCatList(data);
    }

    getCatList();
  }, []);

  return (
    <div className='my-wrapper'>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Tên sản phẩm</label>
          <input type="text" className="form-control" id="name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Giá tiền</label>
          <input type="text" className="form-control" id="price" onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Hình ảnh</label>
          <input type="text" className="form-control" id="price" onChange={(e) => setThumbnail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="cateogory_id" className="form-label">Loại sản phẩm</label>
          <select id="cateogory_id" className="form-select" onChange={(e) => setCategoryId(e.target.value)}>
            <option>Chọn loại sản phẩm</option>
            {catList.map(cat => (<option key={cat.id} value={cat.id} >{cat.name}</option>))}
          </select>
        </div>
        <button type="button" className="btn btn-primary" onClick={async () => {
          const dl = {
            name,
            price: +price,
            thumbnail,
            category_id: +categoryId
          }
          const res = await fetch(`http://localhost:3001/api/products`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(dl)
          })
          return res.json();
        }}>Thêm</button>
      </form>
    </div>
  );
}

export default Add;