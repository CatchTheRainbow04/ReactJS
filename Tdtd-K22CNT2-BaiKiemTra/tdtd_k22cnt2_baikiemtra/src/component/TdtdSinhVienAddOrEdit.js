import axios from '../api/TdtdApi';
import React, { useEffect, useState } from 'react';

export default function TdtdSinhVienAddOrEdit({ addSinhVien , submit}) {
    const [maSV, setMaSV] = useState();
    const [hoSV, setHoSV] = useState();
    const [tenSV, setTenSV] = useState();
    const [phai, setPhai] = useState();
    const [ngaySinh, setNgaySinh] = useState();
    const [noiSinh, setNoiSinh] = useState();
    const [maKH, setMaKH] = useState();
    const [hocBong, setHocBong] = useState();
    const [diemTrungBinh, setDiemTrungBinh] = useState();

    useEffect(() => {
        setMaSV(addSinhVien.MaSV);
        setHoSV(addSinhVien.HoSV);
        setTenSV(addSinhVien.TenSV);
        setPhai(addSinhVien.Phai);
        setNgaySinh(addSinhVien.NgaySinh);
        setNoiSinh(addSinhVien.NoiSinh);
        setMaKH(addSinhVien.MaKH);
        setHocBong(addSinhVien.HocBong);
        setDiemTrungBinh(addSinhVien.DiemTrungBinh);
    }, [addSinhVien]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let obj = {
            MaSV: maSV,
            HoSV: hoSV,
            TenSV: tenSV,
            Phai: phai === 'true',  // Chuyển đổi giá trị phai thành boolean
            NgaySinh: ngaySinh,
            NoiSinh: noiSinh,
            MaKH: maKH,
            HocBong: hocBong === 'true',
            DiemTrungBinh: diemTrungBinh
        }
        await axios.post("TdtdSinhVien", obj);
        submit();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="MaSV">
                        Mã Sinh Viên
                    </span>
                    <input
                        name="MaSV"
                        type="number"
                        value={maSV}
                        onChange={(e) => setMaSV(e.target.value)}
                        className="form-control"
                        placeholder="Nhập vào mã sinh viên"
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="HoSV">
                        Họ Sinh Viên
                    </span>
                    <input
                        name="HoSV"
                        type="text"
                        value={hoSV}
                        onChange={(e) => setHoSV(e.target.value)}
                        className="form-control"
                        placeholder="Nhập vào họ sinh viên"
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="TenSV">
                        Tên Sinh Viên
                    </span>
                    <input
                        name="TenSV"
                        type="text"
                        value={tenSV}
                        onChange={(e) => setTenSV(e.target.value)}
                        className="form-control"
                        placeholder="Nhập vào tên sinh viên"
                    />
                </div>
                <>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="Phai"
                            id="Phai"
                            value="true"
                            checked={phai === 'true'}
                            onChange={(e) => setPhai(e.target.value)}
                        />
                        <label className="form-check-label">
                            Nam
                        </label>
                    </div>
                    <div className="form-check mb-3">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="Phai"
                            id="Phai"
                            value="false"
                            checked={phai === 'false'}
                            onChange={(e) => setPhai(e.target.value)}
                        />
                        <label className="form-check-label">
                            Nữ
                        </label>
                    </div>
                </>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="NgaySinh">
                        Ngày Sinh
                    </span>
                    <input
                        name="NgaySinh"
                        type="date"
                        value={ngaySinh}
                        onChange={(e) => setNgaySinh(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="NoiSinh">
                        Nơi Sinh
                    </span>
                    <input
                        name="NoiSinh"
                        type="text"
                        value={noiSinh}
                        onChange={(e) => setNoiSinh(e.target.value)}
                        className="form-control"
                        placeholder="Nhập vào nơi sinh"
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="MaKH">
                        Mã Khoa
                    </span>
                    <input
                        name="MaKH"
                        type="text"
                        value={maKH}
                        onChange={(e) => setMaKH(e.target.value)}
                        className="form-control"
                        placeholder="Nhập vào mã khoa"
                    />
                </div>
                <h3>Học Bổng</h3>
                <>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="HocBong"
                            id="HocBong"
                            value="false"
                            checked={hocBong === 'true'}
                            onChange={(e) => { setHocBong(e.target.value) }}
                        />
                        <label className="form-check-label">
                            Có
                        </label>
                    </div>
                    <div className="form-check mb-3">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="HocBong"
                            id="HocBong"
                            value="false"
                            checked={hocBong === 'false'}
                            onChange={(e) => { setHocBong(e.target.value) }}
                        />
                        <label className="form-check-label">
                            Không
                        </label>
                    </div>
                </>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="DiemTrungBinh">
                        Điểm Trung Bình
                    </span>
                    <input
                        name="DiemTrungBinh"
                        type="number"
                        value={diemTrungBinh}
                        onChange={(e) => setDiemTrungBinh(e.target.value)}
                        className="form-control"
                        placeholder="Nhập vào điểm trung bình"
                    />
                </div>
                <button type="submit" className='btn btn-outline-dark mb-4'>Add</button>
            </form>
        </div>
    )
}
