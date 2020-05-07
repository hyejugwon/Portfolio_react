import React from 'react';
import './Login.css';
import { IoIosCheckboxOutline } from "react-icons/io";
import { IoIosCheckbox } from "react-icons/io";

const Login = () => {
    return (
        <div className="login_container">
            <div className="loginName">로그인</div>
            <div className="underline"></div>
            <input type="text" placeholder="아이디 / 이메일 아이디 입력"/>
            <input type="text" placeholder="비밀번호"/>
            <div className="containLogin">
                <IoIosCheckboxOutline size="26" color="#d4d4d4" className="check unchecked"/>
                <IoIosCheckbox size="26" color="#375fff" className="check checked"/>
                <div className="checkContain">로그인 상태 유지</div>
            </div>
            <button className="doLogin">로그인하기</button>
            <div className="loginList">
                <a className="loginList_li">회원가입</a>
                <a className="loginList_li">계정찾기</a>
                <a className="loginList_li">비밀번호 재설정</a>
            </div>
            <div className="snsLogin">
                <div className="snsLoginName">SNS계정으로 로그인하기</div>
                <button className="sns logNaver">네이버로 로그인하기</button>
                <button className="sns logKakao">카카오로 로그인하기</button>
                <button className="sns logFacebook">페이스북으로 로그인하기</button>
            </div>
            <a className="preOrder2018">2018년 2월 이전 비회원 주문조회 ></a>
        </div>

    )
};

export default Login;
