import React from 'react'
import Logo from '../img/logo.jpg'
import LoginImg from '../img/login-page-big.jpg'


function DashBoardPage(props) {
    return (
        <>
            <section>
                <div className='inner-container'>
                    <div className='login-wrapper flex'>
                        <div className='half-1'>
                            <div class="form-wrapper">
                                <img src={Logo} alt='dog bone toy' />
                                <h1>Sign In</h1>
                                <form>
                                    <div className='form-item'>
                                        <label htmlFor="email"></label>
                                        <input type="email" name="email" required="required" placeholder="Email Address"></input>
                                    </div>
                                    <div className="form-item">
                                        <label htmlFor="password"></label>
                                        <input type="password" name="password" required="required" placeholder="Password"></input>
                                    </div>
                                    <div className="button-panel">
                                        <input type="submit" class="button" title="Sign In" value="Sign In"></input>
                                    </div>
                                </form>
                                <div className="form-footer">
                                    <p><a href="#">Create an account</a></p>
                                    <p><a href="#">Forgot password?</a></p>
                                </div>
                            </div>
                        </div>
                        <div className='half-2 hidden'>
                            <img src={LoginImg} alt='dog with a sweater on by a toy' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DashBoardPage