import React from 'react'
import axios from '../api/TdtdApi';

export default function TdtdSinhVienList({renderList,submit}) {
  //---
  const handleDelete = async (param) => {
    if(window.confirm("Delete ?")){
        await axios.delete("TdtdSinhVien/" + param.id);
    }
    submit();
}
//---
  let element = renderList.map((TdtdSinhVien)=>{
    return(
      <tr key={TdtdSinhVien.id}>
          <td>{TdtdSinhVien.MaSV}</td>
          <td>{TdtdSinhVien.HoSV}</td>
          <td>{TdtdSinhVien.TenSV}</td>
          <td>{TdtdSinhVien.Phai ? "Nam" : "Nữ"}</td>
          <td>{TdtdSinhVien.NgaySinh}</td>
          <td>{TdtdSinhVien.NoiSinh}</td>
          <td>{TdtdSinhVien.MaKH}</td>
          <td>{TdtdSinhVien.HocBong ? "Có" : "Không"}</td>
          <td>{TdtdSinhVien.DiemTrungBinh}</td>
          <td>
            <button className='btn btn-outline-warning me-1'>Edit</button>
            <button className='btn btn-outline-danger' onClick={()=>{handleDelete(TdtdSinhVien)}}>Delete</button>
          </td>
      </tr>
)
  })
  return (
    <div className='row'>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Mã Sinh Viên</th>
                    <th>Họ Sinh Viên</th>
                    <th>Tên Sinh Viên</th>
                    <th>Phái</th>
                    <th>Ngày Sinh</th>
                    <th>Nơi Sinh</th>
                    <th>Mã Khoa</th>
                    <th>Học Bổng</th>
                    <th>Điểm Trung Bình</th>
                </tr>
            </thead>
            <tbody>
                {element}
            </tbody>
        </table>
    </div>
  )
}
