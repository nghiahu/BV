import axios from 'axios'
import { useEffect, useState } from 'react'
import { IoLockClosed, IoLogoPinterest } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import './loginAdmin.scss'
import { useNavigate } from 'react-router-dom'
import { getAllUser } from '../../../store/reducers/userReducer'
import { User } from '../../../interface'
import { FaUser } from 'react-icons/fa'
export default function LoginAdmin() {
    const [emailWarning,setEmailWarning] = useState<boolean>(true);
  const [passWarning,setPassWarning] = useState<boolean>(true);
  const [loginError,setLoginError] = useState<boolean>(true)
  const [loginUser,setLoginUser] = useState({
    email:"",
    password:""
  })
  const data:any = useSelector(state=>state)
  const handleChangeEmail=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setLoginUser(preEmail=>({
      ...preEmail,
      email:e.target.value
    }))
    {loginUser.email.length>-1?setEmailWarning(true):setEmailWarning(false)}
  }
  const handleChangePass=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setLoginUser(prePass=>({
      ...prePass,
      password:e.target.value
    }))
    {loginUser.password.length>-1?setPassWarning(true):setPassWarning(false)}
  }
  const dispatch=useDispatch()
  const login=()=>{
    if(loginUser.email && loginUser.password){
      const userLogin = data.userReducer.users.filter((item:User)=> item.email === loginUser.email && item.password === loginUser.password)
      if(userLogin.length>0 && userLogin[0].role===true){
      localStorage.setItem("id_UserLogin",JSON.stringify(userLogin[0].id))
      navigate("/admin")
      }else{
        setLoginError(false)
      }      
    }else{
      {loginUser.email?setEmailWarning(true):setEmailWarning(false)}
      {loginUser.password?setPassWarning(true):setPassWarning(false)}
    }
  }
  console.log(loginError);
  
  const navigate = useNavigate()
  useEffect(()=>{
    dispatch(getAllUser())
  },[])
  const handleReturn=()=>{
    navigate("/login")
  }
    return (
        <div className='backgroudLoginAdmin'>
            <div className='titleLogin'><IoLogoPinterest />Đăng nhập quản lý</div>
            <div className='formLoginn'>
                <div className='errorLogin'>Email hoặc mật khẩu không đúng vui lòng thử lại</div>
                <div className='deginInp'>
                    <MdEmail className='iconInp' />
                    <input className='inpLogin' type="email" placeholder='Email' onChange={handleChangeEmail} />
                    <div className={emailWarning ? "error" : "errorBlock"}>Email không được để trống</div>
                </div>
                <div className='deginInp'>
                    <IoLockClosed className='iconInp' />
                    <input className='inpLogin' type="password" placeholder='Mật khẩu' onChange={handleChangePass} />
                    <div className={passWarning ? "error" : "errorBlock"}>Mật khẩu không được để trống</div>
                </div>

                <div className='divBtnLogin'>
                    <button className='btnLogin' onClick={login}>Đăng nhập</button>
                </div>
            </div>
            <FaUser style={{position:"absolute",top:"30px",left:"30px",fontSize:"28px",color:"white"}} onClick={handleReturn}/>
        </div>
    )
}
