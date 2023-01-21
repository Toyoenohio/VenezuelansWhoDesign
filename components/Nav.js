import Link from "next/link";

export default function Nav(props) {
  return (
    <ul className="auxNav" {...props}>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/nominate">
          <a>Nominate</a>
        </Link>
      </li>
      <li>
        <Link href="https://cafecito.app/argentiniansdesign">
          <a target="_blank">Donate</a>
        </Link>
      </li>

      <style jsx>{`
        ul {
          padding: 0;
          margin: 0;
          display: flex;
        }

        ul li {
          list-style: none;
          margin-right: 2.2rem;
        }

        ul li a {
          color: #111;
          text-decoration: none;
          transition: color 150ms ease;
        }

        ul li a:hover {
          color: rgba(0, 0, 0, 0.5);
        }

        @media (prefers-color-scheme: dark) {
          ul li a {
            color: #fff;
          }

          ul li a:hover {
            color: rgba(255, 255, 255, 0.5);
          }
        }
      `}</style>
    </ul>
  );
}
