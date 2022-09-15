import axiosClient from 'configs/api';
import React from 'react';
import './admin.css';

function List(props) {
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    const getList = async (req, res, next) => {
      const data = await axiosClient.get("products");
      setList(data);
    }

    getList();
  }, []);

  return (
    <div className="my-wrapper">
      <h1>Danh sách sản phẩm</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">thumbnail</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map(item => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <img className="my-img" src={item.thumbnail} alt={item.name} />
              </td>
              <td>
                <button type="button" className="btn btn-danger" onClick={() => {
                  axiosClient.delete(`products/${item.id}`)
                }}>Xóa</button>
                <button type="button" className="btn btn-success my-button">Sửa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;