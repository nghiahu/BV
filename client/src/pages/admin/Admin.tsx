import React, { useEffect, useState } from 'react'
import './admin.scss'
import { IoLogoPinterest } from 'react-icons/io5'
import { MdAttachMoney, MdSpaceDashboard } from 'react-icons/md'
import { FaUsers } from 'react-icons/fa'
import { FaCartFlatbed } from 'react-icons/fa6'
import { HiClipboardDocumentList, HiOutlineClipboardDocumentList } from 'react-icons/hi2'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { LuSearch } from 'react-icons/lu'
import { BsFillPersonFill, BsGraphDownArrow, BsGraphUpArrow } from 'react-icons/bs'
import { BiReset, BiSolidCategory } from 'react-icons/bi'
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
const data = [
  { name: 'shofa', value: 700 },
  { name: 'bàn', value: 200 },
  { name: 'tủ', value: 300 },
];
const COLORS = ['#111111', '#777777', '#AAAAAA'];
export default function Admin() {
  const location = useLocation();
  const isProductpage = location.pathname.includes('adProduct');
  const isUserpage = location.pathname.includes('adUser');
  const isOrderpage = location.pathname.includes('adOrder');
  const isAdminpage = location.pathname.includes('admin');
  const isAdminCategory = location.pathname.includes('adCategory');
  return (
    <div className='backgroudAdmin'>
        <div className='navigationBar'>
            <div className='titleAdmin'>Pinyin</div>

            <div className='indexing'>
                <NavLink to="/admin" className={isProductpage || isUserpage || isOrderpage || isAdminCategory && isAdminpage?  "indexingItem intwoIndex":"indexingItem" }><MdSpaceDashboard />Bảng điều khiển</NavLink>
                <NavLink to="adUser" className='indexingItem'><FaUsers />Người dùng</NavLink>
                <NavLink to="adProduct" className='indexingItem'><FaCartFlatbed />Sản phẩm</NavLink>
                <NavLink to="adOrder" className='indexingItem'><HiClipboardDocumentList />Đơn hàng</NavLink>
                <NavLink to="adCategory" className='indexingItem'><BiSolidCategory />Danh mục</NavLink>
            </div>
            <hr className='hr'/>
            <div className='logOut'><RiLogoutBoxRLine />Đăng xuất</div>
        </div>

        <div className='headerAdmin'>
            <div className='titleHeader'>{!isProductpage && !isUserpage && !isOrderpage && !isAdminCategory && isAdminpage?  `Welcom back` : 
            (isProductpage && !isUserpage && !isOrderpage && !isAdminCategory && isAdminpage? "Sản phẩm" : 
            (!isProductpage && isUserpage && !isOrderpage && !isAdminCategory && isAdminpage? "Người dùng":
            (!isProductpage && !isUserpage && isOrderpage && !isAdminCategory && isAdminpage?"Đơn hàng" : 
            (!isProductpage && !isUserpage && !isOrderpage && isAdminCategory && isAdminpage? "Danh mục":""))))}</div>
            <div className='headerRight'>
            <div className='headerSearch'>
              <LuSearch className='iconSearch'/>
              <input type="text" placeholder='Search' className='inpHeader'/>
              </div>
            <IoMdNotificationsOutline className='notication'/>
            <div className='accout'>
              <img className='avata' src="\public\Assets\images\account-icon-8.png" alt="" />
              <div className='useName'>Pinyin</div>
            </div>
            </div>
        </div>
        
        <div>
        {!isProductpage && !isUserpage && !isOrderpage && !isAdminCategory && isAdminpage? <>
          <div className='newsBoard'>
          <div className='leftBoard'>
            <div className='leftBoardf'>
              <div className='nameBoard'>
              <div className='nameBoardItem'>
              <MdAttachMoney className='iconMoney'/>
              <div className='nameNews'>Tổng lợi nhuận</div>
              </div>
              <div className='noteName'>731 đơn hàng</div>
              </div>
              <div className='infoBoard'>
                <div className='totalvalue'>$9,328.55</div>
                <div className='index'>
                  <div className='indexItem'><BsGraphUpArrow className='iconvale'/>+15.6%</div>
                  <div className='indexItem'><div>+1.4k</div> <div>trong tuần</div></div>
                </div>
              </div>
            </div>

            <div className='leftBoards'>
            <div className='nameNews'>
              <div className='nameindex'>
              <BsFillPersonFill  className='iconName'/>
              <div className='name'>Lượng truy cập</div>
              </div>
              <div className='nameNewsItem'>Thời gian trung bình: 4:30</div>
              </div>
              <div className='inforNews'>
                <div className='value'>12,302</div>
                <div className='valueinfo'>
                  <div className='valueinfoItem'><BsGraphUpArrow className='iconvale'/>+12.7%</div>
                  <div className='valueinfoItem'><div>+1.2k</div> <div>trong tuần</div></div>
                </div>
              </div>
            </div>


            <div className='leftBoards'>
            <div className='nameNews'>
              <div className='nameindex'>
              <BiReset className='iconName'/>
              <div className='name'>Đơn hàng</div>
              </div>
              <div className='nameNewsItem'>2 Hủy đơn</div>
              </div>
              <div className='inforNews'>
                <div className='value'>$963</div>
                <div className='valueinfo'>
                  <div className='valueinfoItem'><BsGraphDownArrow className='iconvale'/>-12.7%</div>
                  <div className='valueinfoItem'><div>-213</div> <div></div></div>
                </div>
              </div>
            </div>
          </div>

          <div className='rightBoard'>
          <div className='titleBoard'>Danh mục hàng đầu</div>
            <div>
            <ResponsiveContainer width="100%" height={400}>
          <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip/>
        <Legend/>
      </PieChart>
    </ResponsiveContainer>
            </div>
            </div>
          </div>
          </> :  (<Outlet/>)}
          
        </div>
    </div>
  )
}
// function useState<T>(arg0: string): [any, any] {
//   throw new Error('Function not implemented.')
// }

