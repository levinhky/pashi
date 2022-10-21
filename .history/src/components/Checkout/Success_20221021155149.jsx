import React from "react";

const Success = () => {
  return (
    <div className="flex flex-row-reverse">
      <form
        className="flex flex-col flex-auto main"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div className="pb-4 header z-1">
          <Link to="/" className="text-5xl font-medium">
            Pashi
          </Link>
          <ul className="flex items-center mt-4">
            <li className="inline-block text-xl text-[#338dbc]">
              <Link to="/cart">Giỏ hàng</Link>
            </li>
            <span className="mx-2">
              <AiOutlineRight size="14"></AiOutlineRight>
            </span>
            <li className="inline-block text-xl text-[#4d4d4d]">
              Thông tin giao hàng
            </li>
            <span className="mx-2">
              <AiOutlineRight size="14"></AiOutlineRight>
            </span>
            <li className="inline-block text-xl text-[#999999]">
              Phương thức thanh toán
            </li>
          </ul>
        </div>
        <div className="pb-16 content">
          <div className="relative z-10">
            <h2 className="mb-4 text-[#333] text-3xl">Thông tin giao hàng</h2>
            <div className="flex items-center mb-4 content-text">
              <p>
                Bạn đã có tài khoản?{" "}
                <Link to="" className="text-[#338dbc]">
                  Đăng nhập
                </Link>
              </p>
            </div>
            <div className="enter">
              <Input
                name="username"
                id="username"
                placeholder="Họ và tên"
                control={control}
                type="text"
              ></Input>
              {errors.username && (
                <p className="mb-4 text-2xl text-red-500">
                  {errors.username.message}
                </p>
              )}
              <div className="grid grid-cols-[300px_minmax(100px,_1fr)_auto] gap-x-2">
                <div>
                  <Input
                    name="email"
                    id="email"
                    placeholder="Email"
                    control={control}
                    type="text"
                  ></Input>
                  {errors.email && (
                    <p className="mb-4 text-2xl text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Số điện thoại"
                    control={control}
                    type="text"
                  ></Input>
                  {errors.phoneNumber && (
                    <p className="mb-4 text-2xl text-red-500">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>
              </div>
              <Input
                name="address"
                id="address"
                placeholder="Địa chỉ"
                control={control}
                type="text"
              ></Input>
              {errors.address && (
                <p className="mb-4 text-2xl text-red-500">
                  {errors.address.message}
                </p>
              )}
              <div className="grid grid-cols-3 gap-x-2 select">
                <div>
                  <Select
                    control={control}
                    setValue={setValue}
                    name="province"
                    data={dataSelect}
                    selectLabel="Chọn tỉnh / thành"
                  ></Select>
                  {errors.province && (
                    <p className="mb-4 text-2xl text-red-500">
                      {errors.province.message}
                    </p>
                  )}
                </div>
                <div>
                  <Select
                    control={control}
                    setValue={setValue}
                    name="district"
                    data={dataSelect}
                    selectLabel="Chọn quận / huyện"
                  ></Select>
                  {errors.district && (
                    <p className="mb-4 text-2xl text-red-500">
                      {errors.district.message}
                    </p>
                  )}
                </div>
                <div>
                  <Select
                    control={control}
                    setValue={setValue}
                    name="wards"
                    data={dataSelect}
                    selectLabel="Chọn phường / xã"
                  ></Select>
                  {errors.wards && (
                    <p className="mb-4 text-2xl text-red-500">
                      {errors.wards.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between step">
          <Link to="/cart" className="text-[#338dbc] hover:brightness-125">
            Giỏ hàng
          </Link>
          {/* <form action=""></form> */}
          <button className="text-white font-medium transition-all hover:brightness-125 bg-[#338dbc] text-center rounded-lg px-3 py-6">
            Hoàn tất đơn hàng
          </button>
        </div>
      </form>
    </div>
  );
};

export default Success;
