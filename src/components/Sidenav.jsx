import React from 'react'
import "../css/Sidenavbar.css"


import gaupalikaNagarpalikaico from "../icons/sidebar/Nagarpalika.png"
import sewaico from "../icons/sewa_icon.png"
import sifarishico from "../icons/sifaris_icon.png"
import wardpatraico from "../icons/sidebar/nagarik_badapatra.png"
import yojanaico from "../icons/yojana_icon.png"
import settingico from "../icons/sidebar/setting.png"
import lisenseico from "../icons/sidebar/setting.png"
import inventoryico from "../icons/sidebar/Inventory.png"
import pryogkartabewastapanico from "../icons/sidebar/user_icon.png"
import digitalprofileico from "../icons/sidebar/digital_profile.png"
import sancharico from "../icons/sidebar/Communication.png"
import hrico from "../icons/sidebar/HR.png"
import pISico from "../icons/sidebar/PIS.png"
import budgetico from "../icons/sidebar/Budget.png"
import { Link } from 'react-router-dom'

export default function Sidenav() {
  return (
    <div className="sidenav container-fluid collapse show collapse-Menu"
      id="side_bar">
      <div className="main-menu" id="side-bar">
        <ul className="main-menu-ul flex-wrap">
          <Link to="gaupalikanagarpalika.html">
            <li className="box">
              <img
                src={gaupalikaNagarpalikaico}
                alt=""
              />
              <p className="fs-6">गाउपालिका/नगरपालिका</p>
            </li>
          </Link>

          <Link to="sewa.html">
            <li className="box">
              <img
                src={sewaico}
                alt=""
              />
              <p className="fs-6">सेवा</p>
            </li>
          </Link>

          <Link to="sifarish.html">
            <li className="box">
              <img
                src={sifarishico}
                alt=""
              />
              <p className="fs-6">सिफारिस</p>

            </li>
          </Link>

          <Link to="wardpatra.html">
            <li className="box">
              <img
                src={wardpatraico}
                alt=""
              />
              <p className="fs-6">वडापत्र</p>
            </li>
          </Link>

          <Link to="yojana.html">
            <li className="box">
              <img
                src={yojanaico}
                alt=""
              />
              <p className="fs-6">योजना</p>
            </li>
          </Link>

          <Link to="setting.html">
            <li className="box">
              <img
                src={settingico}
                alt=""
              />
              <p className="fs-6">सेटिङ्ग</p>
            </li>
          </Link>

          <Link to="inventory.html">
            <li className="box">
              <img
                src={inventoryico}
                alt=""
              />
              <p className="fs-6">इन्भेन्ट्री</p>
            </li>
          </Link>

          <Link to="prayogkartabewastapan.html">
            <li className="box">
              <img
                src={pryogkartabewastapanico}
                alt=""
              />
              <p className="fs-6">प्रयोगकर्ता/ व्यावस्थापन</p>
            </li>
          </Link>

          <Link to="digitalprofile.html">
            <li className="box">
              <img
                src={digitalprofileico}
                alt=""
              />
              <p className="fs-6">डिजिटल प्रोफाइल</p>
            </li>
          </Link>

          <Link to="sanchar.html">
            <li className="box">
              <img
                src={sancharico}
                alt=""
              />
              <p className="fs-6">संचार</p>
            </li>
          </Link>

          <Link to="manavsansaadhan.html">
            <li className="box">
              <img
                src={hrico}
                alt=""
              />
              <p className="fs-6">मानव संसाधान</p>
            </li>
          </Link>

          <Link to="byaktigatjaankaripranali.html">
            <li className="box">
              <img
                src={pISico}
                alt=""
              />
              <p className="fs-6">व्यतिगत/ जानकारी/ प्रणाली</p>
            </li>
          </Link>

          <Link to="budget.html">
            <li className="box">
              <img
                src={budgetico}
                alt=""
              />
              <p className="fs-6">बजेट</p>
            </li>
          </Link>
          <Link to="lisense.html">
            <li className="box">
              <img
                src={lisenseico}
                alt=""
              />
              <p className="fs-6">लाइसेन्स</p>

            </li>
          </Link>

        </ul>
      </div>
    </div>
  )
}
