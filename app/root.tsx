import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./tailwind.css"

export function links() {
  return [
      { rel: 'stylesheet', href: styles },
      { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
  ];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Ada Handle Starter Kit",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en" className="dark">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="app w-full h-screen flex flex-col bg-gray-950 overflow-y-scroll">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
