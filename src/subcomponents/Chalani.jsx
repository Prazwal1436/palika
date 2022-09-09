import React from 'react'
import chalnivayekokagjaatIco from "../icons/sifaris_icon.png"
import chalnikitabIco from "../icons/sifaris_icon.png"

export default function Chalani() {
  return (
    <div>
         <div class="container-fluid main-content-view  row ms-2 me-2">
          <div class="card-body" bis_skin_checked="1">
            <div class="nagarik-sub-box " bis_skin_checked="1">
              <div class="d-flex flex-wrap justify-content-center" bis_skin_checked="1">
                <div class="button_box" bis_skin_checked="1">
                  <a class=" text-center mt-2 m-0 p-0" href="chalnivayekokagjaat.html">
                    <img src={chalnikitabIco} alt="" />
                    <p class="fs-6">चलानी भएको कागजात </p>
                  </a>
                </div>
                <div class="button_box" bis_skin_checked="1">
                  <a class=" text-center mt-2 m-0 p-0" href="chalnikitab.html">
                    <img src={chalnivayekokagjaatIco}alt="" />
                    <p class="fs-6 ">चलानी किताब </p>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
