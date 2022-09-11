import React from 'react'
import PieCharts from '../components/PieCharts'

export default function Home() {
   
    return (
        <div>

            <div class="row" bis_skin_checked="1">
                <div class="form-group" bis_skin_checked="1">
                    <label for="" class="form-label">

                        <b>आँबुखैरेनी गाउँपालिका</b></label>
                </div>
            </div>


            <div bis_skin_checked="1">



                <form id="token-form">
                    <div class="d-flex align-items-center mb-3" bis_skin_checked="1">
                        <div bis_skin_checked="1">
                            <input type="text" name="token_number" class="form-control mt-0" id="redirected_search_value" placeholder="टोकन नं" />
                        </div>
                        <button type="submit" class="mx-2 btn btn-primary"> <i class="fas fa-search"></i> खोज गर्नुस </button>
                    </div>
                </form>

            </div>

            <div id="ward" class="d-flex justify-content-start flex-wrap bg-light py-2 mt-2 rounded wards false" bis_skin_checked="1">
                <span class="badge rounded-pill m-2 p-2 bg-secondary" data-ward_no="1"><i class="fa-solid fa-building"></i> वडा नं. १</span>
                <span class="badge rounded-pill m-2 p-2 bg-secondary" data-ward_no="2"><i class="fa-solid fa-building"></i> वडा नं. २</span>
                <span class="badge rounded-pill m-2 p-2 bg-secondary" data-ward_no="3"><i class="fa-solid fa-building"></i> वडा नं. ३</span>
                <span class="badge rounded-pill m-2 p-2 bg-secondary" data-ward_no="4"><i class="fa-solid fa-building"></i> वडा नं. ४</span>
                <span class="badge rounded-pill m-2 p-2 bg-secondary" data-ward_no="5"><i class="fa-solid fa-building"></i> वडा नं. ५</span>
                <span class="badge rounded-pill m-2 p-2 bg-secondary" data-ward_no="6"><i class="fa-solid fa-building"></i> वडा नं. ६</span>
                <span class="badge rounded-pill m-2 p-2 bg-secondary" data-ward_no="7"><i class="fa-solid fa-building"></i> वडा नं. ७</span>
                <span class="badge rounded-pill m-2 p-2 bg-secondary" data-ward_no="8"><i class="fa-solid fa-building"></i> वडा नं. ८</span>
                <span class="badge rounded-pill m-2 p-2 bg-secondary" data-ward_no="9"><i class="fa-solid fa-building"></i> वडा नं. ९</span>
            </div>

            <div class="bg-light row m-0 mt-3" bis_skin_checked="1">
                <div class="col-md-4 border p-3 " bis_skin_checked="1">
                    <p class="text-primary fw-bold">पालिकाको/वोडाको जनसंख्या विवरण </p>
                    <div class="p-1" bis_skin_checked="1">
                        <div class="d-flex justify-content-between" bis_skin_checked="1">
                            <p>कुल जनसख्या</p>
                            <p id="total-population-count">३</p>
                        </div>
                        <hr class="mt-0" />
                        <div class="d-flex justify-content-between" bis_skin_checked="1">
                            <p>कुल घरधुरी</p>
                            <p id="total-houses-count">२</p>
                        </div>
                        <div id="gender_count" bis_skin_checked="1"> <hr class="mt-0" />
                            <div class="d-flex justify-content-between" bis_skin_checked="1">
                                <p>पुरुष</p>
                                <p id="gender-count-female">
                                    २
                                </p>
                            </div> <hr class="mt-0" />
                            <div class="d-flex justify-content-between" bis_skin_checked="1">
                                <p>महिला</p>
                                <p id="gender-count-female">
                                    १
                                </p>
                            </div> <hr class="mt-0" />
                            <div class="d-flex justify-content-between" bis_skin_checked="1">
                                <p>तेश्रो लिङ्गी</p>
                                <p id="gender-count-female">
                                    0
                                </p>
                            </div></div>
                        <hr class="mt-0" />
                    </div>
                </div>
                <div class="col-md-4 border p-3" bis_skin_checked="1">
                    <p class="text-primary fw-bold">
                        लिङ्ग आधारमा जनसंख्या विवरण
                        <br />
                        बिस्तृत जानकारी चार्ट
                    </p>
                    <div style={{ height: "300px" }} bis_skin_checked="1">

                       <PieCharts/>
                    </div>
                </div>
                <div class="col-md-4 border p-3" bis_skin_checked="1">
                    <p class="text-primary fw-bold">
                        धर्मको आधारमा जनसंख्या विवरण
                        <br />
                        बिस्तृत जानकारी चार्ट
                    </p>
                    <div style={{ height: "300px" }} bis_skin_checked="1">
                     
                    </div>
                </div>
            </div>


            <div class="bg-light row m-0 mt-3" bis_skin_checked="1">
                <div class="col-md-4 border pp-3 p-0 " bis_skin_checked="1">
                    <div class="accordion p-0" id="accordion-ethnic-group" bis_skin_checked="1">
                        <div class="accordion-item" bis_skin_checked="1">
                            <h2 class="accordion-header" id="accordion-ethnic-group">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-ethnic-group-collapse" aria-expanded="false" aria-controls="accordion-ethnic-group-collapse">
                                    <p class="text-primary fw-bold">जातीय समूहको आधारमा बिस्तृत जानकारी चार्ट</p>
                                </button>
                            </h2>
                            <div id="accordion-ethnic-group-collapse" class="accordion-collapse collapse" aria-labelledby="accordion-ethnic-group" data-bs-parent="#accordion-ethnic-group" bis_skin_checked="1">
                                <div class="accordion-body" bis_skin_checked="1">
                                    <div style={{ height: "300px" }} bis_skin_checked="1">

                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 border pp-3 p-0 " bis_skin_checked="1">
                    <div class="accordion p-0" id="accordion-toilet-type" bis_skin_checked="1">
                        <div class="accordion-item" bis_skin_checked="1">
                            <h2 class="accordion-header" id="accordion-toilet">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-toilet-collapse" aria-expanded="false" aria-controls="accordion-toilet-collapse">
                                    <p class="text-primary fw-bold">शौचालय प्रकारको आधारमा बिस्तृत जानकारी चार्ट</p>
                                </button>
                            </h2>
                            <div id="accordion-toilet-collapse" class="accordion-collapse collapse" aria-labelledby="accordion-toilet" data-bs-parent="#accordion-toilet-type" bis_skin_checked="1">
                                <div class="accordion-body" bis_skin_checked="1">
                                    <div style={{ height: "300px" }} bis_skin_checked="1">

                                        <canvas id="pie-chart-toilet-type" class="" style={{ display: "block", boxSizing: "border-box", height: "0", width: "0" }} height="0" width="0"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 border pp-3 p-0 " bis_skin_checked="1">
                    <div class="accordion p-0" id="accordion-business-type" bis_skin_checked="1">
                        <div class="accordion-item" bis_skin_checked="1">
                            <h2 class="accordion-header" id="accordion-business">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-business-collapse" aria-expanded="false" aria-controls="accordion-business-collapse">
                                    <p class="text-primary fw-bold">व्यापार विवरणको आधारमा बिस्तृत जानकारी चार्ट</p>
                                </button>
                            </h2>
                            <div id="accordion-business-collapse" class="accordion-collapse collapse" aria-labelledby="accordion-business" data-bs-parent="#accordion-business-type" bis_skin_checked="1">
                                <div class="accordion-body" bis_skin_checked="1">
                                    <div style={{ height: "300px" }} bis_skin_checked="1">

                                        <canvas id="pie-chart-business-type" class="" style={{ display: "block", boxSizing: "border-box", height: "0px", width: "0px" }} height="0" width="0"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 border pp-3 p-0 " bis_skin_checked="1">
                    <div class="accordion p-0" id="accordion-disability-type" bis_skin_checked="1">
                        <div class="accordion-item" bis_skin_checked="1">
                            <h2 class="accordion-header" id="accordion-disability">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-disability-collapse" aria-expanded="false" aria-controls="accordion-disability-collapse">
                                    <p class="text-primary fw-bold">असक्षमता प्रकृतिको आधारमा बिस्तृत जानकारी चार्ट</p>
                                </button>
                            </h2>
                            <div id="accordion-disability-collapse" class="accordion-collapse collapse" aria-labelledby="accordion-disability" data-bs-parent="#accordion-disability-type" bis_skin_checked="1">
                                <div class="accordion-body" bis_skin_checked="1">
                                    <div style={{ height: "300px" }} bis_skin_checked="1">

                                        <canvas id="pie-chart-disability-type" class="" style={{ display: "block", boxSizing: "border-box", height: "0px", width: "0px" }} height="0" width="0"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 border pp-3 p-0 " bis_skin_checked="1">
                    <div class="accordion p-0" id="accordion-literacy-type" bis_skin_checked="1">
                        <div class="accordion-item" bis_skin_checked="1">
                            <h2 class="accordion-header" id="accordion-literacy">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-literacy-collapse" aria-expanded="false" aria-controls="accordion-literacy-collapse">
                                    <p class="text-primary fw-bold">साक्षरताको आधारमा बिस्तृत जानकारी चार्ट</p>
                                </button>
                            </h2>
                            <div id="accordion-literacy-collapse" class="accordion-collapse collapse" aria-labelledby="accordion-literacy" data-bs-parent="#accordion-literacy-type" bis_skin_checked="1">
                                <div class="accordion-body" bis_skin_checked="1">
                                    <div style={{ height: "300px" }} bis_skin_checked="1">
                                        <canvas id="pie-chart-literacy-type" class="" style={{ display: "block", boxSizing: "border-box", height: "0px", width: "0px" }} height="0" width="0"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 border pp-3 p-0 " bis_skin_checked="1">
                    <div class="accordion p-0" id="accordion-electricity-type" bis_skin_checked="1">
                        <div class="accordion-item" bis_skin_checked="1">
                            <h2 class="accordion-header" id="accordion-electricity">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-electricity-collapse" aria-expanded="false" aria-controls="accordion-electricity-collapse">
                                    <p class="text-primary fw-bold">बिजुलीको आधारमा बिस्तृत जानकारी चार्ट</p>
                                </button>
                            </h2>
                            <div id="accordion-electricity-collapse" class="accordion-collapse collapse" aria-labelledby="accordion-electricity" data-bs-parent="#accordion-electricity-type" bis_skin_checked="1">
                                <div class="accordion-body" bis_skin_checked="1">
                                    <div style={{ height: "300px" }} bis_skin_checked="1">
                                        <canvas id="pie-chart-electricity-type" class="" style={{ display: "block", boxSizing: "border-box", height: "0px", width: "0px" }} height="0" width="0"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 border pp-3 p-0 " bis_skin_checked="1">
                    <div class="accordion p-0" id="accordion-road-type" bis_skin_checked="1">
                        <div class="accordion-item" bis_skin_checked="1">
                            <h2 class="accordion-header" id="accordion-road">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-road-collapse" aria-expanded="false" aria-controls="accordion-road-collapse">
                                    <p class="text-primary fw-bold">सडकको आधारमा बिस्तृत जानकारी चार्ट</p>
                                </button>
                            </h2>
                            <div id="accordion-road-collapse" class="accordion-collapse collapse" aria-labelledby="accordion-road" data-bs-parent="#accordion-road-type" bis_skin_checked="1">
                                <div class="accordion-body" bis_skin_checked="1">
                                    <div style={{ height: "300px" }} bis_skin_checked="1">
                                        <canvas id="pie-chart-road-type" class="" style={{ display: "block", boxSizing: "border-box", height: "0px", width: "0px" }} height="0" width="0"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 border pp-3 p-0 " bis_skin_checked="1">
                    <div class="accordion p-0" id="accordion-fuel-type" bis_skin_checked="1">
                        <div class="accordion-item" bis_skin_checked="1">
                            <h2 class="accordion-header" id="accordion-fuel">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-fuel-collapse" aria-expanded="false" aria-controls="accordion-fuel-collapse">
                                    <p class="text-primary fw-bold">इन्धनको आधारमा बिस्तृत जानकारी चार्ट</p>
                                </button>
                            </h2>
                            <div id="accordion-fuel-collapse" class="accordion-collapse collapse" aria-labelledby="accordion-fuel" data-bs-parent="#accordion-fuel-type" bis_skin_checked="1">
                                <div class="accordion-body" bis_skin_checked="1">
                                    <div style={{ height: "300px" }} bis_skin_checked="1">
                                        <canvas id="pie-chart-fuel-type" class="" style={{ display: "block", boxSizing: "border-box", height: "0px", width: "0px" }} height="0" width="0"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 border pp-3 p-0 " bis_skin_checked="1">
                    <div class="accordion p-0" id="accordion-water-source-type" bis_skin_checked="1">
                        <div class="accordion-item" bis_skin_checked="1">
                            <h2 class="accordion-header" id="accordion-water-source">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-water-source-collapse" aria-expanded="false" aria-controls="accordion-water-source-collapse">
                                    <p class="text-primary fw-bold">पानीको स्रोतको आधारमा बिस्तृत जानकारी चार्ट</p>
                                </button>
                            </h2>
                            <div id="accordion-water-source-collapse" class="accordion-collapse collapse" aria-labelledby="accordion-water-source" data-bs-parent="#accordion-water-source-type" bis_skin_checked="1">
                                <div class="accordion-body" bis_skin_checked="1">
                                    <div style={{ height: "300px" }} bis_skin_checked="1">
                                        <canvas id="pie-chart-water-source-type" class="" style={{ display: "block", boxSizing: "border-box", height: "0px", width: "0px" }} height="0" width="0"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 border pp-3 p-0 " bis_skin_checked="1">
                    <div class="accordion p-0" id="accordion-age-range" bis_skin_checked="1">
                        <div class="accordion-item" bis_skin_checked="1">
                            <h2 class="accordion-header" id="accordion-age-range">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-age-range-collapse" aria-expanded="false" aria-controls="accordion-age-range-collapse">
                                    <p class="text-primary fw-bold">उमेरको आधारमा बिस्तृत जानकारी चार्ट</p>
                                </button>
                            </h2>
                            <div id="accordion-age-range-collapse" class="accordion-collapse collapse" aria-labelledby="accordion-age-range" data-bs-parent="#accordion-age-range" bis_skin_checked="1">
                                <div class="accordion-body" bis_skin_checked="1">
                                    <div style={{ height: "300px" }} bis_skin_checked="1">
                                        <canvas id="pie-chart-age-range" class="" style={{ display: "block", boxSizing: "border-box", height: "0px", width: "0px" }} height="0" width="0"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="row" bis_skin_checked="1">
                <div class="col-lg-3 col-sm-6 col-12 p-3" bis_skin_checked="1">
                    <a class="bg-light p-3 rounded shadow  nav-link" href="http://182.93.93.82/sewa/darta">
                        <div class="d-flex align-items-center justify-content-between" bis_skin_checked="1">
                            <div class="col-6 overflow-wrap-break" bis_skin_checked="1">
                                <p class="text-dark">दर्ता संख्या</p>

                                <h2 class="text-dark">२३४</h2>
                            </div>
                            <div class="col-6 text-end" bis_skin_checked="1">

                                <img class="dashboard-card-img" src="icons/dashboard/darta.png" />
                            </div>
                        </div>
                        <p class="text-dark"><span class="text-primary">५% </span>गत हप्ता</p>
                    </a>
                </div>
                <div class="col-lg-3 col-sm-6 col-12 p-3" bis_skin_checked="1">
                    <a class="bg-light p-3 rounded shadow  nav-link" href="http://182.93.93.82/sewa/chalani">
                        <div class="d-flex align-items-center justify-content-between" bis_skin_checked="1">
                            <div class="col-6 overflow-wrap-break" bis_skin_checked="1">
                                <p class="text-dark">चलानी संख्या </p>

                                <h2 class="text-dark">१२</h2>
                            </div>
                            <div class="col-6 text-end" bis_skin_checked="1">
                                <img class="dashboard-card-img" src="icons/dashboard/form.png" />
                            </div>
                        </div>
                        <p class="text-dark"><span class="text-primary">५% </span>गत हप्ता</p>
                    </a>
                </div>
                <div class="col-lg-3 col-sm-6 col-12 p-3" bis_skin_checked="1">
                    <a class="bg-light p-3 rounded shadow  nav-link" href="http://182.93.93.82/sifaris">
                        <div class="d-flex align-items-center justify-content-between" bis_skin_checked="1">
                            <div class="col-6 overflow-wrap-break" bis_skin_checked="1">
                                <p class="text-dark">सिफारिस संख्या</p>

                                <h2 class="text-dark">६७</h2>
                            </div>
                            <div class="col-6 text-end" bis_skin_checked="1">
                                <img class="dashboard-card-img" src="icons/event_icon.png" />
                            </div>
                        </div>
                        <p class="text-dark"><span class="text-primary">५% </span>गत हप्ता</p>
                    </a>
                </div>
                <div class="col-lg-3 col-sm-6 col-12 p-3" bis_skin_checked="1">
                    <a class="bg-light p-3 rounded shadow  nav-link" href="http://182.93.93.82/yojana">
                        <div class="d-flex align-items-center justify-content-between" bis_skin_checked="1">
                            <div class="col-6 overflow-wrap-break" bis_skin_checked="1">
                                <p class="text-dark">योजना संख्या</p>

                                <h2 class="text-dark">४५</h2>
                            </div>
                            <div class="col-6 text-end" bis_skin_checked="1">
                                <img class="dashboard-card-img" src="icons/plan_icon.png" />
                            </div>
                        </div>
                        <p class="text-dark"><span class="text-primary">५% </span>गत हप्ता</p>
                    </a>
                </div>
                <div class="col-lg-3 col-sm-6 col-12 p-3" bis_skin_checked="1">
                    <a class="bg-light p-3 rounded shadow  nav-link" href="#">
                        <div class="d-flex align-items-center justify-content-between" bis_skin_checked="1">
                            <div class="col-6 overflow-wrap-break" bis_skin_checked="1">
                                <p class="text-dark">सूचना संख्या</p>

                                <h2 class="text-dark">५६</h2>
                            </div>
                            <div class="col-6 text-end" bis_skin_checked="1">
                                <img class="dashboard-card-img" src="icons/information_icon.png" />
                            </div>
                        </div>
                        <p class="text-dark"><span class="text-primary">५% </span>गत हप्ता</p>
                    </a>
                </div>
                <div class="col-lg-3 col-sm-6 col-12 p-3" bis_skin_checked="1">
                    <a class="bg-light p-3 rounded shadow  nav-link" href="http://182.93.93.82/sewa/parichaya-patra">
                        <div class="d-flex align-items-center justify-content-between" bis_skin_checked="1">
                            <div class="col-6 overflow-wrap-break" bis_skin_checked="1">
                                <p class="text-dark">परिचय पत्र संख्या</p>

                                <h2 class="text-dark">७८</h2>
                            </div>
                            <div class="col-6 text-end" bis_skin_checked="1">
                                <img class="dashboard-card-img" src="icons/idcard_icon.png" />
                            </div>
                        </div>
                        <p class="text-dark"><span class="text-primary">५% </span>गत हप्ता</p>
                    </a>
                </div>
            </div>

            <div class="row d-none" bis_skin_checked="1">
                <div class="p-3 col-12 col-xl-9 mt-4" bis_skin_checked="1">
                    <canvas id="home-main-chart" class="bg-light rounded shadow p-3" style={{ display: "block", boxSizing: "border-box", height: "0px", width: "0px" }} height="0" width="0"></canvas>
                </div>

                <div class=" p-3 col-12 col-xl-3 mt-4" bis_skin_checked="1">
                    <div class="bg-light rounded shadow" bis_skin_checked="1">
                        <div class="home-recent p-4" bis_skin_checked="1">
                            <p> पछिल्लो सर्वेक्षण </p>
                        </div>
                        <div class="mt-2" bis_skin_checked="1">
                            <div class="d-flex px-4 py-2 justify-content-between align-items-start" bis_skin_checked="1">
                                <img src="https://picsum.photos/25/25" class="pt-1" />
                                <div bis_skin_checked="1">
                                    <p class="m-0 break-word">
                                        सर्वेक्षण-0१
                                    </p>
                                    <p class="m-0 text-primary">
                                        ५%
                                    </p>
                                    <small class="m-0">
                                        बृदि
                                    </small>
                                </div>
                                <h2 class="m-0 align-self-center">
                                    १२३,४
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row d-none" bis_skin_checked="1">
                <div class="p-3" bis_skin_checked="1">
                    <div class="rounded shadow bg-light p-3" bis_skin_checked="1">
                        <h2>यन्त्रहरू भएका स्थानहरूद्वारा बिक्री रिपोर्ट</h2>
                        <hr />


                        <div class="table-responsive" bis_skin_checked="1">
                            <table class="table">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col" class="border-0 border-b२३m border-3">यन्त्र</th>
                                        <th scope="col" class="border-0 border-b२३m border-3">प्रदेश 0१</th>
                                        <th scope="col" class="border-0 border-b२३m border-3">प्रदेश 0२</th>
                                        <th scope="col" class="border-0 border-b२३m border-3">प्रदेश 0३</th>
                                        <th scope="col" class="border-0 border-b२३m border-3">प्रदेश 0४</th>
                                        <th scope="col" class="border-0 border-b२३m border-3">प्रदेश 0५</th>
                                        <th scope="col" class="border-0 border-b२३m border-3">प्रदेश 0६</th>
                                        <th scope="col" class="border-0 border-b२३m border-3">प्रदेश 0७</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>एपल</td>
                                        <td>२३</td>
                                        <td>२३</td>
                                        <td>२३</td>
                                        <td>२३</td>
                                        <td>२३</td>
                                        <td>२३</td>
                                        <td>२३</td>
                                    </tr>
                                    <tr>
                                        <td>एपल</td>
                                        <td>२३</td>
                                        <td>२३</td>
                                        <td>२३</td>
                                        <td>२३</td>
                                        <td>२३</td>
                                        <td>२३</td>
                                        <td>२३</td>
                                    </tr>
                                    <tr>
                                        <td>एपल</td>
                                        <td>२३</td>
                                        <td>२३</td>
                                        <td>२३</td>
                                        <td>२३</td>
                                        <td>२३</td>
                                        <td>२३</td>
                                        <td>२३</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </div>


    )
}
