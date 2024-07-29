import { FiPhoneCall } from 'react-icons/fi'
import Footer from '../../footer/Footer'
import './Detail.scss'
import { IoLogoPinterest, IoShieldCheckmarkOutline } from 'react-icons/io5'
import { MdCurrencyExchange } from 'react-icons/md'
import { FaCartFlatbed, FaFacebook, FaRegHeart, FaStar } from 'react-icons/fa6'
import { IoIosArrowDown } from 'react-icons/io'
import { TbShoppingBagPlus } from 'react-icons/tb'
import { LuSearch, LuUser2 } from 'react-icons/lu'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Product, User } from '../../../interface'
export default function Detail() {
    const [dropdownVisible, setDropdownVisible] = useState<boolean>(false)
    const idUseLogin = JSON.parse(localStorage.getItem("id_UserLogin") || 'null');
    const data:any = useSelector(state => state)
    const userLogin = data.userReducer.users.find((item: User) => item.id === idUseLogin)
    const location = useLocation();
    const { product } = location.state;
    console.log(product);   
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
    const returnHome=()=>{
        navigate("/")
    }
  return (
    <div>
    <div className='header'>
        <div className='headerTop'>
        <div className='title' onClick={returnHome}><IoLogoPinterest/>Pinyin</div>
        <div className='inpSearch'>
            <input type="text" className='inp' placeholder='Tìm kiếm sản phẩm'/>
            <LuSearch className='iconSearch'/>
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
        <div className='cartDiv'>
            <div className='cart'>
                <div className='cartNumber'>0</div>
                <TbShoppingBagPlus className='iconCart'/>
            </div>
            <div className='cartP'>Giỏ hàng</div>
        </div>
        <FaRegHeart className='heart'/>
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
        {/* */}

        <div className='detailForm'>
            <img src={product.image} alt="" className='imgDetail'/>
            <div className='detailInfor'>
                <div className='DetailProductName'>{product.product_name}</div>
                <div className='evaluateDetail'>
                    <div className='evaluateDetailItem'><div style={{color:"orangered"}}><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div><div>(102)</div></div>
                    <div className='evaluateDetailItem'>
                        <div>chia sẻ: <FaFacebook style={{color:"blue"}}/></div>
                        <div>Đã bán: {product.sold}</div>
                    </div>
                </div>
                <div className='DetailProPrice'>{VND.format(product.unit_price)}</div>
                <div className='DeltaiInpValue'>
                    <input type="number" min={1} defaultValue={1} className='inpDetal'/>    
                </div>
                <div className='descripDetail'>{product.description}</div>
                <div className='BtnDetail'>
                    <button className='btnDetal btnDetalAdd'>Thêm vào giỏ hàng</button>
                    <button className='btnDetal btnDetalBuy'>Mua ngay</button>
                </div>
            </div>
        </div>

        {/* */}
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
