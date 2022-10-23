import React, { useState } from "react";
import style from "./Navbar.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import useDarkMode from "../../hooks/theme";

const Navbar = () => {
  const router = useRouter();
  const [theme, setTheme] = React.useState(0);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const changeTheme = () => {
    if (theme === 0) {
      document.documentElement.style.setProperty(
        "--backgroundcolor",
        "#181a1b"
      );
      document.documentElement.style.setProperty("--color", "#fff");
      setTheme(1);
    }
    if (theme === 1) {
      document.documentElement.style.setProperty("--backgroundcolor", "#fff");
      document.documentElement.style.setProperty("--color", "#000");
      setTheme(0);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.2 }}
        className={style.navbar}
        style={{
          boxShadow: isMenuOpen
            ? "none"
            : "0 4px 2px -2px rgba(56, 56, 56, 0.2)",
        }}
      >
        <div className={style.icon}>
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="80px"
            height="80px"
            viewBox="0 0 767.000000 297.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,297.000000) scale(0.100000,-0.100000)"
              fill="var(--color)"
              stroke="none"
            >
              <path
                d="M1743 2698 c-622 -781 -678 -848 -712 -849 -14 0 -35 -4 -46 -9 -18
-7 -18 -9 10 -21 26 -11 -31 -14 -395 -21 -446 -8 -547 -15 -542 -36 1 -7 -6
-15 -15 -18 -10 -3 -25 -8 -33 -11 -32 -10 23 -33 79 -33 35 0 51 -4 43 -9 -9
-5 -1 -10 25 -14 55 -9 433 -27 601 -30 l143 -2 -38 -50 c-96 -126 -288 -352
-399 -470 -136 -145 -210 -230 -226 -260 -16 -29 45 24 116 102 32 35 61 62
63 59 6 -6 -40 -66 -116 -151 -75 -84 -135 -164 -128 -172 4 -3 64 50 134 118
167 161 239 225 156 139 -35 -36 -63 -71 -63 -77 0 -7 -22 -38 -50 -69 -41
-47 -50 -64 -50 -94 0 -21 -9 -59 -21 -84 -24 -56 -20 -83 11 -66 11 6 45 32
77 58 71 59 113 87 113 76 0 -5 -36 -55 -80 -111 -44 -56 -80 -104 -80 -108 0
-4 48 37 106 90 58 53 108 94 111 91 3 -3 -28 -51 -68 -106 -122 -168 -131
-181 -127 -186 7 -6 217 185 358 326 105 105 438 451 434 450 -1 0 -23 -12
-48 -26 -72 -40 -66 -21 10 33 78 54 144 120 277 275 70 82 99 109 122 113 16
3 134 5 260 3 l230 -3 6 -250 c7 -265 23 -378 67 -479 22 -49 31 -52 79 -35
25 8 36 7 64 -10 19 -12 46 -21 62 -21 32 0 34 -12 7 -65 -11 -21 -18 -40 -17
-42 2 -1 25 20 52 47 27 28 53 50 57 50 4 0 -22 -44 -57 -97 -36 -53 -68 -108
-71 -122 -3 -14 -12 -43 -20 -64 -18 -48 -3 -41 20 10 9 21 31 48 49 61 l32
22 3 -30 c2 -17 7 -30 12 -28 5 2 36 45 69 95 33 51 65 93 71 93 5 0 13 18 16
40 7 42 33 89 34 60 0 -36 -25 -97 -51 -124 -15 -16 -26 -32 -24 -37 7 -10
-84 -250 -101 -267 -8 -7 -14 -16 -14 -20 1 -18 82 87 140 182 72 118 105 166
67 96 -13 -25 -59 -110 -102 -190 -42 -80 -89 -165 -102 -190 -14 -25 -18 -38
-10 -30 18 17 120 187 402 667 110 188 201 340 203 338 6 -6 -57 -122 -220
-406 -271 -470 -289 -503 -262 -492 7 3 14 9 14 13 0 9 27 55 322 560 123 212
248 427 277 478 l53 92 84 0 83 0 123 -103 c228 -190 583 -460 968 -733 208
-148 401 -277 406 -271 3 2 -23 28 -56 57 -33 29 -59 55 -56 57 2 2 71 -34
152 -81 82 -48 153 -86 158 -86 5 0 -3 14 -20 32 -43 46 -15 27 144 -100 79
-63 145 -112 148 -110 2 3 -39 46 -91 98 -52 51 -95 95 -95 98 0 2 24 -16 54
-42 30 -26 59 -45 64 -44 6 2 67 -43 137 -100 123 -100 197 -148 124 -80 -110
102 -336 304 -416 372 -51 43 -93 81 -93 84 0 3 8 -2 18 -10 15 -13 259 -208
290 -231 8 -6 12 -6 12 1 0 5 -190 174 -422 373 -233 200 -491 430 -575 511
-168 162 -295 271 -412 353 -42 29 -85 63 -95 74 -18 19 -17 20 42 50 l59 30
418 7 c364 6 418 5 413 -7 -36 -92 -74 -290 -84 -424 -6 -91 -4 -107 19 -176
80 -237 296 -442 527 -500 195 -50 635 6 881 111 348 148 618 464 785 917 l37
102 61 5 c34 3 189 10 346 16 157 6 308 14 335 17 55 6 91 25 80 42 -4 8 -364
12 -1188 13 -650 1 -1100 5 -1000 8 100 3 185 8 189 13 4 4 -72 7 -169 7 -97
0 -177 4 -177 8 0 22 111 183 168 243 88 94 168 153 287 210 145 71 232 91
390 93 109 1 151 -4 258 -27 145 -32 185 -30 217 10 25 32 25 56 1 108 -36 78
-115 131 -261 177 -67 21 -93 23 -255 22 -147 0 -199 -5 -285 -23 -269 -57
-507 -169 -705 -331 -96 -79 -221 -211 -275 -292 l-45 -67 -270 -1 -270 0 50
42 c241 203 385 396 389 519 1 48 -2 54 -30 74 l-31 21 29 33 c21 23 27 38 23
54 -10 32 -52 67 -83 67 -23 0 -27 5 -29 32 -1 17 -9 39 -18 47 -25 25 -61 2
-143 -93 -133 -154 -464 -445 -782 -685 -167 -127 -331 -243 -336 -238 -5 5
40 109 59 138 22 33 87 234 121 374 15 61 36 144 46 185 31 124 34 194 9 243
-52 102 -125 187 -162 187 -19 0 -69 -56 -102 -114 -30 -51 -128 -255 -202
-421 -25 -55 -58 -129 -75 -165 -16 -36 -72 -143 -124 -237 l-95 -173 -67 0
c-37 0 -124 3 -194 7 l-128 6 0 175 c0 422 -96 700 -306 886 -120 106 -101
116 -351 -196z m258 -536 c-6 -12 -11 -81 -11 -164 l0 -144 -117 3 c-65 2
-124 5 -132 6 -16 2 117 174 207 270 55 57 73 67 53 29z m2772 -306 l-27 -56
-325 0 c-178 0 -322 2 -320 4 2 2 32 25 67 50 l62 46 178 1 c97 1 224 4 282 8
58 3 106 5 108 5 2 -1 -9 -27 -25 -58z m-2079 -211 c-5 -12 -32 -15 -155 -15
-126 0 -149 2 -149 15 0 13 24 15 155 15 133 0 154 -2 149 -15z m2857 6 c-20
-13 52 -57 107 -66 71 -11 47 -25 -44 -25 -54 0 -83 -4 -79 -10 4 -6 -18 -10
-59 -10 -37 0 -66 -4 -66 -10 0 -5 12 -11 28 -11 l27 -1 -30 -8 c-19 -5 17 -8
100 -10 83 -1 123 -5 110 -10 -11 -5 -50 -9 -87 -9 -38 -1 -68 -5 -68 -11 0
-6 73 -10 198 -10 186 0 198 -1 210 -20 11 -19 23 -20 182 -20 94 0 170 -3
170 -7 0 -26 -86 -151 -144 -209 -126 -126 -278 -182 -522 -191 -156 -6 -187
0 -253 47 -81 59 -121 161 -121 310 0 85 12 181 31 253 l10 37 157 0 c94 0
151 -4 143 -9z m-2881 -47 c0 -4 -15 -33 -32 -65 -31 -57 -34 -59 -73 -59 -22
0 -70 -3 -107 -7 l-68 -6 0 42 0 41 101 0 c64 0 98 4 94 10 -3 6 -49 10 -101
10 -71 0 -95 3 -92 12 3 7 15 15 29 19 31 9 249 11 249 3z m3263 -31 c-29 -2
-77 -2 -105 0 -29 2 -6 3 52 3 58 0 81 -1 53 -3z m-2713 -91 c-17 -2 -43 -2
-60 0 l-29 3 20 32 21 33 38 -33 39 -32 -29 -3z m-743 -261 c-62 -126 -113
-228 -114 -227 -3 2 19 431 23 444 2 8 32 12 103 12 l100 0 -112 -229z m-1777
42 c-44 -57 -173 -194 -177 -189 -10 10 101 158 139 186 51 37 66 38 38 3z
m265 -103 c0 -7 -8 -18 -18 -24 -25 -16 -43 12 -19 31 20 15 37 12 37 -7z
m-107 -69 c3 -8 -1 -12 -9 -9 -7 2 -15 10 -17 17 -3 8 1 12 9 9 7 -2 15 -10
17 -17z m-276 -118 c-66 -71 -137 -144 -158 -163 l-38 -35 33 40 c88 104 257
284 270 284 7 1 -41 -56 -107 -126z m263 67 c11 -18 -4 -45 -32 -57 -31 -15
-37 -12 -28 16 12 39 47 63 60 41z m1645 -90 c-6 -12 -14 -20 -17 -17 -2 3 1
14 8 26 17 26 24 19 9 -9z m-2030 -47 c-11 -16 -31 -43 -43 -60 -12 -18 -28
-33 -35 -33 -8 0 9 27 38 60 53 61 78 82 40 33z m2135 -53 c-9 -16 -18 -30
-21 -30 -2 0 2 14 11 30 9 17 18 30 21 30 2 0 -2 -13 -11 -30z m-1907 1 c3 -8
-1 -12 -9 -9 -7 2 -15 10 -17 17 -3 8 1 12 9 9 7 -2 15 -10 17 -17z m1710 -27
c-7 -15 -14 -21 -16 -15 -5 16 5 41 17 41 7 0 6 -10 -1 -26z m-1898 -27 c0 -2
-10 -12 -21 -23 -22 -19 -22 -19 -10 4 10 18 31 31 31 19z m85 -87 c-10 -11
-20 -18 -23 -15 -7 6 18 35 31 35 5 0 2 -9 -8 -20z"
              />
              <path
                d="M5365 1580 c-8 -12 151 -12 180 0 13 6 -13 9 -77 9 -55 1 -100 -3
-103 -9z"
              />
              <path
                d="M5360 1460 c0 -5 13 -10 29 -10 17 0 33 5 36 10 4 6 -8 10 -29 10
-20 0 -36 -4 -36 -10z"
              />
              <path
                d="M5770 1430 c19 -13 30 -13 30 0 0 6 -10 10 -22 10 -19 0 -20 -2 -8
-10z"
              />
              <path
                d="M168 598 c-69 -80 -102 -127 -94 -135 14 -14 166 160 166 190 0 19
-22 2 -72 -55z"
              />
              <path
                d="M332 575 c-48 -46 -82 -84 -77 -84 13 0 28 12 110 97 38 40 66 72 62
72 -4 0 -47 -38 -95 -85z"
              />
              <path d="M2426 603 c-6 -14 -5 -15 5 -6 7 7 10 15 7 18 -3 3 -9 -2 -12 -12z" />
              <path
                d="M2357 493 c-4 -3 -7 -11 -7 -17 0 -6 5 -5 12 2 6 6 9 14 7 17 -3 3
-9 2 -12 -2z"
              />
              <path
                d="M2263 409 c-14 -17 -64 -131 -60 -135 6 -7 79 126 75 137 -3 8 -7 7
-15 -2z"
              />
              <path
                d="M4884 266 c33 -31 64 -56 69 -56 17 0 -34 49 -83 82 -44 29 -44 28
14 -26z"
              />
              <path
                d="M2403 268 c-13 -15 -74 -148 -69 -148 9 0 87 142 84 152 -2 6 -8 5
-15 -4z"
              />
            </g>
          </svg>
        </div>
        <div className={`${style.navmenu_link} ${style.isMobile}`}>
          <ul>
            <li className={router.pathname == "/" ? style.active : ""}>
              <Link href="/">Home</Link>
            </li>
            <li className={router.pathname == "/blogs" ? style.active : ""}>
              <Link href="/blogs">Blogs</Link>
            </li>
            {/* <li>
              <a href="#">Hobby</a>
            </li> */}
            <li className={router.pathname == "/contactme" ? style.active : ""}>
              <Link href="/contactme">Contact Me</Link>
            </li>
          </ul>
        </div>
        <div className={`${style.navsocial}  ${style.isMobile}`}>
          <ul>
            <li>
              <a href="">
                <FaGithub size="1.5rem" />
              </a>
            </li>
            <li>
              <a href="">
                <FaLinkedin size="1.5rem" />
              </a>
            </li>
            <li>
              <a onClick={changeTheme}>
                <IoMdMoon size="1.5rem" />
              </a>
            </li>
          </ul>
        </div>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
          className={` ${style.isDesktop}`}
        >
          <a onClick={changeTheme}>
            <IoMdMoon size="1.5rem" />
          </a>
          <div
            className={`${style.mobilenavmenu_icon} ${
              isMenuOpen ? style.menuon : ""
            }`}
            onClick={toggleMenu}
          >
            <div className={style.mobilenavmenu_icon_line}></div>
            <div className={style.mobilenavmenu_icon_line}></div>
          </div>
        </div>
      </motion.nav>
      <div
        className={`${style.mobilenavmenu} ${isMenuOpen ? style.menuon : ""}`}
      >
        <div className={style.mobilenavmenu_content}>
          <ul>
            <li
              className={router.pathname == "/" ? style.active : ""}
              onClick={toggleMenu}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={router.pathname == "/blogs" ? style.active : ""}
              onClick={toggleMenu}
            >
              <Link href="/blogs">Blogs</Link>
            </li>
            {/* <li>

                    <a href="#">Hobby</a>
                    </li> */}
            <li
              className={router.pathname == "/contactme" ? style.active : ""}
              onClick={toggleMenu}
            >
              <Link href="/contactme">Contact Me</Link>
            </li>
            <li>
              <a href="">
                <FaGithub size="1.5rem" />
              </a>
              <a href="">
                <FaLinkedin size="1.5rem" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
