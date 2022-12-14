import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import firebase from '../firebase.js';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Heading() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const logoutFunc = () => {
    firebase.auth().signOut();
    navigate('/');
  };

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">마이컴마켓</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link
                to="/upload"
                style={{ color: 'white', textDecoration: 'none' }}
              >
                업로드
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            {user.accessToken ? (
              <>
                <Navbar.Text
                  style={{
                    color: 'white',
                    cursor: 'pointer',
                    marginRight: '20px',
                  }}
                  onClick={() => {
                    logoutFunc();
                  }}
                >
                  로그아웃
                </Navbar.Text>
                <br />
                <Navbar.Text
                  style={{ color: 'white', cursor: 'pointer' }}
                  onClick={() => {
                    navigate('/mypage');
                  }}
                >
                  마이페이지
                </Navbar.Text>
              </>
            ) : (
              <Link
                to="/login"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  marginRight: '10px',
                }}
              >
                로그인
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Heading;
