import React from "react";
import { Accordion } from "react-bootstrap";
import logo from "../assets/images/svg/logo.svg";
import { Link } from "react-router-dom";

const Asidebar = () => {
  return (
    <div>
      <div className="bg_yellow  d-flex py-3 justify-content-center  align-items-center gap-2">
        <img src={logo} alt="logo" />
        <a
          className="text-decoration-none bg-white border border-1 fs_12 px-2 py-1 text-black  "
          href=""
        >
          ADMIN
        </a>
      </div>

      <div className="">
        <Link className="text-decoration-none " to="/">
          <div className=" d-flex align-items-center hover_effect py-3 px-3 gap-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.98641 1.06689H2.93307C2.68881 1.06689 2.47867 1.06689 2.29307 1.11063C2.00575 1.17928 1.74305 1.32614 1.53407 1.53494C1.32508 1.74373 1.17799 2.0063 1.10907 2.29356C1.06641 2.47916 1.06641 2.68823 1.06641 2.93356V5.60023C1.06641 5.84449 1.06641 6.05463 1.11014 6.24023C1.1788 6.52755 1.32566 6.79025 1.53445 6.99924C1.74324 7.20822 2.00581 7.35531 2.29307 7.42423C2.47867 7.4669 2.68774 7.4669 2.93307 7.4669H5.59974C5.84401 7.4669 6.05414 7.4669 6.23974 7.42316C6.52706 7.35451 6.78977 7.20765 6.99875 6.99885C7.20773 6.79006 7.35483 6.52749 7.42374 6.24023C7.46641 6.05463 7.46641 5.84556 7.46641 5.60023V2.93356C7.46641 2.68929 7.46641 2.47916 7.42267 2.29356C7.35402 2.00624 7.20716 1.74353 6.99836 1.53455C6.78957 1.32557 6.527 1.17848 6.23974 1.10956C6.05414 1.06689 5.84507 1.06689 5.59974 1.06689H2.98641ZM2.54161 2.14849C2.58747 2.13783 2.65894 2.13356 2.98641 2.13356H5.54641C5.87494 2.13356 5.94534 2.13676 5.99121 2.14849C6.08703 2.17141 6.17462 2.22041 6.24429 2.29008C6.31395 2.35974 6.36296 2.44734 6.38587 2.54316C6.39654 2.58796 6.39974 2.65836 6.39974 2.98689V5.54689C6.39974 5.87543 6.39654 5.94583 6.38481 5.99169C6.36189 6.08751 6.31289 6.17511 6.24322 6.24478C6.17356 6.31444 6.08596 6.36345 5.99014 6.38636C5.94641 6.39596 5.87601 6.40023 5.54641 6.40023H2.98641C2.65787 6.40023 2.58747 6.39703 2.54161 6.38529C2.44579 6.36238 2.35819 6.31337 2.28852 6.24371C2.21886 6.17405 2.16985 6.08645 2.14694 5.99063C2.13734 5.9469 2.13307 5.87649 2.13307 5.54689V2.98689C2.13307 2.65836 2.13627 2.58796 2.14801 2.54209C2.17092 2.44628 2.21993 2.35868 2.28959 2.28901C2.35926 2.21935 2.44685 2.17034 2.54267 2.14743L2.54161 2.14849ZM10.4531 1.06689H10.3997C10.1555 1.06689 9.94534 1.06689 9.75974 1.11063C9.47242 1.17928 9.20971 1.32614 9.00073 1.53494C8.79175 1.74373 8.64465 2.0063 8.57574 2.29356C8.53307 2.47916 8.53307 2.68823 8.53307 2.93356V5.60023C8.53307 5.84449 8.53307 6.05463 8.57681 6.24023C8.64546 6.52755 8.79232 6.79025 9.00112 6.99924C9.20991 7.20822 9.47248 7.35531 9.75974 7.42423C9.94534 7.4669 10.1544 7.4669 10.3997 7.4669H13.0664C13.3107 7.4669 13.5208 7.4669 13.7064 7.42316C13.9937 7.35451 14.2564 7.20765 14.4654 6.99885C14.6744 6.79006 14.8215 6.52749 14.8904 6.24023C14.9331 6.05463 14.9331 5.84556 14.9331 5.60023V2.93356C14.9331 2.68929 14.9331 2.47916 14.8893 2.29356C14.8207 2.00624 14.6738 1.74353 14.465 1.53455C14.2562 1.32557 13.9937 1.17848 13.7064 1.10956C13.5208 1.06689 13.3117 1.06689 13.0664 1.06689H10.4531ZM10.0083 2.14849C10.0541 2.13783 10.1256 2.13356 10.4531 2.13356H13.0131C13.3416 2.13356 13.412 2.13676 13.4579 2.14849C13.5537 2.17141 13.6413 2.22041 13.711 2.29008C13.7806 2.35974 13.8296 2.44734 13.8525 2.54316C13.8632 2.58796 13.8664 2.65836 13.8664 2.98689V5.54689C13.8664 5.87543 13.8621 5.94583 13.8515 5.99169C13.8286 6.08751 13.7796 6.17511 13.7099 6.24478C13.6402 6.31444 13.5526 6.36345 13.4568 6.38636C13.412 6.39703 13.3416 6.40023 13.0131 6.40023H10.4531C10.1245 6.40023 10.0541 6.39703 10.0083 6.38529C9.91246 6.36238 9.82486 6.31337 9.75519 6.24371C9.68553 6.17405 9.63652 6.08645 9.61361 5.99063C9.60401 5.9469 9.59974 5.87649 9.59974 5.54689V2.98689C9.59974 2.65836 9.60294 2.58796 9.61467 2.54209C9.63759 2.44628 9.68659 2.35868 9.75626 2.28901C9.82592 2.21935 9.91352 2.17034 10.0093 2.14743L10.0083 2.14849ZM2.93307 8.53356H5.59974C5.84401 8.53356 6.05414 8.53356 6.23974 8.5773C6.52706 8.64595 6.78977 8.79281 6.99875 9.0016C7.20773 9.2104 7.35483 9.47297 7.42374 9.76023C7.46641 9.94583 7.46641 10.1549 7.46641 10.4002V13.0669C7.46641 13.3112 7.46641 13.5213 7.42267 13.7069C7.35402 13.9942 7.20716 14.2569 6.99836 14.4659C6.78957 14.6749 6.527 14.822 6.23974 14.8909C6.05414 14.9336 5.84507 14.9336 5.59974 14.9336H2.93307C2.68881 14.9336 2.47867 14.9336 2.29307 14.8898C2.00575 14.8212 1.74305 14.6743 1.53407 14.4655C1.32508 14.2567 1.17799 13.9942 1.10907 13.7069C1.06641 13.5213 1.06641 13.3122 1.06641 13.0669V10.4002C1.06641 10.156 1.06641 9.94583 1.11014 9.76023C1.1788 9.47291 1.32566 9.2102 1.53445 9.00122C1.74324 8.79224 2.00581 8.64514 2.29307 8.57623C2.47867 8.53356 2.68774 8.53356 2.93307 8.53356ZM2.98641 9.60023C2.65787 9.60023 2.58747 9.60343 2.54161 9.61516C2.44579 9.63807 2.35819 9.68708 2.28852 9.75675C2.21886 9.82641 2.16985 9.91401 2.14694 10.0098C2.13734 10.0536 2.13307 10.124 2.13307 10.4536V13.0136C2.13307 13.3421 2.13627 13.4125 2.14801 13.4584C2.17092 13.5542 2.21993 13.6418 2.28959 13.7114C2.35926 13.7811 2.44685 13.8301 2.54267 13.853C2.58747 13.8637 2.65787 13.8669 2.98641 13.8669H5.54641C5.87494 13.8669 5.94534 13.8626 5.99121 13.852C6.08703 13.829 6.17462 13.78 6.24429 13.7104C6.31395 13.6407 6.36296 13.5531 6.38587 13.4573C6.39654 13.4125 6.39974 13.3421 6.39974 13.0136V10.4536C6.39974 10.125 6.39654 10.0546 6.38481 10.0088C6.36189 9.91294 6.31289 9.82534 6.24322 9.75568C6.17356 9.68602 6.08596 9.63701 5.99014 9.61409C5.94641 9.60449 5.87601 9.60023 5.54641 9.60023H2.98641ZM10.4531 8.53356H10.3997C10.1555 8.53356 9.94534 8.53356 9.75974 8.5773C9.47242 8.64595 9.20971 8.79281 9.00073 9.0016C8.79175 9.2104 8.64465 9.47297 8.57574 9.76023C8.53307 9.94583 8.53307 10.1549 8.53307 10.4002V13.0669C8.53307 13.3112 8.53307 13.5213 8.57681 13.7069C8.64546 13.9942 8.79232 14.2569 9.00112 14.4659C9.20991 14.6749 9.47248 14.822 9.75974 14.8909C9.94534 14.9346 10.1555 14.9346 10.3997 14.9346H13.0664C13.3107 14.9346 13.5208 14.9346 13.7064 14.8909C13.9935 14.8221 14.256 14.6751 14.4648 14.4663C14.6736 14.2576 14.8205 13.9951 14.8893 13.708C14.9331 13.5224 14.9331 13.3122 14.9331 13.068V10.4002C14.9331 10.156 14.9331 9.94583 14.8893 9.76023C14.8207 9.47291 14.6738 9.2102 14.465 9.00122C14.2562 8.79224 13.9937 8.64514 13.7064 8.57623C13.5208 8.53356 13.3117 8.53356 13.0664 8.53356H10.4531ZM10.0083 9.61516C10.0541 9.6045 10.1256 9.60023 10.4531 9.60023H13.0131C13.3416 9.60023 13.412 9.60343 13.4579 9.61516C13.5537 9.63807 13.6413 9.68708 13.711 9.75675C13.7806 9.82641 13.8296 9.91401 13.8525 10.0098C13.8632 10.0546 13.8664 10.125 13.8664 10.4536V13.0136C13.8664 13.3421 13.8621 13.4125 13.8515 13.4584C13.8286 13.5542 13.7796 13.6418 13.7099 13.7114C13.6402 13.7811 13.5526 13.8301 13.4568 13.853C13.412 13.8637 13.3416 13.8669 13.0131 13.8669H10.4531C10.1245 13.8669 10.0541 13.8626 10.0083 13.852C9.91246 13.829 9.82486 13.78 9.75519 13.7104C9.68553 13.6407 9.63652 13.5531 9.61361 13.4573C9.60401 13.4136 9.59974 13.3432 9.59974 13.0136V10.4536C9.59974 10.125 9.60294 10.0546 9.61467 10.0088C9.63759 9.91294 9.68659 9.82534 9.75626 9.75568C9.82592 9.68602 9.91352 9.63701 10.0093 9.61409L10.0083 9.61516Z"
                fill="white"
              />
            </svg>
            <p className="fs_14 text-white ">Dashboard</p>
          </div>
        </Link>

        <a>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className=" d-flex align-items-center hover_effect py-3 px-3 gap-3">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5 13.6L10.2 12.3L9.5 13L11.5 15L15 11.5L14.3 10.8L11.5 13.6ZM6 9H10V10H6V9ZM6 6.5H10V7.5H6V6.5ZM6 4H10V5H6V4Z"
                      fill="white"
                    />
                    <path
                      d="M8 14H3V12H4V11H3V8.5H4V7.5H3V5H4V4H3V2H12V10H13V2C13 1.45 12.55 1 12 1H3C2.45 1 2 1.45 2 2V4H1V5H2V7.5H1V8.5H2V11H1V12H2V14C2 14.55 2.45 15 3 15H8V14Z"
                      fill="white"
                    />
                  </svg>

                  <p className="fs_14 text-white ">Catalog</p>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="text-center d-flex flex-column py-2">
                  <Link className=" text-white " to="Catalog1/">
                    catalog_1
                  </Link>
                  <Link className="mt-1 text-white " to="Catalog2/">
                    catalog_2
                  </Link>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </a>

        <Link className="text-decoration-none " to="User/">
          <div className=" d-flex align-items-center hover_effect py-3 px-3 gap-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.4733 8.47325C11.1269 7.95903 11.604 7.25387 11.8382 6.45588C12.0723 5.6579 12.0519 4.80676 11.7799 4.0209C11.5078 3.23503 10.9975 2.55352 10.32 2.07116C9.64259 1.5888 8.83163 1.32959 8 1.32959C7.16836 1.32959 6.35741 1.5888 5.67995 2.07116C5.0025 2.55352 4.49223 3.23503 4.22014 4.0209C3.94805 4.80676 3.92767 5.6579 4.16184 6.45588C4.396 7.25387 4.87307 7.95903 5.52666 8.47325C4.40672 8.92195 3.42952 9.66615 2.69926 10.6265C1.969 11.5869 1.51304 12.7275 1.38 13.9266C1.37037 14.0141 1.37808 14.1027 1.40268 14.1873C1.42729 14.2719 1.46831 14.3508 1.52341 14.4195C1.63468 14.5582 1.79652 14.6471 1.97333 14.6666C2.15014 14.686 2.32744 14.6344 2.46621 14.5232C2.60499 14.4119 2.69388 14.2501 2.71333 14.0733C2.85972 12.77 3.48112 11.5665 4.45881 10.6924C5.4365 9.81843 6.70193 9.33527 8.01333 9.33527C9.32473 9.33527 10.5902 9.81843 11.5679 10.6924C12.5455 11.5665 13.1669 12.77 13.3133 14.0733C13.3315 14.2371 13.4096 14.3884 13.5327 14.4979C13.6559 14.6075 13.8152 14.6676 13.98 14.6666H14.0533C14.2281 14.6465 14.3878 14.5581 14.4977 14.4208C14.6076 14.2834 14.6587 14.1082 14.64 13.9333C14.5063 12.7307 14.0479 11.5872 13.3139 10.6254C12.5799 9.66353 11.5979 8.91957 10.4733 8.47325ZM8 7.99992C7.47258 7.99992 6.95701 7.84352 6.51848 7.55051C6.07995 7.25749 5.73815 6.84101 5.53632 6.35374C5.33449 5.86647 5.28168 5.3303 5.38457 4.81301C5.48746 4.29573 5.74144 3.82058 6.11438 3.44764C6.48732 3.0747 6.96247 2.82072 7.47976 2.71783C7.99704 2.61493 8.53322 2.66774 9.02049 2.86957C9.50776 3.07141 9.92423 3.4132 10.2173 3.85173C10.5103 4.29026 10.6667 4.80584 10.6667 5.33325C10.6667 6.0405 10.3857 6.71877 9.88562 7.21887C9.38552 7.71897 8.70724 7.99992 8 7.99992Z"
                fill="white"
              />
            </svg>

            <p className="fs_14 text-white ">Users</p>
          </div>
        </Link>
        <Link className="text-decoration-none " to="Sip/">
          <div className=" d-flex align-items-center hover_effect py-3 px-3 gap-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5167 13.5L13.8333 11.2L13.1333 10.5L11.5167 12.0833L10.8667 11.4333L10.1667 12.15L11.5167 13.5ZM4 6H12V4.66667H4V6ZM12 15.3333C11.0778 15.3333 10.2916 15.0082 9.64133 14.358C8.99111 13.7078 8.66622 12.9218 8.66667 12C8.66667 11.0778 8.99178 10.2916 9.642 9.64133C10.2922 8.99111 11.0782 8.66622 12 8.66667C12.9222 8.66667 13.7084 8.99178 14.3587 9.642C15.0089 10.2922 15.3338 11.0782 15.3333 12C15.3333 12.9222 15.0082 13.7084 14.358 14.3587C13.7078 15.0089 12.9218 15.3338 12 15.3333ZM2 14.6667V3.33333C2 2.96667 2.13067 2.65267 2.392 2.39133C2.65333 2.13 2.96711 1.99956 3.33333 2H12.6667C13.0333 2 13.3473 2.13067 13.6087 2.392C13.87 2.65333 14.0004 2.96711 14 3.33333V7.78333C13.7889 7.68333 13.5722 7.6 13.35 7.53333C13.1278 7.46667 12.9 7.41667 12.6667 7.38333V3.33333H3.33333V12.7H7.38333C7.43889 13.0444 7.52511 13.3722 7.642 13.6833C7.75889 13.9944 7.91155 14.2889 8.1 14.5667L8 14.6667L7 13.6667L6 14.6667L5 13.6667L4 14.6667L3 13.6667L2 14.6667ZM4 11.3333H7.38333C7.41667 11.1 7.46667 10.8722 7.53333 10.65C7.6 10.4278 7.68333 10.2111 7.78333 10H4V11.3333ZM4 8.66667H8.73333C9.15556 8.25556 9.64733 7.93045 10.2087 7.69133C10.77 7.45222 11.3671 7.33289 12 7.33333H4V8.66667Z"
                fill="white"
              />
            </svg>

            <p className="fs_14 text-white ">SIPs</p>
          </div>
        </Link>
        <a>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className=" d-flex align-items-center hover_effect py-3 px-3 gap-3">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_5029_79)">
                      <path
                        d="M14.25 2.09989C14.0781 1.98868 13.8815 1.92139 13.6775 1.90396C13.4735 1.88652 13.2683 1.91946 13.08 1.99989L6.91 4.42989C6.76393 4.48934 6.60771 4.51991 6.45 4.51989H2.5C2.16848 4.51989 1.85054 4.65159 1.61612 4.88601C1.3817 5.12043 1.25 5.43837 1.25 5.76989V5.86989H0V8.86989H1.25V8.99989C1.25783 9.32619 1.39298 9.63648 1.62656 9.86445C1.86013 10.0924 2.17361 10.22 2.5 10.2199L4 13.3999C4.10157 13.614 4.26148 13.7952 4.46136 13.9225C4.66124 14.0499 4.893 14.1183 5.13 14.1199H5.76C6.08979 14.1173 6.40516 13.9844 6.63743 13.7503C6.86969 13.5161 7.00001 13.1997 7 12.8699V10.3399L13.08 12.7699C13.2295 12.8294 13.389 12.8599 13.55 12.8599C13.7997 12.8559 14.0429 12.7794 14.25 12.6399C14.4145 12.5288 14.5501 12.3802 14.6458 12.2063C14.7414 12.0324 14.7943 11.8383 14.8 11.6399V3.12989C14.7991 2.92641 14.7485 2.72623 14.6527 2.54673C14.5568 2.36723 14.4186 2.21384 14.25 2.09989ZM5.75 5.76989V8.99989H2.5V5.76989H5.75ZM5.75 12.8699H5.12L3.89 10.2199H5.75V12.8699ZM7.37 9.14989C7.25127 9.08922 7.12747 9.03903 7 8.99989V5.69989C7.12624 5.67385 7.25003 5.63705 7.37 5.58989L13.55 3.12989V11.6099L7.37 9.14989ZM14.83 6.11989V8.61989C15.1615 8.61989 15.4795 8.4882 15.7139 8.25378C15.9483 8.01936 16.08 7.70142 16.08 7.36989C16.08 7.03837 15.9483 6.72043 15.7139 6.48601C15.4795 6.25159 15.1615 6.11989 14.83 6.11989Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5029_79">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <p className="fs_14 text-white ">Marketing</p>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="text-center d-flex flex-column py-2">
                  <Link className=" text-white " to="Catalog1/">
                    Location_1
                  </Link>
                  <Link className="mt-1 text-white " to="Catalog2/">
                    Location_2
                  </Link>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </a>
        <Link className="text-decoration-none " to="Comunication/">
          <div className=" d-flex align-items-center hover_effect py-3 px-3 gap-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99967 6.6665C8.3533 6.6665 8.69243 6.80698 8.94248 7.05703C9.19253 7.30708 9.33301 7.64621 9.33301 7.99984C9.33301 8.35346 9.19253 8.6926 8.94248 8.94265C8.69243 9.19269 8.3533 9.33317 7.99967 9.33317C7.64605 9.33317 7.30691 9.19269 7.05687 8.94265C6.80682 8.6926 6.66634 8.35346 6.66634 7.99984C6.66634 7.64621 6.80682 7.30708 7.05687 7.05703C7.30691 6.80698 7.64605 6.6665 7.99967 6.6665ZM2.66634 2.6665H7.33301C7.68663 2.6665 8.02577 2.80698 8.27582 3.05703C8.52587 3.30708 8.66634 3.64622 8.66634 3.99984V5.99984H7.33301V3.99984H2.66634V7.33317H3.99967V5.99984L5.99967 7.99984L3.99967 9.99984V8.6665H2.66634C2.31272 8.6665 1.97358 8.52603 1.72353 8.27598C1.47348 8.02593 1.33301 7.68679 1.33301 7.33317V3.99984C1.33301 3.64622 1.47348 3.30708 1.72353 3.05703C1.97358 2.80698 2.31272 2.6665 2.66634 2.6665ZM13.333 13.3332H8.66634C8.31272 13.3332 7.97358 13.1927 7.72353 12.9426C7.47348 12.6926 7.33301 12.3535 7.33301 11.9998V9.99984H8.66634V11.9998H13.333V8.6665H11.9997V9.99984L9.99967 7.99984L11.9997 5.99984V7.33317H13.333C13.6866 7.33317 14.0258 7.47365 14.2758 7.72369C14.5259 7.97374 14.6663 8.31288 14.6663 8.6665V11.9998C14.6663 12.3535 14.5259 12.6926 14.2758 12.9426C14.0258 13.1927 13.6866 13.3332 13.333 13.3332Z"
                fill="white"
              />
            </svg>

            <p className="fs_14 text-white ">Communications</p>
          </div>
        </Link>
        <Link className="text-decoration-none " to="Transaction/">
          <div className=" d-flex align-items-center hover_effect py-3 px-3 gap-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 1.5V14.5H11V13.5H4V2.5H9V5.5H12V6.5H13V4.8L12.85 4.65L9.85 1.65L9.7 1.5H3ZM10 3.2L11.3 4.5H10V3.2ZM5 6.5V7.5H11V6.5H5ZM13.5 7.5V8.5C12.65 8.65 12 9.35 12 10.25C12 11.25 12.75 12 13.75 12H14.25C14.65 12 15 12.35 15 12.75C15 13.15 14.65 13.5 14.25 13.5H12.5V14.5H13.5V15.5H14.5V14.5C15.35 14.35 16 13.65 16 12.75C16 11.75 15.25 11 14.25 11H13.75C13.35 11 13 10.65 13 10.25C13 9.85 13.35 9.5 13.75 9.5H15.5V8.5H14.5V7.5H13.5ZM5 9V10H8.5V9H5ZM9.5 9V10H11V9H9.5ZM5 11V12H8.5V11H5ZM9.5 11V12H11V11H9.5Z"
                fill="white"
              />
            </svg>

            <p className="fs_14 text-white ">Transactions</p>
          </div>
        </Link>
        <Link className="text-decoration-none " to="Privacy/">
          <div className=" d-flex align-items-center hover_effect py-3 px-3 gap-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_5029_338)">
                <path
                  d="M13.3337 8.00016V3.83283C13.3337 3.78021 13.3234 3.72809 13.3032 3.67947C13.2831 3.63085 13.2536 3.58668 13.2163 3.5495L11.1177 1.45083C11.0427 1.37579 10.941 1.33359 10.835 1.3335H3.06699C2.96091 1.3335 2.85916 1.37564 2.78415 1.45065C2.70913 1.52567 2.66699 1.62741 2.66699 1.7335V14.2668C2.66699 14.3729 2.70913 14.4747 2.78415 14.5497C2.85916 14.6247 2.96091 14.6668 3.06699 14.6668H8.66699M5.33366 6.66683H10.667M5.33366 4.00016H8.00033M5.33366 9.3335H7.33366"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.667 1.3335V3.60016C10.667 3.70625 10.7091 3.80799 10.7841 3.88301C10.8592 3.95802 10.9609 4.00016 11.067 4.00016H13.3337M13.3283 10.0835L15.0323 10.5162C15.2097 10.5615 15.3343 10.7228 15.329 10.9055C15.2143 14.7442 13.0003 15.3335 13.0003 15.3335C13.0003 15.3335 10.7863 14.7442 10.6717 10.9055C10.6696 10.8166 10.6978 10.7296 10.7518 10.6588C10.8057 10.5881 10.882 10.5378 10.9683 10.5162L12.6723 10.0835C12.8877 10.0288 13.113 10.0288 13.3283 10.0835Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_5029_338">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className="fs_14 text-white ">Privacy Policy</p>
          </div>
        </Link>
        <Link className="text-decoration-none " to="Term/">
          <div className=" d-flex align-items-center hover_effect py-3 px-3 gap-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_5029_221)">
                <path
                  d="M1 1V15H8V16H0V0H8.71094L13 4.28906V10H12V5H8V1H1ZM9 1.71094V4H11.2891L9 1.71094ZM2 4H7V5H2V4ZM11 6V7H2V6H11ZM2 9V8H11V9H2ZM2 11V10H8V11H2ZM2 13V12H8V13H2ZM11 11H16V12H11V11ZM11 14V13H16V14H11ZM11 16V15H16V16H11ZM9 12V11H10V12H9ZM9 14V13H10V14H9ZM9 16V15H10V16H9Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_5029_221">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className="fs_14 text-white ">Terms and Conditions</p>
          </div>
        </Link>
        <a>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className=" d-flex align-items-center hover_effect py-3 px-3 gap-3">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_5029_417)">
                      <path
                        d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                        stroke="white"
                        stroke-width="1.5"
                      />
                      <path
                        d="M9.17697 1.43483C8.9323 1.3335 8.62163 1.3335 8.0003 1.3335C7.37897 1.3335 7.0683 1.3335 6.82363 1.43483C6.66175 1.50184 6.51467 1.60009 6.39078 1.72398C6.2669 1.84786 6.16864 1.99495 6.10163 2.15683C6.0403 2.3055 6.01563 2.4795 6.0063 2.73216C6.00215 2.91482 5.95163 3.09343 5.85951 3.25121C5.76738 3.40899 5.63666 3.54077 5.47963 3.63416C5.32023 3.72352 5.14073 3.7709 4.95799 3.77183C4.77525 3.77276 4.59527 3.72723 4.43497 3.6395C4.21097 3.52083 4.04897 3.4555 3.8883 3.43416C3.53785 3.38808 3.18343 3.48303 2.90297 3.69816C2.69363 3.86016 2.53763 4.12883 2.22697 4.66683C1.9163 5.20483 1.7603 5.4735 1.7263 5.73683C1.70339 5.91046 1.71491 6.08691 1.76021 6.25609C1.80551 6.42527 1.88369 6.58387 1.9903 6.72283C2.08897 6.85083 2.22697 6.95816 2.44097 7.09283C2.7563 7.29083 2.95897 7.62816 2.95897 8.00016C2.95897 8.37216 2.7563 8.7095 2.44097 8.90683C2.22697 9.04216 2.0883 9.1495 1.9903 9.2775C1.88369 9.41645 1.80551 9.57505 1.76021 9.74423C1.71491 9.91341 1.70339 10.0899 1.7263 10.2635C1.76097 10.5262 1.9163 10.7955 2.2263 11.3335C2.53763 11.8715 2.69297 12.1402 2.90297 12.3022C3.04192 12.4088 3.20052 12.487 3.3697 12.5323C3.53888 12.5776 3.71533 12.5891 3.88897 12.5662C4.04897 12.5448 4.21097 12.4795 4.43497 12.3608C4.59527 12.2731 4.77525 12.2276 4.95799 12.2285C5.14073 12.2294 5.32023 12.2768 5.47963 12.3662C5.80163 12.5528 5.99297 12.8962 6.0063 13.2682C6.01563 13.5215 6.03963 13.6948 6.10163 13.8435C6.16864 14.0054 6.2669 14.1525 6.39078 14.2763C6.51467 14.4002 6.66175 14.4985 6.82363 14.5655C7.0683 14.6668 7.37897 14.6668 8.0003 14.6668C8.62163 14.6668 8.9323 14.6668 9.17697 14.5655C9.33885 14.4985 9.48593 14.4002 9.60982 14.2763C9.7337 14.1525 9.83196 14.0054 9.89897 13.8435C9.9603 13.6948 9.98497 13.5215 9.9943 13.2682C10.0076 12.8962 10.199 12.5522 10.521 12.3662C10.6804 12.2768 10.8599 12.2294 11.0426 12.2285C11.2254 12.2276 11.4053 12.2731 11.5656 12.3608C11.7896 12.4795 11.9516 12.5448 12.1116 12.5662C12.2853 12.5891 12.4617 12.5776 12.6309 12.5323C12.8001 12.487 12.9587 12.4088 13.0976 12.3022C13.3076 12.1408 13.463 11.8715 13.7736 11.3335C14.0843 10.7955 14.2403 10.5268 14.2743 10.2635C14.2972 10.0899 14.2857 9.91341 14.2404 9.74423C14.1951 9.57505 14.1169 9.41645 14.0103 9.2775C13.9116 9.1495 13.7736 9.04216 13.5596 8.9075C13.4035 8.81257 13.274 8.6795 13.1834 8.52078C13.0928 8.36206 13.044 8.18291 13.0416 8.00016C13.0416 7.62816 13.2443 7.29083 13.5596 7.0935C13.7736 6.95816 13.9123 6.85083 14.0103 6.72283C14.1169 6.58387 14.1951 6.42527 14.2404 6.25609C14.2857 6.08691 14.2972 5.91046 14.2743 5.73683C14.2396 5.47416 14.0843 5.20483 13.7743 4.66683C13.463 4.12883 13.3076 3.86016 13.0976 3.69816C12.9587 3.59156 12.8001 3.51337 12.6309 3.46807C12.4617 3.42278 12.2853 3.41125 12.1116 3.43416C11.9516 3.4555 11.7896 3.52083 11.565 3.6395C11.4047 3.72711 11.2249 3.77258 11.0423 3.77165C10.8597 3.77071 10.6803 3.72341 10.521 3.63416C10.3639 3.54077 10.2332 3.40899 10.1411 3.25121C10.049 3.09343 9.99845 2.91482 9.9943 2.73216C9.98497 2.47883 9.96097 2.3055 9.89897 2.15683C9.83196 1.99495 9.7337 1.84786 9.60982 1.72398C9.48593 1.60009 9.33885 1.50184 9.17697 1.43483Z"
                        stroke="white"
                        stroke-width="1.5"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5029_417">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <p className="fs_14 text-white ">Settings</p>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="text-center d-flex flex-column py-2">
                  <Link className=" text-white " to="Catalog1/">
                    Language
                  </Link>
                  <Link className="mt-1 text-white " to="Catalog2/">
                   Personal settings
                  </Link>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </a>
      </div>
    </div>
  );
};

export default Asidebar;