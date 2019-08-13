import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://heks.design', label: 'HEKS.DESIGN' },
  { href: 'https://github.com/zeit/next.js', label: 'GITHUB' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href='https://dribbble.com/hekscd'>
          <a>DRIBBBLE</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
        background-color: #212121;
      }
      nav {
        text-align: center;
        background-color: #fff;
        position: absolute;
        top: 0;
        width: 100vw;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #212121;
        text-decoration: none;
        font-size: 13px;
      }
      :global(a:hover) {
        color: #A5A5A5;
      }
      :global(h1, h2, h3, h4, h5, p, a) {
        color: #fff;
      }
    `}</style>
  </nav>
)

export default Nav
