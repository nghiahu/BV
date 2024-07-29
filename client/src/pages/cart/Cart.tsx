import React, { useState, useEffect } from 'react'
import './cart.scss'
import { LuSearch, LuUser2 } from 'react-icons/lu'
import { FaRegHeart } from 'react-icons/fa'
import { IoIosArrowDown, IoLogoPinterest } from 'react-icons/io'
import { TbShoppingBagPlus } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../../store/reducers/productReducer'
import { Product, User } from '../../interface'
import { FaCartFlatbed } from 'react-icons/fa6'
import { MdCurrencyExchange } from 'react-icons/md'
import { IoShieldCheckmarkOutline } from 'react-icons/io5'
import { FiPhoneCall } from 'react-icons/fi'
import Footer from '../footer/Footer'
import { useNavigate } from 'react-router-dom'
import { getAllUser } from '../../store/reducers/userReducer'

export default function Cart() {
    const [dropdownVisible, setDropdownVisible] = useState<boolean>(false)
    const idUseLogin = JSON.parse(localStorage.getItem("id_UserLogin") || 'null');
    const data:any = useSelector(state => state)
    const userLogin = data.userReducer.users.find((item: User) => item.id === idUseLogin)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProduct())
        dispatch(getAllUser())
    }, [])

    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    const navigate = useNavigate()

    const handleDetail = (product: Product) => {
        navigate('detail', { state: { product } });
    };

    const handleDropdownToggle = () => {
        setDropdownVisible(!dropdownVisible)
    }
    const handelDrop=()=>{
        navigate("/login")
    }
    const handleRegister=()=>{
        navigate("/register")
    }
    
    const handleLogOut = () => {
        localStorage.clear();
        navigate("/")
    }
    const handleLeCart=()=>{
        navigate("/cart")
    }
    const returnHome=()=>{
        navigate("/")
    }
    console.log(userLogin);

    return (
        <div>
            <div className='header'>
                <div className='headerTop'>
                    <div className='title' onClick={returnHome}><IoLogoPinterest />Pinyin</div>
                    <div className='inpSearch'>
                        <input type="text" className='inp' placeholder='Tìm kiếm sản phẩm' />
                        <LuSearch className='iconSearch' />
                    </div>
                    {idUseLogin && userLogin ? (
                        <div className='accoutdiv' style={{display:"flex",alignItems:"center",gap:"10%"}}>
                            <img src="./public/Assets/images/b25674410a834c3dc7bae5ea0a7b08cb.jpg" alt="" style={{ width: "20%", borderRadius: "50%" }} onClick={handleDropdownToggle} />
                            <div style={{fontSize:"20px"}} onClick={handleDropdownToggle}>{userLogin.username}</div>
                            {dropdownVisible && (
                                <div className='dropdownMenu'>
                                    <div className='dropdownItem' onClick={handleLogOut}>Đăng xuất</div>
                                </div>
                            )}
                        </div>
                    ) : (
                    <div>
                        <div className='acc'>
                            <div className='accoutdiv'>
                                <LuUser2 className='iconAcount' />
                                <div className='clomAcount'>
                                    <div className='formLoRe'>
                                        <div className='formLoReF' onClick={handelDrop}>Đăng nhập</div>
                                        <div>/</div>
                                        <div className='formLoReF' onClick={handleRegister}>Đăng ký</div>
                                        </div>
                                    <div className='account'>Tài khoản của tôi <IoIosArrowDown /></div>
                                </div>
                            </div>
                        </div>
                        </div>
                    )}

                    <div className='cartDiv' onClick={handleLeCart}>
                        <div className='cart'>
                            <div className='cartNumber'>0</div>
                            <TbShoppingBagPlus className='iconCart' />
                        </div>
                        <div className='cartP'>Giỏ hàng</div>
                    </div>
                    <FaRegHeart className='heart' />
                </div>

                <div className='headerBottom'>
                    <ul className='menu'>
                        <li>Sản Phẩm <IoIosArrowDown /></li>
                        <li>Bộ Sưu Tập <IoIosArrowDown /></li>
                        <li>Khuyến Mãi <IoIosArrowDown /></li>
                        <li>Dịch Vụ <IoIosArrowDown /></li>
                        <li>Tin tức</li>
                        <li>About us</li>
                        <li>Showroom</li>
                    </ul>
                </div>
            </div>
    {/* Cart */}
        <div className='CartForm'>
            <h4 className='titleCart'>Giỏ hàng của bạn</h4>
        <div className='blank'>
            <div>*Giỏ hàng của bạn trống*</div>
        </div>
        <div className='TotlaCartblock'>
            <div className='TotlaCart'>
                <div>Tổng sản phẩm: </div>
                <div>Tổng tiền: </div>
            </div>
            <button className='btnPay'>Thanh toán</button>
        </div>
    </div>
 {/* Cart */}
        <div className='listRightCen'>
        <ul className='listRight'>
            <li className='listRightItem'>
            <FaCartFlatbed className='listRightIcon'/>
            <div>Giao hàng và lắp đặt</div>
            <div>Miễn phí</div>
            </li>
            <li className='listRightItem'>
            <MdCurrencyExchange className='listRightIcon'/>
            <div>Đổi trả 1 - 1</div>
            <div>Miễn phí</div>
            </li>
            <li className='listRightItem'>
            <IoShieldCheckmarkOutline className='listRightIcon'/>
            <div>Giao hàng và lắp đặt</div>
            <div>Miễn phí</div>
            </li>
            <li className='listRightItem'>
            <FiPhoneCall className='listRightIcon'/>
            <div>Tư vấn thiết kế</div>
            <div>Miễn phí</div>
            </li>
        </ul>
        </div>
        <Footer></Footer>
    </div>
  )
}
