"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import styles from "./NavBar.module.css";

const NAV_ITEMS = [
  { title: "Tourist", path: "tourist-visa", countries: ["Canada", "Australia", "USA", "UK", "Europe", "Japan", "Dubai", "New-Zealand", "Singapore"] },
  { title: "Student", path: "student-visa", countries: ["Canada", "Australia", "USA", "UK", "Europe", "New-Zealand"] },
  { title: "Business", path: "business", countries: ["Canada", "Australia", "UK", "Europe", "New-Zealand"] },
  { title: "Permanent Residency", path: "permanent-residency-visa", countries: ["Canada", "Australia"] },
  { title: "Work", path: "work", countries: ["Canada", "Australia", "UK", "Europe", "New-Zealand"] },
  { title: "Refusal Visa", path: "refusal-visa", countries: ["Canada", "Australia", "USA", "UK", "Europe", "New-Zealand"] },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  // Toggle mobile menu
  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  // Handle submenu toggle for mobile
  const handleSubmenuToggle = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={styles.navContainer} ref={navRef}>
      <nav className={styles.navBar} aria-label="Main Navigation">
        {/* Logo */}
        <Link href="/" className={styles.logoLink}>
          <Image
            className={styles.logo}
            src="/gvilogo.png"
            alt="Global Visa Internationals Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className={clsx(styles.menu, { [styles.menuOpen]: menuOpen })}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Links */}
        <ul className={clsx(styles.navLinks, { [styles.showMenu]: menuOpen })}>
          
          <li><Link href="/about-us" title="About Us">About</Link></li>

          {/* Dropdown Menus */}
          {NAV_ITEMS.map(({ title, path, countries }) => (
            <li
              key={title}
              className={styles.submenuContainer}
              onMouseEnter={() => window.innerWidth > 768 && setOpenDropdown(title)}
              onMouseLeave={() => window.innerWidth > 768 && setOpenDropdown(null)}
            >
              <button
                className={styles.submenuToggle}
                aria-expanded={openDropdown === title}
                onClick={() => handleSubmenuToggle(title)}
                title={`${title} Visa`}
              >
                {title} <FaChevronDown className={clsx(styles.dropdownIcon, { [styles.rotate]: openDropdown === title })} />
              </button>
              <ul className={clsx(styles.submenu, { [styles.submenuOpen]: openDropdown === title })}>
                {countries.map((country) => (
                  <li key={country}>
                    <Link href={`/Visa/${path}/${country.toLowerCase()}`} title={`${title} Visa for ${country}`}>
                      {country.replace("-", " ")}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}

          <li><Link href="/blog" title="Blog">Blog</Link></li>
          <li><Link href="/career" title="Contact Us">Career</Link></li>
          <li><Link href="/contact" title="Contact Us">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
