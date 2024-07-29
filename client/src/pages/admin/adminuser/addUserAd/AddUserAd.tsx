import React, { useEffect, useState } from 'react'
import './addUserAd.scss'
import { MdEmail } from 'react-icons/md'
import { FaRegUser, FaUserAlt, FaUserEdit } from 'react-icons/fa'
import { IoLockClosed, IoLockClosedOutline } from 'react-icons/io5'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { addNewUser, open } from '../../../../store/reducers/userReducer'
import { User } from '../../../../interface'
export default function AddUserAd() {
    const dispatch = useDispatch()
    const data:any = useSelector(state=>state);
    const handleClick = () =>{
        dispatch(open(data))
    }
    const [ResPass,setResPass] = useState<string>("")
    const [emailWarning,setEmailWarning] = useState<boolean>(true)
    const [userNameWarning,setUserNameWarning] = useState<boolean>(true)
    const [fullNameWarning,setFullNameWarning] = useState<boolean>(true)
    const [passWarning,setPassWarning] = useState<boolean>(true)
    const [rePassWarning,setRePassWarning] = useState<boolean>(true)
    const [roleWarning,setRoleWarning] = useState<boolean>(true)
    const [newUser, setNewUser] = useState<User>({
        username: "",
        email: "",
        fullname: "",
        status: true,
        password: "",
        role: false,
        avatar: "",
        phone: "",
        address: "",
        created_at: '',
        updated_at: '',
        cart:[]
    });
    const changeEmail=(e:React.ChangeEvent<HTMLInputElement>)=>{
        {newUser.email.length > -1? setEmailWarning(true) : setEmailWarning(false)}
      setNewUser(preEmail => ({
          ...preEmail,
          email:e.target.value
      }))
    }
    const changeUserName=(e:React.ChangeEvent<HTMLInputElement>)=>{
      setNewUser(preUserName => ({
          ...preUserName,
          username:e.target.value
      }))
      {newUser.username.length > -1? setUserNameWarning(true) : setUserNameWarning(false)}
    }
    const changeFullName=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setNewUser(preFullName => ({
            ...preFullName,
            fullname:e.target.value
        }))
        {newUser.fullname.length > -1? setFullNameWarning(true) : setFullNameWarning(false)}
      }
    const changePass=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setNewUser(prePass => ({
            ...prePass,
            password:e.target.value
        }))
        {newUser.password.length > -1? setPassWarning(true) : setPassWarning(false)}
      }
    const changeRepPass=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setResPass(e.target.value)
        {ResPass.length > -1?setRePassWarning(true) : setRePassWarning(false)}
      }
      const changeRole = (e: React.ChangeEvent<HTMLSelectElement>) => {
        {e.target.value === "1"? setNewUser(preRole => ({...preRole,role:false})) : setNewUser(preRole => ({...preRole,role:true})) }
    };
      const addUser=()=>{
        if(newUser.email && newUser.username && newUser.fullname && newUser.password && ResPass){
            dispatch(addNewUser(newUser))
                window.location.reload()
            }else{
                {newUser.email? setEmailWarning(true) : setEmailWarning(false)}
                {newUser.username? setUserNameWarning(true) : setUserNameWarning(false)}
                {newUser.fullname? setFullNameWarning(true) : setFullNameWarning(false)}
                {newUser.password? setPassWarning(true) : setPassWarning(false)}
                {ResPass? setRePassWarning(true) : setRePassWarning(false)}
            }
        }
    useEffect(() => {
        const date = new Date();
        setNewUser(prevTime => ({
            ...prevTime,
            created_at: date.toLocaleDateString('vi-VN'),
            updated_at: date.toLocaleDateString('vi-VN')
          }));
      }, []);
      
  return (
    <>
    <div className='backgroudAddUserAD'>
        <div className='formAddUserAD'>
            <div>
            <div className='addUserAD'>
                <MdEmail className='iconAddUserAD'/>
                <input type="email" className='inpAddUserAD' placeholder='Email' onChange={changeEmail}/>
            </div>
            <div className={emailWarning? "error" : " errorBlock"}>Email không được để trống</div>
            </div>
            <div>
            <div className='addUserAD'>
                <FaUserAlt className='iconAddUserAD'/>
                <input type="text" className='inpAddUserAD'placeholder='Tên đăng nhập'onChange={changeUserName}/>
            </div>
                <div className={userNameWarning? "error" : " errorBlock"}>Tên đăng nhập không được để trống</div>
            </div>
            <div>
            <div className='addUserAD'>
                <FaRegUser className='iconAddUserAD'/>
                <input type="text" className='inpAddUserAD' placeholder='Họ tên'onChange={changeFullName}/>
            </div>
                <div className={fullNameWarning? "error" : " errorBlock"}>Họ tên không được để trống</div>
            </div>
            <div>
            <div className='addUserAD'>
                <IoLockClosed className='iconAddUserAD'/>
                <input type="password" className='inpAddUserAD' placeholder='Mật khẩu'onChange={changePass}/>
            </div>
                <div className={passWarning? "error" : " errorBlock"}>Mật khẩu không được để trống</div>
            </div>
            <div>
            <div className='addUserAD'>
                <IoLockClosedOutline className='iconAddUserAD'/>
                <input type="password" className='inpAddUserAD'placeholder='Nhập lại mật khẩu'onChange={changeRepPass}/>
            </div>
                <div className={rePassWarning? "error" : " errorBlock"}>Mật khẩu không được để trống</div>
            </div>
            <select className='selAddUserAD' onChange={changeRole}>
                <option value="1">user</option>
                <option value="2">admin</option>
            </select>
            <button className='btnAddUserAD' onClick={addUser}>Đăng ký</button>
        </div>
        <FaUserEdit className='iconAddUserADFrom'/>
    </div>

    <FaArrowLeftLong className='outAddUserAD' onClick={handleClick}/>
    </>
  )
}
