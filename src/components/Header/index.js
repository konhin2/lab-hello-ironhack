import React from 'react'

export default function index() {
    return (
        <>
            <div className="header">
            <div><img src="/images/ironhack-logo.svg"/></div>
            <div><img src="/images/menu-top.svg" /></div>
            </div>
            <div className="adjs">
                <div className="left">
                    <div className="title-text">
                        <h1 className="title">Say Hello to ReactJS</h1>
                        <p>You will learn hoe to use the most popular frontend library, and become a super Ninja developer.</p>
                    </div>
                    <div className="btn-header">
                        <a href="">Awesome!</a>
                    </div>
                </div>
                <div className="right">
                    <img src="/images/react-logo.svg" className="img-1"/>
                    <img src="/images/react-logo.svg" className="img-2"/>
                    <img src="/images/react-logo.svg" className="img-3"/>
                </div>
            </div>
        </>
    )
}
