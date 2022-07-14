import React, { useEffect, useState } from "react";
import * as todo from "../../service/action";
import { all } from "../../service/action";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { bookingCreator } from "../../redux";
import { State } from "../../redux/reducer";

import { SearchOutlined, FilterOutlined } from "@ant-design/icons";

export const DanhSachVe = () => {
    const dispatch = useDispatch();
    const { LoadDuLieu } = bindActionCreators(bookingCreator, dispatch);

    useEffect(() => {LoadDuLieu();}, []);

    const { listBooking } = useSelector((state: State) => state.booking);
    const [listVe, setlistVe] = useState([{
        BookingCode: '',
        NgaySuDung: '',
        NgayXuatVe: '',
        TenSuKien: '',
        SoVe: '',
        CongCheckIn: '',
        TinhTrang: '',
    }]);

    useEffect(() => { setlistVe(listBooking);}, [listBooking])
    return (
        <div className="DanhSach">
            <div className="DanhSach-tk">
                <h2>Danh Sách Vé</h2>
                <div className="DanhSach-Ve">
                    <div className="search">
                        <input type="text" placeholder='Search' />
                        <a href="/"><SearchOutlined /></a>
                    </div>
                    <div className="DanhSach-locVe">
                        <div className="DanhSach-locVe1"><button className="LocVe" ><FilterOutlined /> Lọc Vé</button></div>
                        <div className="DanhSach-locVe1"><button className="XuatFile" > Xuất file(.csv)</button></div>
                    </div>
                </div>

                <table className="table-danhsachve">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Booking code</th>
                            <th>Số vé</th>
                            <th>Tên sự kiện</th>
                            <th>Tình trạng sử dụng</th>
                            <th>Ngày sử dụng</th>
                            <th>Ngày xuất vé</th>
                            <th>Cổng check-in</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listVe.map((veItem, index) => (
                            <tr>
                                <td className="">{index + 1}</td>
                                <td className="">{veItem.BookingCode}</td>
                                <td className="">{veItem.SoVe}</td>
                                <td className="">{veItem.TenSuKien}</td>
                                <td className="">
                                    {(() => {
                                        if (veItem.TinhTrang === 'Hết hạn') {
                                            return (
                                                <div>Hết hạn</div>
                                            )
                                        } else if (veItem.TinhTrang === 'Chưa sử dụng') {
                                            return (
                                                <div>Chưa sử dụng</div>
                                            )

                                        } else if (veItem.TinhTrang === 'Đã sử dụng') {
                                            return (
                                                <div>Đã sử dụng</div>
                                            )
                                        }
                                    })()}
                                </td>
                                <td className="">{veItem.NgaySuDung}</td>
                                <td className="">{veItem.NgayXuatVe}</td>
                                <td className="">{veItem.CongCheckIn}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}