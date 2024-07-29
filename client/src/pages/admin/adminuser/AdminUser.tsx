import { useEffect, useState } from 'react'
import './adminUser.scss'
import { useSelector } from 'react-redux'
import {   changeStatus, getAllUser, open } from '../../../store/reducers/userReducer'
import {User} from '../../../interface'
import { useDispatch } from 'react-redux'
import { MdAdd } from 'react-icons/md'
import AddUserAd from './addUserAd/AddUserAd'
import { FaUserLock } from 'react-icons/fa'
import 'sweetalert'
export default function AdminUser() {
  const data:any = useSelector(state=>state);
  const dispatch = useDispatch()
  const changeStatusUser = (user:User) =>{
    swal({
      title: user.status==true? "Bạn có chắc muốn khóa tài!": "Bạn có chắc muốn mở tài!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("", {
          icon: "success",
        });dispatch(changeStatus(user))
      } else {
        swal("",{
          icon:"error"
        });
      }
    });
    
  }
  const handleCickClock=()=>{
    dispatch(open(data))
  }
  useEffect(()=>{
    dispatch(getAllUser());
    console.log(data);
    
  },[])
  return (
    <>
    {data.userReducer.status?
    <div className='adUser'>
      <div className='adUserTop'>
      <div className='addNewUserad' onClick={handleCickClock}>
        <MdAdd />
        <>Thêm người dùng</>
      </div>
      <div className='sortInp'>
        <div className='titleSort'>Sắp xếp:</div>
        <select className='select'>
          <option value="id">ID</option>
          <option value="name">Tên</option>
        </select>
        </div>
        </div>
<div className='fromUser'>
      <table className='tableUser'>
        <thead>
          <tr>
            <th>STT</th>
            <th>Email</th>
            <th>Tên đăng nhập</th>
            <th>Role</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.userReducer.users.map((user:User,index:number)=>{
            return <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.email}</td>
              <td className='nameUserAd'>{user.username}<FaUserLock className={user.role? "nameUserAdIcon" : (user.status? "nameUserAdIcon" : "nameUserAdIconLock")}/></td>
              <td>{user.role? "Admin" : "User"}</td>
              <td>{user.created_at}</td>
              <td>
                <div className='action'>
                  <button className='btnview'>View</button>
                  {user.role? 
                  <button className='btnact'>Active</button> : 
                  <div className={user.status? "btnChangeStatus" : "btnChangeStatustwo"} onClick={()=>changeStatusUser(user)}><div className='arow'></div></div>}
                </div>
              </td>
            </tr>
          })}
        </tbody>
    </table>
    </div>
    </div>
  : <AddUserAd></AddUserAd>}
    </>
  )
}
