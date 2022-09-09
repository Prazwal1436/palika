import React from 'react'
import aarthikBarshaIco from "../icons/sifaris_icon.png"
import fileVitraIco from "../icons/sifaris_icon.png"
import kothaNumIco from "../icons/sifaris_icon.png"
import rayaknumIco from "../icons/sifaris_icon.png"
import rayakiKhandaNumIco from "../icons/sifaris_icon.png"
import faatIco from "../icons/sifaris_icon.png"


export default function SettingFs() {
  return (
    <div>
         <div class="card-body" bis_skin_checked="1">
            <div class="nagarik-sub-box " bis_skin_checked="1">
              <div class="d-flex flex-wrap justify-content-center" bis_skin_checked="1">
                <div class="button_box" bis_skin_checked="1">
                  <a class=" text-center mt-2 m-0 p-0" href="aarthikbarsa.html">
                    <img src={aarthikBarshaIco} alt="" />
                    <p class="fs-6">आर्थीक बर्ष</p>
                  </a>
                </div>
                <div class="button_box" bis_skin_checked="1">
                  <a class=" text-center mt-2 m-0 p-0" href="filevitra.html">
                    <img src={fileVitraIco} alt="" />
                    <p class="fs-6 ">फाएल भित्र </p>
                  </a>
                </div>
                <div class="button_box" bis_skin_checked="1">
                  <a class=" text-center mt-2 m-0 p-0" href="kothanum.html">
                    <img src={kothaNumIco} alt="" />
                    <p class="fs-6">कोठा न्ं </p>
                  </a>
                </div>
                <div class="button_box" bis_skin_checked="1">
                  <a class=" text-center mt-2 m-0 p-0" href="rayaknum.html">
                    <img src={rayaknumIco} alt="" />
                    <p class="fs-6">रायक न्ं </p>
                  </a>
                </div>
                <div class="button_box" bis_skin_checked="1">
                  <a class=" text-center mt-2 m-0 p-0" href="rayakkokhandano.html">
                    <img src={rayakiKhandaNumIco} alt="" />
                    <p class="fs-6">रायको खण्ड न्ं </p>
                  </a>
                </div>
                <div class="button_box" bis_skin_checked="1">
                  <a class=" text-center mt-2 m-0 p-0" href="faat.html">
                    <img src={faatIco} alt="" />
                    <p class="fs-6">फाट </p>
                  </a>
                </div>

              </div>
            </div>
          </div>
    </div>
  )
}
