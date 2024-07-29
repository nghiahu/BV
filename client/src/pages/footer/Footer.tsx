import { LuMapPin } from 'react-icons/lu'
import './footer.scss'
import { MdEmail, MdLocalPhone } from 'react-icons/md'
export default function footer() {
  return (<>
    <div className='footer'>
<div className="row footer-container--content">
  <div className="col-xs-12 col-sm-6 col-md-3 col-bd">
    <div className="widget-footer">
      <h4 className="footer-title">Nội Thất Pinyin  </h4>
      <div className="footer-content">
        <p>
          Nội Thất Pinyin là thương hiệu đến từ Savimex với gần 40 năm kinh nghiệm
          trong việc sản xuất và xuất khẩu nội thất đạt chuẩn quốc tế.
        </p>
        <div className="fBlock-logo-bct">
          <a
            href="http://online.gov.vn/(X(1)S(x0oiui2u3epcjwy4z2xlko03))/Home/WebDetails/60567?AspxAutoDetectCookieSupport=1"
            className="fade-box"
            aria-label="Bộ Công Thương"
          >
            <img
              className=" ls-is-cached lazyloaded"
              data-src="//theme.hstatic.net/200000065946/1001187274/14/logo_bct.png?v=596"
              src="//theme.hstatic.net/200000065946/1001187274/14/logo_bct.png?v=596"
              alt="Bộ Công Thương"
            />
          </a>
        </div>
        <a
          href="https://www.dmca.com/Protection/Status.aspx?ID=c870a589-fd82-4c14-9e41-c3891ec42fb5&refurl=https://www.moho.com.vn/?gad_source=1&gclid=Cj0KCQjwhb60BhClARIsABGGtw8PWMHUkB3e6hyV7oGm5sdL13ldz0jQSfqps6X65vc60IkXEQAcGlAaAm_cEALw_wcB"
          title="DMCA.com Protection Status"
          className="dmca-badge"
        >
          {" "}
          <img
            src="https://images.dmca.com/Badges/dmca_protected_18_120.png?ID=c870a589-fd82-4c14-9e41-c3891ec42fb5"
            alt="DMCA.com Protection Status"
          />
        </a>
      </div>
    </div>
  </div>
  <div className="col-xs-12 col-sm-6 col-md-3 col-bd">
    <div className="widget-footer footer-linklist">
      <h4 className="footer-title">Dịch Vụ</h4>
      <div className="footer-content">
        <ul className="menuFooter-list">
          <li className="item">
            <a href="/pages/chinh-sach-ban-hang" title="Chính Sách Bán Hàng">
              Chính Sách Bán Hàng
            </a>
          </li>
          <li className="item">
            <a
              href="/pages/giao-hang-va-lap-dat"
              title="Chính Sách Giao Hàng & Lắp Đặt"
            >
              Chính Sách Giao Hàng &amp; Lắp Đặt
            </a>
          </li>
          <li className="item">
            <a href="/pages/chinh-sach-doi-tra" title="Chính Sách Đổi Trả">
              Chính Sách Đổi Trả
            </a>
          </li>
          <li className="item">
            <a
              href="/pages/chinh-sach-bao-hanh"
              title="Chính Sách Bảo Hành & Bảo Trì"
            >
              Chính Sách Bảo Hành &amp; Bảo Trì
            </a>
          </li>
          <li className="item">
            <a
              href="/pages/khach-hang-than-thiet-mohomie"
              title="Khách Hàng Thân Thiết – MOHOmie"
            >
              Khách Hàng Thân Thiết – MOHOmie
            </a>
          </li>
          <li className="item">
            <a
              href="/pages/chinh-sach-doi-tac-ban-hang"
              title="Chính Sách Đối Tác Bán Hàng"
            >
              Chính Sách Đối Tác Bán Hàng
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="col-xs-12 col-sm-6 col-md-3 col-bd clea-mean">
    <div className="widget-footer footer-contact">
      <h4 className="footer-title">Thông tin liên hệ</h4>
      <div className="footer-content">
        <ul className="contactList">
          <li className="contact-1">
          <LuMapPin />  Showroom: 162 HT17, P. Hiệp Thành, Q. 12, TP. HCM (Nằm trong khuôn
            viên công ty SAVIMEX phía sau bến xe buýt Hiệp Thành) | Hotline:
            0971 141 140
            <p />
            Experience Store 1: S05.03-S18 phân khu The Rainbow | Vinhomes Grand
            Park, TP. Thủ Đức | Hotline: 0931 880 424
            <p />
            Experience Store 2: S3.03-Sh15 phân khu Sapphire | Vinhomes Smart
            City, Hà Nội | Hotline: 0909 665 728
            <p />
            Experience Store 3: S2.09-Sh19 phân khu Sapphire | Vinhomes Ocean
            Park, Hà Nội | Hotline: 0938 108 772
            <p />
          </li>
          <li className="contact-2">
          <MdLocalPhone /> 097 114 1140 (Hotline/Zalo)
            <p /> 0902 415 359 (Đội Giao Hàng)
            <p />
          </li>
          <li className="contact-4">
          <MdEmail />cskh@moho.com.vn <p />
            Công Ty Cổ Phần Hợp Tác Kinh Tế Và Xuất Nhập Khẩu Savimex - STK:
            0071001303667 - Vietcombank CN HCM
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="col-xs-12 col-sm-6 col-md-3 col-bd">
    <div className="widget-footer footer-facebook">
      <h4 className="footer-title">Fanpage</h4>
      <div className="footer-content">
        {/* Facebook widget */}
        <div className="footer-static-content">
          <div
            className="fb-page fb_iframe_widget"
            data-href="https://www.facebook.com/mohofurniture/"
            data-height={300}
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
            data-show-posts="false"
            fb-xfbml-state="rendered"
            fb-iframe-plugin-query="adapt_container_width=true&app_id=&container_width=263&height=300&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2Fmohofurniture%2F&locale=vi_VN&sdk=joey&show_facepile=true&show_posts=false&small_header=false"
          >
            <span style={{ verticalAlign: "bottom", width: 263, height: 130 }}>
              <iframe
                name="f3f12193dc11a5f1b"
                width="1000px"
                height="300px"
                data-testid="fb:page Facebook Social Plugin"
                title="fb:page Facebook Social Plugin"
                // frameBorder={0}
                // allowTransparency="true"
                // allowFullScreen="true"
                // scrolling="no"
                allow="encrypted-media"
                src="https://www.facebook.com/v16.0/plugins/page.php?adapt_container_width=true&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfe41e63a2ad9807e3%26domain%3Dwww.moho.com.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.moho.com.vn%252Ff6810a62a76de0134%26relation%3Dparent.parent&container_width=263&height=300&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2Fmohofurniture%2F&locale=vi_VN&sdk=joey&show_facepile=true&show_posts=false&small_header=false"
                style={{
                  border: "none",
                  visibility: "visible",
                  width: 263,
                  height: 130
                }}
                className=""
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
<div className="footer-bottom text-center">
  <div className="container">
    <p>
      Copyright © 2024 <a href="https://moho.com.vn"> Nội Thất MOHO</a>.
    </p>
  </div>
</div>
</>
  )
}
