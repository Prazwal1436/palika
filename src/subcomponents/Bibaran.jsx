import React from 'react'

import yojanaIco from "../icons/sifaris_icon.png"
import sifarisIco from "../icons/sifaris_icon.png"
import fileHernuhosIco from "../icons/sifaris_icon.png"
import fileKhojnuhosIco from "../icons/sifaris_icon.png"
import jammaIco from "../icons/sifaris_icon.png"

export default function Bibaran() {
  return (
    <div>
           <div class="card-body" bis_skin_checked="1">
            <div class="nagarik-sub-box " bis_skin_checked="1">
              <div class="d-flex flex-wrap justify-content-center" bis_skin_checked="1">
                <div class="button_box" bis_skin_checked="1">
                  <a class=" text-center mt-2 m-0 p-0" href="yojana.html">
                    <img src={yojanaIco} alt="" />
                    <p class="fs-6">योजेना</p>
                  </a>
                </div>
                <div class="button_box" bis_skin_checked="1">
                  <a class=" text-center mt-2 m-0 p-0" href="nayaentry.html">
                    <img src={sifarisIco} alt="" />
                    <p class="fs-6 ">नयाँ इन्ट्री</p>
                  </a>
                </div>
                <div class="button_box" bis_skin_checked="1">
                  <a class=" text-center mt-2 m-0 p-0" href="filehernuhos.html">
                    <img src={fileHernuhosIco} alt="" />
                    <p class="fs-6">फायल हेर्नुहोस</p>
                  </a>
                </div>
                <div class="button_box" bis_skin_checked="1">
                  <a class=" text-center mt-2 m-0 p-0" href="filekhojnuhos.html">
                    <img src={fileKhojnuhosIco} alt="" />
                    <p class="fs-6">फायल खोज्नुहोस</p>
                  </a>
                </div>
                <div class="button_box" bis_skin_checked="1">
                  <a class=" text-center mt-2 m-0 p-0" href="jamma.html">
                    <img src={jammaIco} alt="" />
                    <p class="fs-6">जम्मा</p>
                  </a>
                </div>
                </div>
                </div>
                </div>
                
    </div>
  )
}
