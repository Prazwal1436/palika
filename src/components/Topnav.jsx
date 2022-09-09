import React from 'react'
import bibaranIco from "../icons/sidebar/Nagarpalika.png"
import settingIco from "../icons/sidebar/setting.png"
import chalaniIco from "../icons/sifaris_icon.png"
import roleManagerIco from "../icons/buttom_navbar/Jana.png"
import pryogkartaBewastapanIco from "../icons/buttom_navbar/Jana.png"
import userManagerIco from "../icons/buttom_navbar/user.png"
import namasteMayorIco from "../icons/buttom_navbar/namaste_icon.png"
import prakashanIco from "../icons/buttom_navbar/publication.png"
import budgetIco from "../icons/buttom_navbar/Budget.png"
import sujabSallaIco from "../icons/buttom_navbar/Salla.png"
import { Link } from 'react-router-dom'



export default function Topnav() {
    return (
        <div> <div className="container-fluid collapse show collapse-Menu display-view" id="content-bar">
            <div className="content-navbar">
                <div className="content-navbar-box d-flex">
                    <Link to="/bibaran">
                        <div>
                            <img
                                src={bibaranIco}
                                alt=""
                            />
                            <span className="navbar-box-title">बिवरण</span>
                        </div>
                    </Link>

                    <Link to="/settingfile">
                        <div>
                            <img
                                src={settingIco}
                                alt=""
                            />
                            <span className="navbar-box-title">सेटिङ</span>
                        </div>
                    </Link>

                    <Link to="/chalani">
                        <div>
                            <img
                                src={chalaniIco}
                                alt=""
                            />
                            <span className="navbar-box-title">चलानी</span>
                        </div>
                    </Link>

                    <Link to="/rolemanager">
                        <div>
                            <img
                                src={roleManagerIco}
                                alt=""
                            />
                            <span className="navbar-box-title">रोल म्यानेज</span>
                        </div>
                    </Link>
                    <Link to="/usermanager">
                        <div>
                            <img
                                src={userManagerIco}
                                alt=""
                            />
                            <span className="navbar-box-title">युजर म्यानेज</span>
                        </div>
                    </Link>
                    <Link to="/prayogkartabewastapan">
                        <div>
                            <img
                                src={pryogkartaBewastapanIco}
                                alt=""
                            />
                            <span className="navbar-box-title">प्रयोगकर्ता समूहीकरण</span>
                        </div>
                    </Link>
                    <Link to="/namastemayor">
                        <div>
                            <img
                                src={namasteMayorIco}
                                alt=""
                            />
                            <span className="navbar-box-title">नमस्ते मेयर</span>
                        </div>
                    </Link>

                    <Link to="prakashan.html">
                        <div>
                            <img
                                src={prakashanIco}
                                alt=""
                            />
                            <span className="navbar-box-title">प्रकाशन</span>
                        </div>
                    </Link>

                    <Link to="budget.html">
                        <div>
                            <img
                                src={budgetIco}
                                alt=""
                            />
                            <span className="navbar-box-title">बजेट</span>
                        </div>
                    </Link>

                    <Link to="sujabsalla.html">
                        <div>
                            <img
                                src={sujabSallaIco}
                                alt=""
                            />
                            <span className="navbar-box-title">सुझाब सल्ला</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div></div>
    )
}
