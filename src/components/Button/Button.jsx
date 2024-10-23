import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        paddingTop: 40,
        paddingBottom: 64,
        paddingLeft: 144,
        paddingRight: 144,
        background: 'white',
        borderTop: '1px #F4F4F5 solid',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 24 }}>
        <Link href="/" style={linkStyle}>
          <div style={linkTextStyle}>Home</div>
        </Link>
        <Link href="/about" style={linkStyle}>
          <div style={linkTextStyle}>About</div>
        </Link>
        <Link href="/projects" style={linkStyle}>
          <div style={linkTextStyle}>Projects</div>
        </Link>
        <Link href="/uses" style={linkStyle}>
          <div style={linkTextStyle}>Uses</div>
        </Link>
      </div>
      <div style={{ color: '#A1A1AA', fontSize: 14, fontFamily: 'Roboto', fontWeight: 400, lineHeight: '24px' }}>
        © 2024 John Doe. All rights reserved.
      </div>
    </div>
  );
};

const linkStyle = {
  paddingTop: 8,
  paddingBottom: 8,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const linkTextStyle = {
  color: '#272729',
  fontSize: 16,
  fontFamily: 'Roboto',
  fontWeight: 400,
  lineHeight: '28px',
  wordWrap: 'break-word',
};

export default Footer;
