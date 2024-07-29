import './login.scss'
import { MdEmail } from 'react-icons/md'
import { IoLockClosed, IoLogoPinterest} from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllUser} from '../../../store/reducers/userReducer'
import { useSelector } from 'react-redux'
import { User } from '../../../interface'
import { GrUserAdmin } from 'react-icons/gr'
export default function Login() {
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
      if(userLogin.length>0){
      localStorage.setItem("id_UserLogin",JSON.stringify(userLogin[0].id))
      navigate("/")
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
  const loginAdmin=()=>{
    navigate("/loginAdmin")
  }
  return (
    <div className='backgroud'>
        <div className='titleLogin'><IoLogoPinterest/>Đăng nhập</div>
      <div className='formLoginn'>
        <div className='deginInp'>
        <div className={loginError? 'errorLogin' : "errorLoginBlock"}>Email hoặc mật khẩu không đúng vui lòng thử lại</div>
              <MdEmail className='iconInp'/>
              <input className='inpLogin' type="email" placeholder='Email' onChange={handleChangeEmail}/>          
              <div className={emailWarning? "error" : "errorWarn"}>Email không được để trống</div>
          </div>
        <div className='deginInp'>
              <IoLockClosed className='iconInp'/>
              <input className='inpLogin' type="password" placeholder='Mật khẩu' onChange={handleChangePass}/>
              <div className={passWarning? "error" : "errorWarn"}>Mật khẩu không được để trống</div>
          </div>
          <div className='remember'>
            <input type="checkbox" />Ghi nhớ đăng nhập
          </div>
          <hr className='hr'/>
          <div className='navigation'>Chưa có tài khoản!
            <Link to="/register" className='link'>Đăng ký</Link>
          </div>
          <div className='nav'>Quên mật khẩu!
            <Link to="/register" className='link'>Khôi phục mật khẩu</Link>
          </div>
          <div className='divBtnLogin'>
          <button className='btnLogin' onClick={login}>Đăng nhập</button>
          </div>
      </div>
      <GrUserAdmin style={{position:"absolute",top:"20px",left:"30px",fontSize:"28px"}} onClick={loginAdmin}/>
    </div>
  )
}
