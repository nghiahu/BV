import React, { useState, useEffect } from 'react'
import './home.scss'
import { LuSearch, LuUser2 } from 'react-icons/lu'
import { FaRegHeart, FaStar } from 'react-icons/fa'
import { IoIosArrowDown, IoLogoPinterest, IoMdHeartEmpty } from 'react-icons/io'
import { TbShoppingBagPlus } from 'react-icons/tb'
import Carousels from '../carousels/Carousels'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../../store/reducers/productReducer'
import { Category, Product, User } from '../../interface'
import { FaCartFlatbed } from 'react-icons/fa6'
import { MdCurrencyExchange } from 'react-icons/md'
import { IoShieldCheckmarkOutline } from 'react-icons/io5'
import { FiPhoneCall } from 'react-icons/fi'
import Footer from '../footer/Footer'
import { useNavigate } from 'react-router-dom'
import { getAllUser } from '../../store/reducers/userReducer'
import { getAllCategory } from '../../store/reducers/categoryReducer'

export default function Home() {
    const [dropdownVisible, setDropdownVisible] = useState<boolean>(false)
    const idUseLogin = JSON.parse(localStorage.getItem("id_UserLogin") || 'null');
    const data:any = useSelector(state => state)
    const userLogin = data.userReducer.users.find((item: User) => item.id === idUseLogin)
    const [classify,setClass] = useState<boolean>(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProduct())
        dispatch(getAllUser())
        dispatch(getAllCategory())
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
        if(idUseLogin){
        navigate("/cart")
        }else{
            navigate("/login")
        }
    }
    const handelClassy=()=>{
        setClass(!classify)
    }
    const handleReturn=()=>{
        console.log("Ho");
        
        navigate('/')
    }
    const addToCart=(product:Product)=>{
        const productCart = []
        productCart.push(product)
    }
    const handleClassfy=()=>{
        navigate("/classfy")
    }
    return (
        <div>
            <div className='header'>
                <div className='headerTop'>
                    <div onClick={handleReturn} className='title'><IoLogoPinterest />Pinyin</div>
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
                        <li onClick={handelClassy}>
                            <div>Sản Phẩm <IoIosArrowDown /></div>
                            {classify&& (
                            data.categoryReducer.categorys.map((item:Category)=>{
                                return <li className='class' onClick={handleClassfy}>{item.category_name}</li>
                            })
                            )}
                            </li>
                        <li>Bộ Sưu Tập <IoIosArrowDown /></li>
                        <li>Khuyến Mãi <IoIosArrowDown /></li>
                        <li>Dịch Vụ <IoIosArrowDown /></li>
                        <li>Tin tức</li>
                        <li>About us</li>
                        <li>Showroom</li>
                    </ul>
                </div>
            </div>

            <div className='Carousels'>
                <Carousels />
            </div>

            <div className='categoryNavigationIndex'>
                <div className='categoryNavigation'>
                    <h3 className='titleCateNav'>Không gian sống với pinyin</h3>
                    <div className='navFrame'>
                        <div className='leftNavFrame'>
                            <div className='leftNavFrameItem'>
                                <img className='navFrameO' src="//theme.hstatic.net/200000065946/1001187274/14/imgaView1_large.jpg?v=596" alt="" />
                            </div>
                            <div className='leftNavFrameItem'>
                                <img className='navFrameO' src="//theme.hstatic.net/200000065946/1001187274/14/imgaView2_large.jpg?v=596" alt="" />
                            </div>
                        </div>
                        <div className='RightNavFrame'>
                            <div className='RightNavFrameTop'>
                                <img className='navFrameTR' src="//theme.hstatic.net/200000065946/1001187274/14/imgaView3_large.jpg?v=596" alt="" />
                            </div>
                            <div className='RightNavFrameBot'>
                                <div className='RNavFBotItem'>
                                    <img className='navFrameF' src="//theme.hstatic.net/200000065946/1001187274/14/imgaView4_large.jpg?v=596" alt="" />
                                </div>
                                <div className='RNavFBotItem'>
                                    <img className='navFrameF' src="//theme.hstatic.net/200000065946/1001187274/14/imgaView5_large.jpg?v=596" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='DlistProduct'>
                <div className='DlistProductTop'>
                    <div className='titleCate'>Sản phẩm các loại</div>
                    <div className='SeeMore'>Xem thêm</div>
                </div>

                <div className='listProduct'>
                    {data.productReducer.products.map((product: Product, index: number) => (
                        <div className='product' key={index}>
                            <img className='productImgRender' src={product.image} alt="" onClick={() => handleDetail(product)} />
                            <div className='productInfoRender' onClick={() => handleDetail(product)}>
                                <div>{product.product_name}</div>
                                <div className='informationProduct'>
                                    <div style={{ color: "orangered" }}>{VND.format(product.unit_price)}</div>
                                    <div className='starPro'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                                </div>
                                <div className='informationProduct'>
                                    <div>Đã bán {product.sold}</div>
                                    <div><IoMdHeartEmpty className='iconHearPro' /></div>
                                </div>
                            </div>
                            <button className='btnInfoProduct addBtn' onClick={()=>addToCart(product)}>Thêm vào giỏ hàng</button>
                            <button className='btnInfoProduct BuyNowBtn'>Mua ngay</button>
                        </div>
                    ))}
                </div>
            </div>

            <div className='listRightCen'>
                <ul className='listRight'>
                    <li className='listRightItem'>
                        <FaCartFlatbed className='listRightIcon' />
                        <div>Giao hàng và lắp đặt</div>
                        <div>Miễn phí</div>
                    </li>
                    <li className='listRightItem'>
                        <MdCurrencyExchange className='listRightIcon' />
                        <div>Đổi trả 1 - 1</div>
                        <div>Miễn phí</div>
                    </li>
                    <li className='listRightItem'>
                        <IoShieldCheckmarkOutline className='listRightIcon' />
                        <div>Giao hàng và lắp đặt</div>
                        <div>Miễn phí</div>
                    </li>
                    <li className='listRightItem'>  
                        <FiPhoneCall className='listRightIcon' />
                        <div>Tư vấn thiết kế</div>
                        <div>Miễn phí</div>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}
