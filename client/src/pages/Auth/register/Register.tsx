import { FaUserAlt } from 'react-icons/fa';
import './register.scss'
import { IoLockClosed, IoLockClosedOutline, IoLogoPinterest } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import {User} from '../../../interface'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {addNewUser} from "../../../store/reducers/userReducer"
export default function Register() {
    const [confimPass,setConfimPass] = useState<boolean>(true)
    const [ResPass,setResPass] = useState<string>("")
    const [emailWarning,setEmailWarning] = useState<boolean>(true)
    const [userNameWarning,setUserNameWarning] = useState<boolean>(true)
    const [fullNameWarning,setFullNameWarning] = useState<boolean>(true)
    const [passWarning,setPassWarning] = useState<boolean>(true)
    const [rePassWarning,setRePassWarning] = useState<boolean>(true)
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
    const [isChecked,setIsChecked] = useState<boolean>(false)
    const chechboxRules=(e:React.ChangeEvent<HTMLInputElement>)=>{
        {isChecked? setIsChecked(false) : setIsChecked(true)}
    }
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
        {newUser.password===ResPass? setConfimPass(true):setConfimPass(false)}
      }
    const changeRepPass=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setResPass(e.target.value)
        {ResPass.length > -1?setRePassWarning(true) : setRePassWarning(false)}
        {newUser.password===ResPass? setConfimPass(true):setConfimPass(false)}
      }
      const dispatch = useDispatch();
      const navigate = useNavigate()

    const addUser=()=>{
        if(newUser.email && newUser.username && newUser.fullname && newUser.password && ResPass && newUser.password===ResPass){
        dispatch(addNewUser(newUser))
        navigate("/login")
        }else{
        {newUser.email? setEmailWarning(true) : setEmailWarning(false)}
        {newUser.username? setUserNameWarning(true) : setUserNameWarning(false)}
        {newUser.fullname? setFullNameWarning(true) : setFullNameWarning(false)}
        {newUser.password? setPassWarning(true) : setPassWarning(false)}
        {ResPass? setRePassWarning(true) : setRePassWarning(false)}
        {newUser.password===ResPass? setRePassWarning(true):setConfimPass(false )}
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
      console.log(isChecked)
  return (
    <div className='background'>
        <div className='leftR'>
            <div className='titleRegister'><IoLogoPinterest className="icon"/>Đăng ký</div>
            <div className='formRegister'>
                <div className='deginInp'>
                    <MdEmail className='iconInp'/>
                    <input className='inpRegister' type="email" placeholder='Email' onChange={changeEmail}/>
                    <div className={emailWarning? "error" : " errorBlock"}>Email không được để trống</div>
                </div>
                <div className='deginInp'>
                    <FaUserAlt className='iconInp'/>
                    <input className='inpRegister' type="text" placeholder='Tên người dùng' onChange={changeUserName}/>
                    <div className={userNameWarning? "error" : " errorBlock"}>Tên người dùng không được để trống</div>
                </div>
                <div className='deginInp'>
                    <FaRegUser className='iconInp'/>
                    <input className='inpRegister' type="text" placeholder='Họ tên' onChange={changeFullName}/>
                    <div className={fullNameWarning? "error" : " errorBlock"}>Họ tên không được để trống</div>
                </div>
                <div className='deginInp'>
                    <IoLockClosed className='iconInp'/>
                    <input className='inpRegister' type="password" placeholder='Mật khẩu' onChange={changePass}/>
                    <div className={passWarning? "error" : " errorBlock"}>Mật khẩu không được để trống</div>
                </div>
                <div className='deginInp'>
                    <IoLockClosedOutline className='iconInp'/>
                    <input className='inpRegister' type="password" placeholder='Nhập lại mật khẩu' onChange={changeRepPass}/>
                    <div className={rePassWarning? "error" : " errorBlock"}>{confimPass?"Mật khẩu không được để trống" : "Mật khẩu nhập lại không đúng"}</div>
                </div>
                <div className='checkRegister'>
                    <input type="checkbox"  checked={isChecked} onChange={chechboxRules}/> Tôi đồng ý với các điều khoản sử dụng
                    <hr className='hr'/>
                    <div>Đã có tài khoản ! <Link to="/login">Đăng nhập</Link> </div>
                </div>
                <div className='divBtnRegister'>
                <button className={isChecked? "btnRegister" : "disabled"}  onClick={addUser}  disabled={!isChecked} >Đăng ký</button>
                </div>
            </div>
        </div>

        <div className='rightR'>
            <div className="titleWed"><IoLogoPinterest/>Pinyin</div>
            <div className='introduceWed'>Nền tảng nội thất đông nam á</div>
            <div className='sloganWed'>Hãy để chúng tôi thiết kế căn nhà của bạn</div>
        </div>
    </div>
  )
}
