import React, { Component } from 'react';
import styled from 'styled-components';
import { classNames } from '../framework/helpers';

class MobileHeader extends Component {
  state = {
    isOpen: false,
  };

  componentDidMount() {
    if (window.screen.width <= 414) {
      const menuItems = document.getElementsByClassName('ant-menu-item');

      Array.from(menuItems).forEach((element) => {
        element.addEventListener('click', this.closeMenu);
      });
    }
  }

  getIcon() {
    return this.state.isOpen ? this.closeIcon() : this.hamburgerIcon();
  }

  closeMenu = () => {
    document.getElementsByClassName('left-sidemenu')[0].style.display = 'none';
    this.setState({ isOpen: false });
  };

  slideMenu = () => {
    if (this.state.isOpen) {
      this.closeMenu();
    } else {
      document.getElementsByClassName('left-sidemenu')[0].style.display = 'block';
      document.getElementsByClassName('left-sidemenu')[0].style.width = '100%';
      document.getElementsByClassName('left-sidemenu')[0].style.maxWidth = '100%';
      document.getElementsByClassName('left-sidemenu')[0].style.minWidth = '100%';
      this.setState({ isOpen: true });
    }
  };

  closeIcon() {
    return (<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="Mobile-Nav---Drawer" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(-12.000000, -16.000000)">
        <g id="Group-6" fill="#7A7A7A">
          <g id="Side-Nav---Mobile" transform="translate(8.000000, 16.000000)">
            <g id="Side-Nav---Menu-Copy" transform="translate(4.000000, 0.000000)">
              <g id="ic_nav_close">
                <path d="M1.85455276,0.318190949 L15.6818091,14.1454472 C16.1060636,14.5697018 16.1060636,15.2575545 15.6818091,15.6818091 C15.2575545,16.1060636 14.5697018,16.1060636 14.1454472,15.6818091 L0.318190949,1.85455276 C-0.10606365,1.43029816 -0.10606365,0.742445548 0.318190949,0.318190949 C0.742445548,-0.10606365 1.43029816,-0.10606365 1.85455276,0.318190949 Z" id="Rectangle" />
                <path d="M14.1454472,0.318190949 C14.5697018,-0.10606365 15.2575545,-0.10606365 15.6818091,0.318190949 C16.1060636,0.742445548 16.1060636,1.43029816 15.6818091,1.85455276 L1.85455276,15.6818091 C1.43029816,16.1060636 0.742445548,16.1060636 0.318190949,15.6818091 C-0.10606365,15.2575545 -0.10606365,14.5697018 0.318190949,14.1454472 L14.1454472,0.318190949 Z" id="Rectangle-Copy" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>);
  }

  hamburgerIcon() {
    return (<svg width="18px" height="14px" viewBox="0 0 18 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="M---Drivers---On-Duty" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(-12.000000, -59.000000)">
        <g id="Header" fill="#7A7A7A">
          <g transform="translate(0.000000, 40.000000)" id="Hamburger">
            <g transform="translate(12.000000, 19.000000)">
              <rect id="Rectangle-2" x="0" y="12" width="18" height="2" rx="1" />
              <rect id="Rectangle-2-Copy" x="0" y="6" width="18" height="2" rx="1" />
              <rect id="Rectangle-2-Copy-2" x="0" y="0" width="18" height="2" rx="1" />
            </g>
          </g>
        </g>
      </g>
    </svg>);
  }

  render() {
    return (<div className={classNames('nav-container', this.props.className)}>
      <div className="nav-burger">
        <div className="nav-burger--icon" onClick={this.slideMenu }>
          { this.getIcon() } 
        </div>
      </div>
      <div className="nav-brand">
      <img src="/images/logo.png"></img>
      </div>
    </div>);
  }
}

const StyledMobileHeader = styled(MobileHeader)`
  height: 4rem;
  position: fixed;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 13;
  display: none;
  .nav-brand {
    text-align: center;
    padding: 1.2rem 5.8rem 0 5.8rem;
    img {
      height: 2.4rem;
    }
  }
  .nav-burger {
    float: left;
    .nav-burger--icon {
      cursor: pointer;
      padding: 1.5rem;
      display: inline-block;
    }
  }
  @media only screen and (max-device-width: 414px) {
    display: block;
    height: 4rem;
    position: fixed;
    left: 0;
    right: 0;
    .nav-brand {
      text-align: center;
      padding: 1.2rem 5.8rem 0 5.8rem;
      img {
        height: 1.5rem;
      }
    }
  }
`;

export default StyledMobileHeader;
